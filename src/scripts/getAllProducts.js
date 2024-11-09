import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const getAllContacts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const contacts = JSON.parse(data);
  return contacts;
};

console.log(await getAllContacts());
