/*
  INHERITANCE
  - 'extend' keyword used to create a class inheritance
  - useful for core reusability
  - reuse properties and method of an existing class when you create a new class
*/

// SAMPLE 1
// super() method refers to the parent class
// by calling super() method in the constructor method, we call the parents constructor
// method and gets access to the parent's properties and methods.

// PARENT
class Car1 {
  constructor (brand) {
    this.carname = brand;
  }
  present() {
    return this.carname;
  }
}
// CHILD
class Model extends Car1 {
  constructor (brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar1 = new Model("Ford", "Mustang");
console.log(myCar1); // Model { carname: 'Ford', model: 'Mustang' }
console.log(myCar1.present()); // Ford (present() from the parent class)
console.log(myCar1.show()); // Ford, it is a Mustang (show() is from the child class)


// GETTERS AND SETTERS
// it can be smart to use getters and setters for your properties
// can be used if you want to return something or set something
// keyworks 'set' and 'get'
class Car2 {
  constructor (brand) {
    this.carname = brand;
  }
  get cname() {
    return this.carname;
  }
  set cname(x) {
    this.carname = x;
  }
  set setcname(x) {
    this.carname = x;
  }
}

let myCar2 = new Car2("Ford");
console.log(myCar2.cname); // Ford
myCar2.cname = 'Honda';
console.log(myCar2.cname); // Honda
myCar2.setcname = 'Toyota';
console.log(myCar2.cname); // Toyota

// NORMAL OBJECT SETTERS AND GETTERS
const dataA = {
  firstname: 'Reyco',
  lastname: 'Seguma',
  get fullname() {
    return this.firstname + ' ' + this.lastname;
  },
  set fullname(name) {
    this.firstname = name.firstname;
    this.lastname = name.lastname;
  }
}
console.log(dataA.fullname); // Reyco Seguma
dataA.fullname = {
  firstname: 'Kezeah',
  lastname: 'Dongon'
}
console.log(dataA.fullname); // Kezeah Dongon

// HOISTING
// You cannot use the class yet.
// myCar = new Car("Ford")
// This would raise an error.
class Car3 {
  constructor(brand) {
    this.carname = brand;
  }
}
//Now you can use the class:
let myCar = new Car3("Ford")
