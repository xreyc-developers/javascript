/**
 * PRIMITIVE VALUES
 * value that has no property or methods.
 * it is immutable
 * - string
 * - number
 * - boolean
 * - null
 * - undefined
 */

/**
 * OBJECT
 * object are variable
 * object are addressed by reference not by value
 */

/******************* OBJECT PROPERTIES *******************/
//ACCESSING PROPERTIES
const person1 = {
  firstname: 'Reyco'
}
console.log(person1.firstname);
console.log(person1['firstname']);
const nameOfProperty = 'firstname';
console.log(person1[nameOfProperty]);

/******************* ENUMERATE OBJECT PROPERTIES *******************/
const a1 = { a: 1, b: 2, c: 3 };
const a2 = ['a', 'b', 'c'];

//FOR IN
for(const propertyName in a1) {
    console.log(`${propertyName} : ${a1[propertyName]}`);
}

//OBJECT.KEYS()
console.log(Object.keys(a1)); // Array(3) [ "a", "b", "c" ]
console.log(Object.keys(a2)); // Array(3) [ "0", "1", "2" ]
console.log(Object.keys('Reyco')); // Array(5) [ "0", "1", "2", "3", "4" ]

// Object.getOwnPropertyNames(object1)
console.log('xxxxxxxx');
console.log(Object.getOwnPropertyNames(a1)); // Array(3) [ "a", "b", "c" ]
console.log(Object.getOwnPropertyNames('Reyco')); // Array(6) [ "0", "1", "2", "3", "4", "length" ]

/******************* ADDING PROPERTIES *******************/
const a3 = { a: 1, b: 2, c: 3, d: 4 };
a3.e = 5;
console.log(a3); // Object { a: 1, b: 2, c: 3, d: 4, e: 5 }

/******************* DELETING PROPERTIES *******************/
delete a3.e;
console.log(a3); // Object { a: 1, b: 2, c: 3, d: 4 }
delete a3['d'];
console.log(a3); // Object { a: 1, b: 2, c: 3 }

/******************* NESTED OBJECTS *******************/
const a4 = {
    name: 'Reyco',
    age: 24,
    cars: {
        car1: 'Car1',
        car2: 'Car2',
        car3: 'Car3'
    }
}

/******************* NESTED ARRAY AND OBJECTS *******************/
const a5 = {
    name: 'Reyco',
    age: 24,
    cars: [
        {
            name: 'Ford',
            models: ['Fiesta', 'Focus', 'Mustang']
        },
        {
            name: 'BMW',
            models: ['320', 'X3', 'X5']
        }
    ]
  }
