#! /usr/bin/env node
require('dotenv').config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (255),
  email VARCHAR (255)
);

INSERT INTO usernames (username, email)
VALUES
  ('ram','ram123@gmail.com'),
  ('ravi','ravi456@gmail.com'),
  ('raju','raju789@gmail.com');
`;

async function main() {
  console.log("seeding...");
  const connectionString = process.argv[2] || process.env.CONNECTION_STRING;
  
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
