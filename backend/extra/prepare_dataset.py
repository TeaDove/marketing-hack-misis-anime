import pandas as pd
from pathlib import Path

base_path = Path("../app/data/datasets")

dataframe = pd.read_csv(base_path / "product_reference.csv", decimal=",")
dataframe.replace(to_replace="", value=None, inplace=True)
dataframe.replace(to_replace="НЕ КЛАССИФИЦИРОВАНО", value=None, inplace=True)
dataframe.replace(to_replace="не классифицировано", value=None, inplace=True)
dataframe.replace(to_replace="Не класифицировано", value=None, inplace=True)
dataframe.drop_duplicates(subset=["gtin"], keep="last", inplace=True)
# dataframe["volume"].replace(",", ".", regex=True, inplace=True)
dataframe.to_csv(base_path / "product_reference.csv", index=False)
print("product_reference.csv done")

dataframe = pd.read_csv(base_path / "participant_reference.csv", decimal=",")
dataframe.replace(to_replace="", value=None, inplace=True)
dataframe.to_csv(base_path / "participant_reference.csv", index=False)
print("participant_reference.csv done")

dataframe = pd.read_csv(base_path / "salepoint_reference.csv", decimal=",")
dataframe.replace(to_replace="", value=None, inplace=True)
dataframe.to_csv(base_path / "salepoint_reference.csv", index=False)
print("salepoint_reference.csv done")

dataframe = pd.read_csv(base_path / "product_input.csv", decimal=",")
dataframe.replace(to_replace="", value=None, inplace=True)
dataframe.to_csv(base_path / "product_input.csv", index=False)
print("product_input.csv done")

dataframe = pd.read_csv(base_path / "product_output.csv", decimal=",")
dataframe.replace(to_replace="", value=None, inplace=True)
dataframe.to_csv(base_path / "product_output.csv", index=False)
print("product_output.csv done")

dataframe = pd.read_csv(base_path / "product_movement.csv", decimal=",")
dataframe.replace(to_replace="", value=None, inplace=True)
dataframe.to_csv(base_path / "product_movement.csv", index=False)
print("product_movement.csv done")
