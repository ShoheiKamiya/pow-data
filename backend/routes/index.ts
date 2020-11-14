'use strict';

var express = require('express');
const { Pool } = require('pg');
require('dotenv').config();
const mountains = require('./mountains');
const dbconfig = require('../dbconfig')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
  }
}

const pool = new Pool(dbconfig[process.env['NODE_ENV']])

// App
const app = express();
app.get('/', async (req: any, res: any) => {
  const response = await pool.query('SELECT * from users;');
  res.json(response.rows)
});
app.get('/compare', (req: any, res: any) => {
  res.json(req.query)
})
app.use('/mountains', mountains);

app.listen(PORT, HOST);
console.log(`
====================================
  Running on http://${HOST}:${PORT}
====================================
`);
