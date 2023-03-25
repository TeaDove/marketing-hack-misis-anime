from dataclasses import dataclass
from repository.pg_repository import PGRepository
from service.product_service import ProductService


@dataclass
class Container:
    product_service: ProductService


def init_combat_container() -> Container:
    pg_repository = PGRepository()
    product_service = ProductService(pg_repository=pg_repository)
    return Container(product_service=product_service)
