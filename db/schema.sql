-- create database burgers_db --
CREATE DATABASE burgers_db;

USE burgers_db;
-- create table burgers --
CREATE TABLE burgers (
    id INTEGER(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name VARCHAR(250) NOT NULL,
    devoured BOOLEAN DEFAULT false
);