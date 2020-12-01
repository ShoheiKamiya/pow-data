import express from 'express';
import { Pool } from 'pg';
import { dbconfig } from '../dbconfig';


const router = express.Router();
const pool = new Pool(dbconfig['development'])
router.get('/', async (req: any, res: any) => {
  const response = await pool.query('SELECT * from mountains;');
  res.json(response.rows)
})

router.get('/:mountainId', async (req: any, res: any) => {
  const mountainId = req.params.mountainId
  const response = await pool.query(`SELECT * from mountains where id='${mountainId}'`)
  res.json(response.rows)
})

export default router;
