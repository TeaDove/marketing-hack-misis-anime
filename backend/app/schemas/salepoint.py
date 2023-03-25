from schemas.base import CamelizedBaseModel
from typing import Optional
from pydantic import Field


class SalepointReference(CamelizedBaseModel):
    id_sp: str = Field(..., example="9D28FDABCB9A028CDD077BE0EF013912")
    inn: str = Field(None, example="DA62EC79660CF21AC37A260DA6F642C4")
    region_code: str = Field(..., example="77")
    city_with_type: Optional[str] = Field(None, example=None)
    city_fias_id: Optional[str] = Field(None, example=None)
    postal_code: Optional[str] = Field(None, example="109012")  # todo make it int
