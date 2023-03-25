from dataclasses import dataclass


from repository.pg_repository import PGRepository
from schemas.product import Product
from typing import Optional


@dataclass
class ProductService:
    pg_repository: PGRepository

    def get_product(self, gtin: str, inn: str) -> Optional[Product]:
        return self.pg_repository.get_product(gtin=gtin, inn=inn)
