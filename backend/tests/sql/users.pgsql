CREATE TABLE Users(
   role_id serial PRIMARY KEY,
   role_name VARCHAR (255) UNIQUE NOT NULL
);

-- DROP TABLE roles;