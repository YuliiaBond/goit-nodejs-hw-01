const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');
// console.log(contactsPath);

const updateContacts = async (contacts) => {
    const newContact = await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
};

async function listContacts() {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
};

async function getContactById(contactId) {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item=>item.id === contactId);
    if(idx === -1) {
        return null;
    }
    return contacts[idx];
};

    async function removeContact(contactId) {
        const contacts = await listContacts();
        const idx = contacts.findIndex(item => item.id === contactId);
        if (idx === -1) {
            return null;
        }
        contacts.splice(idx, 1);
        await updateContacts(contacts);
        return true;
};

async function addContact(data) {
    const contacts = await listContacts();
    const newId = contacts.length + 1;
    const newContact = { id: newId, ...data };
    console.log(newContact);
    contacts.push(newContact);
    await updateContacts(contacts);
    return contacts;
};

const contactsOperations = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}
module.exports = contactsOperations;

    
