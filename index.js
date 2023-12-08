//import { option } from "yargs";
import * as contactServise from "./contacts.js";
//import yargs from "yargs";
import { program } from "commander";

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const allContacts = await contactServise.listContacts();
      return console.log(allContacts);

    case "getById":
      const oneContact = await contactServise.getContactById(id);
      return console.log(oneContact);

    case "add":
      const newContact = await contactServise.addContact(data);
      return console.log(newContact);

    case "remove":
      const removeContact = await contactServise.removeContact(id);
      return console.log(removeContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};
//const program = new Command();

program
  .option("-a, --action <type>")
  .option("-l, --list <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse();

const argv = program.opts();

//const { argv } = yargs(process.argv.slice(2));
//console.log(argv);

invokeAction(argv);

// console.log(process.argv);

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction(action);
// }
//invokeAction({ action: "remove", id: "C9sjBfCo4UJCWjzBnOtxl" });
//invokeAction({ action: "list" });
//invokeAction({ action: "getById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({
//   action: "add",
//   name: "Alf",
//   email: "9@mail.com",
//   phone: "987654321",
// });
