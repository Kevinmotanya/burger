-- create database burgers_db --


USE ujp9w3g1s6reu3sq;
-- create table burgers --
DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id INTEGER(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name VARCHAR(250) NOT NULL,
    devoured BOOLEAN DEFAULT false
);