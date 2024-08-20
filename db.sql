CREATE TABLE art (
   id serial PRIMARY KEY,
   title varchar(280) NULL,
   author varchar(280) NULL,

   summary varchar(280) NULL,
   markdown TEXT NULL,

   created TIMESTAMP DEFAULT NOW(),
   edited TIMESTAMP DEFAULT NOW()
);

CREATE TABLE res (
   id serial PRIMARY KEY,
   res_type varchar(50) NULL,
   res_region varchar(5) NULL,

   title varchar(280) NULL,
   markdown TEXT NULL,

   street_address TEXT NULL,
   phone varchar(50) NULL,
   email varchar(200) NULL,
   website varchar(280) NULL,

   created TIMESTAMP DEFAULT NOW(),
   edited TIMESTAMP DEFAULT NOW()
);
