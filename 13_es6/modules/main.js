/*
SAMPLE 1 : Exporting
import User from './user.js';
const user = new User('Reyco', 24);
console.log(user); // { "name": "Reyco", "age": 24 }
*/

/*
SAMPLE 2 : We can name default export whatever we want
import U from './user.js';
const user = new U('Kezeah', 23);
console.log(user); // { "name": "Kezeah","age": 23 }
*/

/*
SAMPLE 3: IMPORT NON DEFAULT
- make sure that it has the same name
import { printName, printAge } from './user.js';
*/

/*
SAMPLE 4: USING ALIAS
import { printName as printUserName, printAge}
*/

// SAMPLE 5 : COMBINATION OF EXPORT DEFAULT AND EXPORT
import U, { printName as printUserName, printAge } from './user.js'
const user = new U('Kezeah',23);
printUserName(user); // Kezeah
printAge(user); // 23
