import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";
const contactsPath = path.resolve("db", "contacts.json");

async function upDate(allContacts) {
  return fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
}

export const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const listContacts = JSON.parse(data);
  return listContacts;
};

export async function getContactById(contactId) {
  const allContacts = await listContacts();
  const contact = allContacts.find((item) => item.id === contactId);
  return contact || null;
}

export async function addContact(data) {
  const allContacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  allContacts.push(newContact);
  await upDate(allContacts);
  return newContact;
}

export async function removeContact(Id) {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === Id);
  console.log(index);
  if (index === -1) {
    return null;
  }
  const [result] = allContacts.splice(index, 1);

  await upDate(allContacts);
  return result;
}

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
