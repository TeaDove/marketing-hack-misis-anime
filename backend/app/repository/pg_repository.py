from dataclasses import dataclass

from sqlalchemy import create_engine, literal_column, select
from sqlalchemy.orm import Session, declarative_base

from shared.settings import app_settings

Base = declarative_base()


@dataclass
class PGRepository:
    def __post_init__(self):
        self.engine = create_engine(
            f"postgresql+psycopg2://{app_settings.pg_username}:{app_settings.pg_password}@"
            f"{app_settings.pg_host}:{app_settings.pg_port}/{app_settings.pg_database}"
        )

    def insert_event(self) -> int:
        with Session(self.engine) as session:
            statement = select(literal_column("1"))
            result = session.execute(statement).scalar()
        return result
