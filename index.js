import * as contactServise from "./contacts.js";

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
  }
};
//invokeAction({ action: "remove", id: "rsKkOQUi80UsgVPCcLZZW" });
//invokeAction({ action: "list" });
//invokeAction({ action: "getById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
invokeAction({
  action: "add",
  name: "Alf",
  email: "9@mail.com",
  phone: "987654321",
});
