DROP DATABASE IF EXISTS funko_db;

CREATE DATABASE funko_db;

USE funko_db;

CREATE TABLE Teachers (
	id int NOT NULL AUTO_INCREMENT,
    email varchar(255) NOT NULL,
    CONSTRAINT Email UNIQUE(email),
	school varchar(255) NOT NULL,
	city varchar(255) NOT NULL,
	state varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE Class (
	id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE Books (
	id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    author varchar(255) NOT NULL,
    complete BOOLEAN not null default 0,
	PRIMARY KEY (id)
);
