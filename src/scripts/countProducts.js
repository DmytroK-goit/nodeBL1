import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

async function countProducts() {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const countData = JSON.parse(data);
    return countData.length;

}
console.log(await countProducts());
