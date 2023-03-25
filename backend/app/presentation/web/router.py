from fastapi import APIRouter, Path, HTTPException, status
from schemas.product import Product
from presentation.dependencies import container
from typing import List


router = APIRouter(prefix="")


@router.get("/ping")
async def get_server_status() -> str:
    return "pong"


@router.get("/organizations/{inn:str}/products", response_model=List[Product])
def get_products(
    inn: str = Path(..., example="DA62EC79660CF21AC37A260DA6F642C4"),
) -> List[Product]:
    products = container.product_service.get_products(inn=inn)

    return products


@router.get("/organizations/{inn:str}/products/{gtin:str}", response_model=Product)
def get_product_by_gtin(
    inn: str = Path(..., example="DA62EC79660CF21AC37A260DA6F642C4"),
    gtin: str = Path(..., example="3538E27C87AF0716E95515A1525D937A"),
) -> Product:
    product = container.product_service.get_product(gtin=gtin, inn=inn)
    if product is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Not found")

    return product
