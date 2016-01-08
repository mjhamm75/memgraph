create database memgraph;
create role memgraph;
alter role memgraph with password 'memgraph';
alter role memgraph with login;

create table member (id serial, firstName varchar(50), lastName varchar(75));

GRANT ALL PRIVILEGES ON TABLE member TO memgraph;
GRANT ALL PRIVILEGES ON SEQUENCE member_id_seq TO memgraph;
GRANT USAGE, SELECT ON SEQUENCE member_id_seq TO memgraph;