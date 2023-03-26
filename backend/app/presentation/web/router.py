from fastapi import APIRouter, Path, HTTPException, status, Query
from schemas.product import Product
from schemas.salepoint import SalepointReference
from presentation.dependencies import container
from typing import List, Optional


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
    gtin: str = Path(..., example="289AEBCA82877CB19E7AA33E0E522883"),
) -> Product:
    product = container.product_service.get_product(gtin=gtin, inn=inn)
    if product is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Not found")

    return product


@router.get(
    "/organizations/{inn:str}/products/{gtin:str}/salepoints",
    response_model=List[SalepointReference],
)
def get_salepoints_by_product(
    inn: str = Path(..., example="DA62EC79660CF21AC37A260DA6F642C4"),
    gtin: str = Path(..., example="289AEBCA82877CB19E7AA33E0E522883"),
    page: Optional[int] = Query(None),
    size: Optional[int] = Query(None),
) -> List[SalepointReference]:
    salepoints = container.product_service.get_salepoint_by_product(
        gtin=gtin, inn=inn, page=page, size=size
    )

    return salepoints


@router.get(
    "/organizations/{inn:str}/products/{gtin:str}/distributors",
    response_model=List[str],
)
def get_distributors(
    inn: str = Path(..., example="DA62EC79660CF21AC37A260DA6F642C4"),
    gtin: str = Path(..., example="289AEBCA82877CB19E7AA33E0E522883"),
) -> List[str]:
    distributors = container.product_service.get_distributors(gtin=gtin, inn=inn)

    return distributors
