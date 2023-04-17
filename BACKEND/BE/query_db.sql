CREATE TABLE users(
id serial primary key,
username varchar(100),
password text,
createAt timestamp,
updateAt timestamp
)

CREATE TABLE customer(
id serial primary key,
firstname varchar(100),
lastname varchar(100),
user_id integer references users(id),
createAt timestamp,
updateAt timestamp
)


CREATE TABLE orders(
id serial primary key,
user_id integer references users(id),
totalproduct integer,
totalprice numeric,
createAt timestamp,
updateAt timestamp
)


	
CREATE TABLE product_category(
id serial primary key,
name varchar(100),
description varchar(200),
createAt timestamp,
updateAt timestamp
)
	
	
CREATE TABLE product(
id serial primary key,
name varchar(100),
description varchar(200),
category_id integer references product_category(id),
price numeric,
image varchar(200),
createAt timestamp,
updateAt timestamp
)

CREATE TABLE order_detail(
id serial primary key,
order_id integer references orders(id),
product_id integer references product(id),
quantity integer,
createAt timestamp,
updateAt timestamp
)
	
