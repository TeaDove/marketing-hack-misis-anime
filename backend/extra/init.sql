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
    gtin               text
        constraint gtin_pk
            primary key,
    inn                text references marking.participant_reference (inn),
    product_name       text not null,
    product_short_name text not null,
    tnved              text not null,
    tnved10            text not null,
    brand              text not null,
    country            text,
    volume             int
);

create index product_reference_inn_idx
    on marking.product_reference (inn);

create table marking.salepoint_reference
(
    id_sp          text
        constraint id_sp_pk
            primary key,
    inn            text references marking.participant_reference (inn),
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
    inn            text references marking.participant_reference (inn),
    gtin           text references marking.product_reference (gtin),
    prid           text references marking.participant_reference (inn),
    operation_type text                     not null,
    cnt            int                      not null
);

create index product_input_inn_idx
    on marking.product_input (inn);

create table marking.product_output
(
    dt             timestamp with time zone not null,
    gtin           text references marking.product_reference (gtin),
    prid           text references marking.participant_reference (inn),
    inn            text references marking.participant_reference (inn),
    id_sp          text references marking.salepoint_reference (id_sp),
    type_operation text                     not null,
    price          int                      not null,
    cnt            int                      not null
);

create index product_output_inn_idx
    on marking.product_output (inn);

create table marking.product_movement
(
    dt           timestamp with time zone not null,
    gtin         text references marking.product_reference (gtin),
    prid         text references marking.participant_reference (inn),
    sender_inn   text references marking.participant_reference (inn),
    receiver_inn text references marking.participant_reference (inn),
    cnt_moved    int                      not null
);

copy marking.participant_reference from '/datasets/participant_reference.csv' delimiter ',' csv header;
copy marking.product_reference from '/datasets/product_reference.csv' delimiter ',' csv header;
copy marking.salepoint_reference from '/datasets/salepoint_reference.csv' delimiter ',' csv header;
copy marking.product_input from '/datasets/product_input.csv' delimiter ',' csv header;
copy marking.product_output from '/datasets/product_output.csv' delimiter ',' csv header;
copy marking.product_movement from '/datasets/product_movement.csv' delimiter ',' csv header;
