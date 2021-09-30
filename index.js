const contactsOperations = require('./contacts');

// // ---===== Проверка работоспособности функций для работы с контактами =====---
// const id = 11;
// const delId = 11;

// const newData = {
//     "name": "Bond Yuliia",
//     "email": "bond_yuv@dictum.co.uk",
//     "phone": "(050) 111-2222"
// };

// (async()=>{
//     try {
//         // const contacts = await contactsOperations.listContacts();
//         // console.log(contacts);

//         // const oneContact = await contactsOperations.getContactById(id);
//         // if(!oneContact){
//         //     throw new Error(`Товар с id=${id} не найден`);
//         // }
//         // console.log(oneContact);

//         // const newContact = await contactsOperations.addContact(newData);
//         // console.log(newContact);

//         // const updateContact = await contactsOperations.getContactById(id, { ...oneContact, phone: "(050) 333-4444" });
//         // if(!updateContact){
//         //     throw new Error(`Товар с id=${id} не найден`);
//         // }
//         // console.log(updateContact);

//         // const result = await contactsOperations.removeContact(delId);
//         // if(!result){
//         //     throw new Error(`Контакт с id=${delId} не найден`);
//         // }
//         // console.log("Удаление прошло успешно");
//     } 
//     catch (error) {
//         console.log(error.message);
//     }
// })();

const argv = require('yargs').argv;

// // ---===== YARGS =====---
// async function invokeAction({ action, id, name, email, phone }) {
//     switch (action) {
//         case 'list':
//             const contacts = await contactsOperations.listContacts();
//             console.log(contacts);
//         break;

//         case 'get':
//             const oneContact = await contactsOperations.getContactById(id);
//             if (!oneContact){
//                 throw new Error(`Товар с id=${id} не найден`);
//             }
//             console.log(oneContact);
//         break;

//         case 'add':
//             await contactsOperations.addContact({name, email, phone})
//             console.log("Контакт добавлен");
//         break;

//         case 'remove':
//             const result = await contactsOperations.removeContact(id);
//             if(!result){
//                 throw new Error(`Контакт с id=${id} не найден`);
//             }
//             console.log("Удаление прошло успешно");
//         break;

//         default:
//         console.warn('\x1B[31m неизвестный тип действия!');
//     }
// }

// invokeAction(argv);

const { program } = require('commander');
// ---===== COMMANDER =====---

program
    .option('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
const options = program.opts();
// console.log(options);

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case 'list':
            const contacts = await contactsOperations.listContacts();
            console.table(contacts);
        break;

        case 'get':
            const oneContact = await contactsOperations.getContactById(id);
            if (!oneContact){
                throw new Error(`Товар с id=${id} не найден`);
            }
            console.log(oneContact);
        break;

        case 'add':
            await contactsOperations.addContact({ name, email, phone })
            console.log("Контакт добавлен");
        break;

        case 'remove':
            const result = await contactsOperations.removeContact(id);
            if(!result){
                throw new Error(`Контакт с id=${id} не найден`);
            }
            console.log("Удаление прошло успешно");
        break;

        default:
        console.warn('\x1B[31m неизвестный тип действия!');
    }
}

invokeAction(argv);