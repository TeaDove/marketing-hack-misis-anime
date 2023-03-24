-- CREATE DATABASE db_marking;

-- grant all privileges on database db_misis to db_misis;

-- \c db_misis;

create schema if not exists marking;

create table marking.participant_reference
(
    inn         text
        constraint inn_pk
            primary key,
    region_code text not null
);

create table marking.product_reference
(
    id SERIAL primary key,
    gtin               text not null,
    inn                text,
    product_name       text not null,
    product_short_name text not null,
    tnved              text not null,
    tnved10            text not null,
    brand              text not null,
    country            text,
    volume             text
);

create unique index pr_inn_gtin_idx
    on marking.product_reference (inn, gtin);

create index product_reference_inn_idx
    on marking.product_reference (inn);

create table marking.salepoint_reference
(
    id_sp          text
        constraint id_sp_pk
            primary key,
    inn            text,
    region_code    text not null,
    city_with_type text,
    city_fias_id   text,
    postal_code    text
);

create index salepoint_reference_inn_idx
    on marking.salepoint_reference (inn);

create table marking.product_input
(
    dt             timestamp with time zone not null,
    inn            text,
    gtin           text,
    prid           text,
    operation_type text                     not null,
    cnt            numeric                      not null
);

create index product_input_inn_idx
    on marking.product_input (inn);

create table marking.product_output
(
    dt             timestamp with time zone not null,
    gtin           text,
    prid           text,
    inn            text,
    id_sp          text,
    type_operation text                     not null,
    price          numeric                      not null,
    cnt            numeric                      not null
);

create index product_output_inn_idx
    on marking.product_output (inn);

create table marking.product_movement
(
    dt           timestamp with time zone not null,
    gtin         text,
    prid         text,
    sender_inn   text,
    receiver_inn text,
    cnt_moved    numeric                      not null
);

copy marking.product_reference(gtin, inn, product_name, product_short_name, tnved, tnved10, brand, country, volume) from '/datasets/product_reference.csv' delimiter ',' csv header;
copy marking.participant_reference from '/datasets/participant_reference.csv' delimiter ',' csv header;
copy marking.salepoint_reference from '/datasets/salepoint_reference.csv' delimiter ',' csv header;
copy marking.product_input from '/datasets/product_input.csv' delimiter ',' csv header;
copy marking.product_output from '/datasets/product_output.csv' delimiter ',' csv header;
copy marking.product_movement from '/datasets/product_movement.csv' delimiter ',' csv header;
