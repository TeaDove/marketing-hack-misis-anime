from sqlalchemy import Column, Text, BigInteger, MetaData
from sqlalchemy.orm import declarative_base


Base = declarative_base()
Base.metadata = MetaData(schema="marking")


class Product(Base):
    __tablename__ = "product_reference"

    id = Column(BigInteger, primary_key=True)
    gtin = Column(Text)
    inn = Column(Text)
    product_name = Column(Text)
    product_short_name = Column(Text)
    tnved = Column(Text)
    tnved10 = Column(Text)
    brand = Column(Text)
    country = Column(Text)
    volume = Column(Text)
