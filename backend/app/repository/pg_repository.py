from dataclasses import dataclass

from sqlalchemy import create_engine, select
from sqlalchemy.orm import Session

from shared.settings import app_settings
from schemas.product import Product
from schemas.salepoint import SalepointReference
from persistence.db_models import Product as ProductModel
from persistence.db_models import SalepointReference as SalepointReferenceModel
from persistence.db_models import ProductOutput as ProductOutputModel
from persistence.db_models import ProductMovement as ProductMovementModel
from typing import Optional, List
from pydantic import ValidationError
from shared.base import logger


@dataclass
class PGRepository:
    def __post_init__(self) -> None:
        dsn = (
            f"postgresql+psycopg2://{app_settings.pg_username}:{app_settings.pg_password}@"
            f"{app_settings.pg_host}:{app_settings.pg_port}/{app_settings.pg_database}"
        )
        self.engine = create_engine(dsn)

    def get_product(self, inn: str, gtin: str) -> Optional[Product]:
        with Session(self.engine) as session:
            statement = select(ProductModel).where(
                ProductModel.gtin == gtin, ProductModel.inn == inn
            )
            row = session.execute(statement).scalar()

        if row is None:
            return None

        return Product.from_orm(row)

    def get_products(self, inn: str) -> List[Product]:
        with Session(self.engine) as session:
            statement = select(ProductModel).where(ProductModel.inn == inn)
            rows = session.execute(statement).scalars().all()

        items = []
        for row in rows:
            try:
                items.append(Product.from_orm(row))
            except ValidationError:
                logger.warning("validation.error")

        return items

    def get_salespoints_by_product(
        self, inn: str, gtin: str, page: int = 0, size: int = 10
    ) -> List[SalepointReference]:
        with Session(self.engine) as session:
            statement = (
                select(SalepointReferenceModel)
                .join(
                    ProductOutputModel,
                    ProductOutputModel.inn == SalepointReferenceModel.inn,
                )
                .where(ProductOutputModel.prid == inn, ProductOutputModel.gtin == gtin)
                .offset(page * size)
                .limit(size)
            )
            rows = session.execute(statement).fetchall()

        items = []
        for row in rows:
            try:
                items.append(SalepointReference.from_orm(row["SalepointReference"]))
            except ValidationError:
                logger.exception("validation.error")

        return items

    def get_distributors(self, inn: str, gtin: str) -> List[str]:
        with Session(self.engine) as session:
            statement = (
                select(ProductMovementModel.receiver_inn)
                .where(
                    ProductMovementModel.prid == inn, ProductMovementModel.gtin == gtin
                )
                .distinct()
            )
            rows = session.execute(statement).scalars().all()

        return rows
