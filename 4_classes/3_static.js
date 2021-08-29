/*
  STATIC
  - static are defined only on the class itself
  - you cannot call static method on an object, only on the object class
  - static properties and methods can be inherited by the child class
  - static properties and methods can be usefull on constructor method
  you may need to process data on initialization.
*/

///////////// SAMPLE 1 (GETTING DATA) /////////////
class Car1 {
  constructor (name) {
    this.name = name;
  }
  static hello() {
    return 'Hello';
  }
}
let myCar1 = new Car1("Ford");
//console.log(myCar1.hello()); // ERROR
console.log(Car1.hello()); // Hello

///////////// SAMPLE 2 (INPUTING DATA) /////////////
class Car2 {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}
let myCar2 = new Car2("Ford");
console.log(myCar2); //Car2 { name: 'Ford' }
//myCar2.hello("Hello"); // ERROR
console.log(Car2.hello(myCar2));

///////////// SAMPLE 3 (NON STATIC METHODS) /////////////
class Car3 {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return "Hello";
  }
}
// console.log(Car3.hello()); (THIS WILL RETURN AN ERROR)
const myCar3 = new Car3("Ford");
console.log(myCar3.hello()); // Hello

///////////// SAMPLE 4 (SET AND GET) /////////////
// in this example the set ang get will become useless since the constructor
// is not initialize
class Car4 {
  constructor(name) {
    this.name = name;
  }
  static get getHello() {
    return "STATIC GET";
  }
  static set setHello(name) {
    this.name = name;
  }
}
console.log(Car4.getHello); // STATIC GET
//Car4.setHello = 'Reyco Seguma'; // ERROR

///////////// SAMPLE 5 (STATIC AND DYNAMIC) /////////////
class Person1 {
  constructor (name) {
    this.dname = name;
  }
  updateFirstname(name) {
    this.dname = name;
  }
  static sname = 'Reyco Static';
  static updateName(name) {
    this.sname = name;
  }
}
// DYNAMIC
let person1a = new Person1('Reyco Dynamic');
console.log(person1a); // Reyco Static { name: 'Reyco Dynamic' }
person1a.updateFirstname("Kezeah Dynamic");
console.log(person1a); //Reyco Static { name: 'Kezeah Dynamic' }
console.log(person1a.sname); // Undefined
// STATIC
console.log(Person1.sname); // Reyco Static
Person1.updateName("Kezeah Static");
console.log(Person1.sname); // Kezeah Static

///////////// STATIC ON CONSTRUCTOR /////////////
class Person2 {
  constructor () {
    this.dname = Person2.sname;
    this.dnameUpdate = Person2.dnameUpdate;
  }
  static sname = 'Reyco Seguma';
  static snameUpdate() {
    this.sname = 'Kezeah Dongon'
  }
  static dnameUpdate() {
    this.dname = 'Kezeah Dongon'
  }
}
let person2a = new Person2();
console.log(person2a); // Person2 { dname: 'Reyco Seguma', dnameUpdate: [Function: dnameUpdate] }
person2a.dnameUpdate(); // Person2 { dname: 'Kezeah Dongon', dnameUpdate: [Function: dnameUpdate] }
console.log(person2a);

// STATIC PROPERTY ANG METHOD INHERITANCE
class Person3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.reyco = Person3.getName();
  }
  static course = "Computer Engineer";
  static getName() {
    return 'Kezeah';
  }
}
class Person4 extends Person3 {}
console.log(Person4.getName()); // Kezeah
console.log(Person4.course); // Computer Engineer
const person4a = new Person4("Reyco",24);
console.log(person4a); // Person4 { name: 'Reyco', age: 24, reyco: 'Kezeah' }
