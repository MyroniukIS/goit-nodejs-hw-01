// const argv = require("yargs").argv;
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const contactsOperations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.log(contacts);
      break;

    case "get":
      const contact = await contactsOperations.getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await contactsOperations.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);

invokeAction(argv);

// invokeAction(argv);
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "3" });
// invokeAction({
//   action: "add",
//   name: "Mary",
//   email: "mary@mail.com",
//   phone: "32 - 32 - 333",
// });
// invokeAction({ action: "remove", id: "8" });
