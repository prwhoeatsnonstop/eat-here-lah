CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    cuisine VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL
);

INSERT INTO restaurants (name, location, cuisine, address) values ('Waffletown', 'Central', 'Western', '271 Bukit Timah Road #01-08 Balmoral Plaza, 259708');