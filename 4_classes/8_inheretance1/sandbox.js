/**
 * OBJECT PROPERTY VS PROTOTYPE
 * when running an object, the code looks on the object PROPERTY first before the prototype PROPERTY
 */

/**
 * CONSTRUCTOR FUNCTION
 */
function Person1() {
    this.firstname = 'Reyco';
    this.lastname = 'Seguma';
}

// INHERIT THE OBJECT CONSTRUCTOR
// it will inherit the object from Person1
// it will not inherit the prototype of Person1
// Person1.prototype is an object
console.log('[INHERIT OBJECT CONSTRUCTOR]');
function Person2() {
    Person1.call(this)
}
Person1.prototype.fullName = function() {
    return this.firstname + ' ' + this.lastname + ' - Person1';
}

// INHERIT PROTOTYPE (BAD PRACTICE)
console.log('[INHERIT PROTOTYPE]');
Person2.prototype = Person1.prototype; // Bad practice (They are reference)
const personA = new Person1();
const personB = new Person2(); 

console.log(personA);
console.log(personB);
console.log(personA.fullName()); //Reyco Seguma - Person1
console.log(personB.fullName()); //Reyco Seguma - Person1

// [REFERENCE]: Person2.prototype = Person1.prototype
console.log('[REFERENCE]: Person2.prototype = Person1.prototype]');
Person2.prototype.fullName = function() {
    return this.firstname + ' ' + this.lastname + ' - Person2';
}
console.log(personA);
console.log(personB);
console.log(personA.fullName()); //Reyco Seguma - Person2
console.log(personB.fullName()); //Reyco Seguma - Person2