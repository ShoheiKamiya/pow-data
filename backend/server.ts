'use strict';

const express = require('express');
const { Pool } = require('pg');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  password: 'password',
  database: 'pow-data',
  port: 5432,
})

// App
const app = express();
app.get('/', async (req: any, res: any) => {
  const response = await pool.query('SELECT * from users;');
  res.json(response.rows)
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
