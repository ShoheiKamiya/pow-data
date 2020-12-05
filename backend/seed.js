import fs from 'fs';
import csv from 'csv-parse';


const file = 'db/mountains.csv';
let data = fs.readFileSync(file);

let res = csv(data);

console.log(res);
