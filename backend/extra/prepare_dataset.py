import pandas as pd
from pathlib import Path

base_path = Path("../app/data/datasets")

dataframe = pd.read_csv(base_path / "product_reference.csv")
dataframe.replace(to_replace="", value=None, inplace=True)
dataframe.replace(to_replace="НЕ КЛАССИФИЦИРОВАНО", value=None, inplace=True)
dataframe.to_csv(base_path / "product_reference.csv", index=False)

dataframe = pd.read_csv(base_path / "participant_reference.csv")
dataframe.replace(to_replace="", value=None, inplace=True)
dataframe.to_csv(base_path / "participant_reference.csv", index=False)

dataframe = pd.read_csv(base_path / "salepoint_reference.csv")
dataframe.replace(to_replace="", value=None, inplace=True)
dataframe.to_csv(base_path / "salepoint_reference.csv", index=False)

dataframe = pd.read_csv(base_path / "product_input.csv")
dataframe.replace(to_replace="", value=None, inplace=True)
dataframe.to_csv(base_path / "product_input.csv", index=False)

dataframe = pd.read_csv(base_path / "product_output.csv")
dataframe.replace(to_replace="", value=None, inplace=True)
dataframe.to_csv(base_path / "product_output.csv", index=False)

dataframe = pd.read_csv(base_path / "product_movement.csv")
dataframe.replace(to_replace="", value=None, inplace=True)
dataframe.to_csv(base_path / "product_movement.csv", index=False)
