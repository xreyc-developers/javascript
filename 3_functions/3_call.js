/*
  CALL
  - you can write a method that can be used on different objects.
  - all functions are objects methods
  - used to invoke (call) a method with an owner object as an argument (parameter).

  SYNTAX
  call()
  call(thisArg)
  call(thisArg, arg1)
  call(thisArg, arg1, arg2)
  call(thisArg, arg1, ... , argN)

  SYNTAX
  methodName.call(context, arguments)
*/

// SAMPLE 1
// this example calls the fullName method of person1, using it on person1a
// person1a is using fullname function of person1
const person1 = {
  fullname: function() {
    return this.firstname + " " + this.lastname;
  }
}
const person1a = {
  firstname: 'Reyco',
  lastname: 'Seguma'
}
console.log(person1.fullname.call(person1a)); // Reyco Seguma

// SAMPLE 2
const person2 = {
  fullname: function(city, country) {
    return this.firstname + " " + this.lastname + " lives in " + city + ", " + country;
  }
}
const person2a = {
  firstname: 'Kezeah',
  lastname: 'Dongon'
}
console.log(person2.fullname.call(person2a, "Lake Sebu", "Philippines"));

// SAMPLE 3
const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
]

for (let i = 0; i < animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}
/* RESULT
#0 Lion: King
#1 Whale: Fail
*/

// SAMPLE 4
const sData = 'Reyco';
function function3() {
  console.log(sData);
}
function3.call(); // Reyco; On strict mode undefined

// SAMPLE 5
/*
function function4() {
  this.firstname = 'Reyco';
  this.lastname = 'Seguma';
}
function4.call(); // Invoke function4 and create a global variable with this

function function5() {
  console.log(this.firstname + ' ' + this.lastname); // Reyco Seguma
}
function5()
*/

// SAMPLE 6
function function6() {
  this.firstname = 'Reyco';
  this.lastname = 'Seguma';
}

function function7() {
  function6.call(this);
}
const rdata = new function7();
console.log(rdata); // function7 { firstname: 'Reyco', lastname: 'Seguma' }
// To analyze this look at sample 7

// SAMPLE 7
const rdata1 = {
  firstname: 'Reyco',
  lastname: 'Seguma'
}
function function8() {
  console.log(this.firstname + '-' + this.lastname);
}
function8.call(rdata1); // Reyco-Seguma
