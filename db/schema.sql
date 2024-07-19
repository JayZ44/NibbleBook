DROP DATABASE IF EXISTS snacks_dev;

CREATE DATABASE snacks_dev;

\c snacks_dev


CREATE TABLE snacks (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL, 
origin TEXT,
description TEXT NOT NULL,
rating INT DEFAULT 0,
is_vegetarian BOOLEAN DEFAULT FALSE,
discovered_date DATE,
comments TEXT
);