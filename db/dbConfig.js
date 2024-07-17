const pgp = require('pg-promise')();
require('dotenv').config();

const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
};

const db = pgp(cn);

module.exports = db;
