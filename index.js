import * as contactServise from "./contacts.js";
import { program } from "commander";

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const allContacts = await contactServise.listContacts();
      return console.table(allContacts);

    case "getById":
      const oneContact = await contactServise.getContactById(id);
      return console.table(oneContact);

    case "add":
      const newContact = await contactServise.addContact(data);
      return console.table(newContact);

    case "remove":
      const removeContact = await contactServise.removeContact(id);
      return console.table(removeContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>")
  .option("-l, --list <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse();

const argv = program.opts();

invokeAction(argv);
