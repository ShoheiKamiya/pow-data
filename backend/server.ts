'use strict';

const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
})

// App
const app = express();
app.get('/', async (req: any, res: any) => {
  const response = await pool.query('SELECT * from users;');
  res.json(response.rows)
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
