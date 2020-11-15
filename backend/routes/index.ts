'use strict';

import express from 'express';
import { Pool } from 'pg';
import mountains from './mountains';
import { dbconfig } from '../dbconfig';
import dotenv from 'dotenv';
dotenv.config();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


// declare namespace NodeJS {
//   interface ProcessEnv {
//     readonly NODE_ENV: 'development' | 'production' | 'test';
//   }
// }

const pool = new Pool(dbconfig['development'])

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
