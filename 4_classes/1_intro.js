/*
  CLASSES
  - javascript classes are templates for javascript objects
  - javascript class is not an object, it is a template for javascript object

  SYNTAX
  - use keyword class to create a class
  - always add method named constructor
  - add any number of method

  class ClassName {
    constructor() { ... }
    method_1() { ... }
    method_2() { ... }
    method_3() { ... }
  }

  THE CONSTRUCTOR METHOD
  - executed automatically when a new object is created
  - used to initialize object properties

  CLASS METHODS
  - created with the same syntax as object methods
*/

// CREATE A CLASS
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
/*
  - the example above creates a class named Car
  - the class has two initial properties: name and year
*/

// USING A CLASS
// class can be used to create object
// the constructor method is called automatically when a new object is created.
let myCar1 = new Car('Ford', 2014);
let myCar2 = new Car('Audi', 2019);
console.log(myCar1); // Car { name: 'Ford', year: 2014 }
console.log(myCar2); // Car { name: 'Audi', year: 2019 }

// CLASS METHODS
class Car1 {
  constructor (name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;

  }
}
let myCar = new Car1('Ford', 2014);
console.log(myCar.age()); // 7

// CLASS METHODS WITH PARAMETERS
class Car2 {
  constructor (name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}
let myCar3 = new Car2('Ford', 2014);
console.log(myCar3.age(2021)); // 7


// STRICT MODE
//'use strict';
class Car4 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    // date = new Date();  // This will not work
    let date4 = new Date(); // This will work
    return date4.getFullYear() - this.year;
  }
}
let myCar4 = new Car4('Honda', 2018);
console.log(myCar4.age());
