CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
id 	INT(11) NOT NULL AUTO_INCREMENT,
name VARCHAR(45) DEFAULT NULL,
salary INT(5) DEFAULT NULL,
PRIMARY KEY (id)

)

DESCRIBE employee;

INSERT INTO employee VALUES
(1, 'Joe', 1000),
(2, 'Mary', 2222),
(3, 'Jesus', 3333),
(4, 'Marco', 4444),