import pandas as pd

dataframe = pd.read_csv("product_reference.csv")
dataframe.replace(to_replace="", value=None, inplace=True)
dataframe.replace(to_replace="НЕ КЛАССИФИЦИРОВАНО", value=None, inplace=True)
dataframe.to_csv("product_reference.csv", index=False)

dataframe = pd.read_csv("participant_reference.csv")
dataframe.replace(to_replace="", value=None, inplace=True)
dataframe.to_csv("participant_reference.csv", index=False)

dataframe = pd.read_csv("salepoint_reference.csv")
dataframe.replace(to_replace="", value=None, inplace=True)
dataframe.to_csv("salepoint_reference.csv", index=False)

dataframe = pd.read_csv("product_input.csv")
dataframe.replace(to_replace="", value=None, inplace=True)
dataframe.to_csv("product_input.csv", index=False)

dataframe = pd.read_csv("product_output.csv")
dataframe.replace(to_replace="", value=None, inplace=True)
dataframe.to_csv("product_output.csv", index=False)

dataframe = pd.read_csv("product_movement.csv")
dataframe.replace(to_replace="", value=None, inplace=True)
dataframe.to_csv("product_movement.csv", index=False)
