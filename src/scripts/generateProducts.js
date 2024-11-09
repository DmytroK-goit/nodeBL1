import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';

async function generateProducts(number) {
    const data = await fs.readFile(PATH_DB);  
    const parsData = JSON.parse(data);
    for (let i = 0; i < number; i++) {
      parsData.push(createFakeProduct())
    }
    await fs.writeFile(PATH_DB, JSON.stringify(parsData, null, 2), 'utf-8');
}
generateProducts(3)

 

 