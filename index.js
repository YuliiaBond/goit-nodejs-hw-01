console.log('Hello!');

const { getCurrentDate } = require('./dateUtills');

console.log(`get current date: ${getCurrentDate()}`);

console.log(process.argv);
console.log(__dirname);
console.log(__filename);