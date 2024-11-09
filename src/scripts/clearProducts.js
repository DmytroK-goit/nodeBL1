import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

async function clearProducts() {
  await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf-8');
}

clearProducts();
