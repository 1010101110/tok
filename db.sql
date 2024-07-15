CREATE TABLE art (
   art_id serial PRIMARY KEY,
   title varchar(280) NULL,
   author varchar(280) NULL,

   summary varchar(280) NULL,
   markdown TEXT NULL,

   created TIMESTAMP DEFAULT NOW()
);

CREATE TABLE res (
   res_id serial PRIMARY KEY,
   res_type varchar(50) NULL,
   res_region varchar(5) NULL,

   title varchar(280) NULL,
   summary varchar(280) NULL,
   markdown TEXT NULL,

   street_address TEXT NULL,
   phone varchar(20) NULL,
   website varchar(280) NULL,

   created TIMESTAMP DEFAULT NOW()
);
