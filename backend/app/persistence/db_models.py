from sqlalchemy import Column, Text, BigInteger, MetaData, DateTime, Numeric
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


class SalepointReference(Base):
    __tablename__ = "salepoint_reference"

    id_sp = Column(Text, primary_key=True)
    inn = Column(Text)
    region_code = Column(Text)
    city_with_type = Column(Text)
    city_fias_id = Column(Text)
    postal_code = Column(Text)


class ProductOutput(Base):
    __tablename__ = "product_output"

    dt = Column(DateTime(True))
    gtin = Column(Text, primary_key=True)
    prid = Column(Text)
    inn = Column(Text)
    id_sp = Column(Text)
    type_operation = Column(Text)
    price = Column(Text)
    cnt = Column(Text)


class ProductMovement(Base):
    __tablename__ = "product_movement"

    dt = Column(DateTime(True))
    gtin = Column(Text, primary_key=True)
    prid = Column(Text)

    sender_inn = Column(Text)
    receiver_inn = Column(Text)
    cnt_moved = Column(Numeric)
