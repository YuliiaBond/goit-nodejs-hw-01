const contactsOperations = require('./contacts');
// console.log('Heloooo')

const id = 11;
const delId = 11;

const newData = {
    "name": "Bond Yuliia",
    "email": "bond_yuv@dictum.co.uk",
    "phone": "(050) 111-2222"
};

(async()=>{
    try {
        // const contacts = await contactsOperations.listContacts();
        // console.log(contacts);

        // const oneContact = await contactsOperations.getContactById(id);
        // if(!oneContact){
        //     throw new Error(`Товар с id=${id} не найден`);
        // }
        // console.log(oneContact);

        // const newContact = await contactsOperations.addContact(newData);
        // console.log(newContact);

        // const updateContact = await contactsOperations.getContactById(id, { ...oneContact, phone: "(050) 333-4444" });
        // if(!updateContact){
        //     throw new Error(`Товар с id=${id} не найден`);
        // }
        // console.log(updateContact);

        // const result = await contactsOperations.removeContact(delId);
        // if(!result){
        //     throw new Error(`Контакт с id=${delId} не найден`);
        // }
        // console.log("Удаление прошло успешно");
    } 
    catch (error) {
        console.log(error.message);
    }
})();

