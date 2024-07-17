\c snacks_dev


CREATE TABLE snacks (
id SERIAL PRIMARY KEY,
name TEXT, 
origin TEXT,
description TEXT,
rating INT DEFAULT 0,
is_vegetarian BOOLEAN DEFAULT FALSE,
discovered_date DATE,
comments TEXT
);