from schemas.base import CamelizedBaseModel
from pydantic import Field
from typing import Optional


class Product(CamelizedBaseModel):
    gtin: str = Field(..., example="289AEBCA82877CB19E7AA33E0E522883")
    inn: str = Field(..., example="D0B1FE981FCC19F934C3FFD91690430F")
    product_name: str = Field(..., example="68F60FA530914522B26E25F262EBC6D6")
    product_short_name: str = Field(..., example="9199AB529CF62D4BDB7E8B1D7459001D")
    tnved: str = Field(..., example="6D2580183CEF6C8AF1CC72E1C6E6FBC4")  # ???
    tnved10: str = Field(..., example="58A4B52373651DA4292AD5725D388F8A")
    brand: str = Field(..., example="D2D1641B196DA5477D40C0907FD5F1DA")
    country: Optional[str] = Field(None, example=None)
    volume: Optional[str] = Field("10", example=None)
