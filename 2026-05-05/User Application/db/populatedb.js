#! /usr/bin/env node
require('dotenv').config();
const { Client } = require("pg");
const SQL = `
CREATE TYPE employee_role AS ENUM (
    'ADMIN',
    'HR',
    'MANAGER',
    'EMPLOYEE'
);

CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password TEXT NOT NULL,
    role employee_role NOT NULL
);

INSERT INTO employees(name, email, password, role)
VALUES 
('Sameer', 'sameer@gmail.com', 'password123', 'HR'),

('Rahul Kumar', 'rahul@gmail.com', 'password123', 'MANAGER'),

('Priya Sharma', 'priya@gmail.com', 'password123', 'EMPLOYEE'),

('Arjun Patel', 'arjun@gmail.com', 'password123', 'ADMIN'),

('Sneha Reddy', 'sneha@gmail.com', 'password123', 'HR'),

('Vikram Singh', 'vikram@gmail.com', 'password123', 'MANAGER'),

('Anjali Verma', 'anjali@gmail.com', 'password123', 'EMPLOYEE'),

('Karan Mehta', 'karan@gmail.com', 'password123', 'ADMIN');
`;

async function main() {

  console.log("seeding...");

  const connectionString =
    process.argv[2] || process.env.CONNECTION_STRING;

  console.log(connectionString);

  const client = new Client({
    connectionString,
  });

  await client.connect();

  await client.query(SQL);

  await client.end();

  console.log("done");
}

main();