import fs from 'fs';
import parser from 'csv-parse/lib/sync';
import { Pool } from 'pg';
import { dbconfig } from './dbconfig';

const file = 'db/mountains.csv';
const data = fs.readFileSync(file);

const mountains = parser(data);

const insertText = (header: string[], rows: string[][]) => {
  const insert = `INSERT INTO mountains (${header.join()}) VALUES`
  const values = rows.map(row => {
    return `(${row.map(value => `'${value}'`).join()})`
  })

  return `
  ${insert}
  ${values.join()}
  `
}

console.log(dbconfig['development'])

const pool = new Pool(dbconfig['development'])
pool
  .query(insertText(mountains[0], mountains.slice(1)))
  .then(res => console.log(res))
  .catch(e => console.error(e))
