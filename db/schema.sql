DROP DATABASE IF EXISTS funko_db;

CREATE DATABASE funko_db;

USE funko_db;

CREATE TABLE Users (
	id int NOT NULL AUTO_INCREMENT,
    email varchar(255) NOT NULL,
    CONSTRAINT Email UNIQUE(email),
    username varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE Books (
	id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    author varchar(255) NOT NULL,
	currnentPage INT NOT NULL,
    hasStarted BOOLEAN not null default 0,
	PRIMARY KEY (id)
);

