from dataclasses import dataclass

from repository.mongo_repository import MongoRepository
from repository.pg_repository import PGRepository
from service.exhauster_service import ExhausterService
from service.mapping_service import MappingService
from service.stream_service import StreamService


@dataclass
class Container:
    stream_service: StreamService
    exhauster_service: ExhausterService


def init_combat_container() -> Container:
    mapping_service = MappingService()

    mongo_repository = MongoRepository()
    pg_repository = PGRepository()

    exhauster_service = ExhausterService(mongo_repository=mongo_repository)
    stream_service = StreamService(
        mapping_service=mapping_service,
        mongo_repository=mongo_repository,
        exhauster_service=exhauster_service,
        pg_repository=pg_repository,
    )
    return Container(stream_service=stream_service, exhauster_service=exhauster_service)
