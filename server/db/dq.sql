CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    cuisine VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    created_at DATE NOT NULL DEFAULT CURRENT_DATE,
    updated_at DATE NOT NULL DEFAULT CURRENT_DATE

);

INSERT INTO restaurants (name, cuisine, address) values ('Waffletown', 'Western', '271 Bukit Timah Road #01-08 Balmoral Plaza, 259708');