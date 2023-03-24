from typing import Any

import humps
import ujson
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel
from pydantic.generics import GenericModel


# * Pure pydantic model without any alias generator
class PureBaseModel(BaseModel):
    def jsonable_encoder(self, **kwargs) -> Any:
        return jsonable_encoder(self, **kwargs)

    class Config:
        allow_population_by_field_name = True
        orm_mode = True
        use_enum_values = True
        json_loads = ujson.loads
        json_dumps = ujson.dumps

        @staticmethod
        def schema_extra(schema: dict, _):
            props = {}
            for k, v in schema.get("properties", {}).items():
                if not v.get("hidden", False):
                    props[k] = v
            schema["properties"] = props


# * Pure generic pydantic model without any alias generator
class GenericPureBaseModel(GenericModel):
    def jsonable_encoder(self, **kwargs) -> Any:
        return jsonable_encoder(self, **kwargs)

    class Config:
        allow_population_by_field_name = True
        orm_mode = True
        use_enum_values = True
        json_loads = ujson.loads
        json_dumps = ujson.dumps

        @staticmethod
        def schema_extra(schema: dict, _):
            props = {}
            for k, v in schema.get("properties", {}).items():
                if not v.get("hidden", False):
                    props[k] = v
            schema["properties"] = props


# * Camel alias generator model
class CamelizedBaseModel(PureBaseModel):
    class Config:
        alias_generator = humps.camelize


# * Camel alias generator generic model
class GenericCamelizedBaseModel(GenericPureBaseModel):
    class Config:
        alias_generator = humps.camelize


# * Pascal alias generator model
class PascalizeBaseModel(PureBaseModel):
    class Config:
        alias_generator = humps.pascalize


# * Pascal alias generator generic model
class GenericPascalizeBaseModel(GenericPureBaseModel):
    class Config:
        alias_generator = humps.pascalize
