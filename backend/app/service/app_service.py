import uuid
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Any, Dict

from tqdm import tqdm

import pandas as pd
from repository.pg_repository import PGRepository
from shared.base import logger


@dataclass
class StreamService:
    pg_repository: PGRepository

    def process_record(self) -> None:
        return None
