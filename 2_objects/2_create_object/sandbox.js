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

/******************* CREATING AN OBJECT *******************/
/**
 * OBJECT LITERAL (use this for speed)
 */
console.log('[OBJECT LITERAL]');
const person1 = {
    firstname: 'Reyco',
    lastname: 'Seguma',
    age: 24
}
console.log(person1);

const person2 = {};
person2.firstname = 'Reyco';
person2.lastname = 'Seguma';
person2.age = 24;
console.log(person2);

/**
 * NEW KEYWORD
 */
console.log('[NEW KEYWORD]');
const person3 = new Object();
person3.firstname = 'Reyco';
person3.lastname = 'Seguma';
person3.age = 24;
console.log(person3)

/**
 * CONSTRUCTOR FUNCTION
 */
console.log('[CONSTRUCTOR FUNCTION]');
function Car1(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}
const car1 = new Car1('Ford', 'Mustang', 1995);
console.log(car1);

//OBJECT INSIDE ANOTHER OBJECT
function Car2(brand, model, year, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

function Person4(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
var reyco = new Person4('Rand McKinnon', 33, 'M');
var kezeah = new Person4('Ken Jones', 39, 'M');

var car3 = new Car2('Eagle', 'Talon TSi', 1993, reyco);
var car4 = new Car2('Nissan', '300ZX', 1992, kezeah);

console.log(car3);
console.log(car4);

/**
 * OBJECT.CREATE
 * this creates a new object out of the other object
 * this does not reference the variable but create a new object
 */
 console.log('[OBJECT.CREATE]');
 // person 5 is an object
 const person5 = {
     firstname: 'Reyco',
     lastname: 'Seguma',
     age: 24,
     fullName: function() {
         console.log(`${this.firstname} ${this.lastname}`);
     }
}

const person6 = Object.create(person5);
person6.firstname = 'Kezeah';
person6.lastname = 'Seguma';

console.log(person5);
console.log(person6);


var hhh = "hhh";
console.log(hhh);
