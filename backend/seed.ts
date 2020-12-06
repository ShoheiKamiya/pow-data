import fs from 'fs';
import parser from 'csv-parse/lib/sync';
import { Pool } from 'pg';
import { dbconfig } from './dbconfig';

const file = 'db/mountains.csv';
const data = fs.readFileSync(file);

const mountains = parser(data);
const pool = new Pool(dbconfig['development'])

type mountain = {
  id: string,
  name: string,
  short_name: string,
  prefecture_id: string,
  description: string,
  url: string
}

const csv2json = (array: any) => {
  const keys = array[0]
  return array.map((row: any, index: number) => {
    if (index === 0) {
      return
    };

    return keys.map((key: any, index: number) => {
      return {[key]: row[index]}
    });
  }).slice(1);
}

console.log(csv2json(mountains));
