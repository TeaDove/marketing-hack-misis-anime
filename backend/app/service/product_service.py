from dataclasses import dataclass


from repository.pg_repository import PGRepository
from schemas.product import Product
from schemas.salepoint import SalepointReference
from typing import Optional, List


@dataclass
class ProductService:
    pg_repository: PGRepository

    def get_product(self, inn: str, gtin: str) -> Optional[Product]:
        return self.pg_repository.get_product(gtin=gtin, inn=inn)

    def get_products(self, inn: str) -> List[Product]:
        return self.pg_repository.get_products(inn=inn)

    def get_salepoint_by_product(
        self,
        inn: str,
        gtin: str,
        page: Optional[int] = None,
        size: Optional[int] = None,
    ) -> List[SalepointReference]:
        return self.pg_repository.get_salespoints_by_product(
            inn=inn, gtin=gtin, page=page, size=size
        )

    def get_distributors(self, inn: str, gtin: str) -> List[str]:
        return self.pg_repository.get_distributors(inn=inn, gtin=gtin)
