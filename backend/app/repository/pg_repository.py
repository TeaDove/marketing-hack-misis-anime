from dataclasses import dataclass

from sqlalchemy import create_engine, select
from sqlalchemy.orm import Session, declarative_base

from shared.settings import app_settings
from schemas.product import Product
from persistence.db_models import Product as ProductModel
from typing import Optional

Base = declarative_base()


@dataclass
class PGRepository:
    def __post_init__(self) -> None:
        dsn = (
            f"postgresql+psycopg2://{app_settings.pg_username}:{app_settings.pg_password}@"
            f"{app_settings.pg_host}:{app_settings.pg_port}/{app_settings.pg_database}"
        )
        self.engine = create_engine(dsn)

    def get_product(self, gtin: str, inn: str) -> Optional[Product]:
        with Session(self.engine) as session:
            statement = select(ProductModel).where(
                ProductModel.gtin == gtin, ProductModel.inn == inn
            )
            row = session.execute(statement).scalar()

        if row is None:
            return None

        return Product.from_orm(row)
