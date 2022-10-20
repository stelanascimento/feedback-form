CREATE DATABASE feedback_data1;
 
create table if not exists users (
    id serial primary key,
    name text not null,
    email text not null unique,
    message text not null
);

