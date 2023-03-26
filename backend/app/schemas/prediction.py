from schemas.base import CamelizedBaseModel
import enum
from pydantic import Field
from typing import List


class Relations(str, enum.Enum):
    distributes_from_to = "distributes_from_to"
    distributes = "distributes"
    distributed_to = "distributed_to"
    located_in = "located_in"
    distributes_inverse = "distributes_inverse"
    distributed_to_inverse = "distributed_to_inverse"
    distributes_from_to_inverse = "distributes_from_to_inverse"
    sales_inverse = "sales_inverse"
    sold_in = "sold_in"
    sold_in_inverse = "sold_in_inverse"
    sales = "sales"
    located_in_inverse = "located_in_inverse"


class RelationPrediction(CamelizedBaseModel):
    value: float
    class_: Relations = Field(..., alias="class")


class Prediciton(CamelizedBaseModel):
    predictions: List[RelationPrediction]
