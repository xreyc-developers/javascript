/**
 * OBJECT PROPERTY VS PROTOTYPE
 * when running an object, the code looks on the object PROPERTY first before the prototype PROPERTY
 */

/**
 * CONSTRUCTOR FUNCTION
 */
console.log('[CONSTRUCTOR FUNCTION]');
function Person1() {
    this.firstname = 'Reyco';
    this.lastname = 'Seguma';
    this.fullName = function() {
        return this.firstname + ' ' + this.lastname;
    }
}

// PersonA is a separate location in memory to personB (not referenced)
const personA = new Person1()
const personB = new Person1()
console.log(personA);
console.log(personB);

/**
 * USING PROTOTYPE
 * - prototype is present on the __proto__ but you can use it directly without the __proto__
 * - prototype can be inherited and overide
 * - prototype is like a global repository of functionality or values
 * - prototype acts like a library where you can use preprogramed functionality
 * - prototype used for common functionality
 * - used on many libraries today
 * __proto__ (PROTOTYPE CHAIN) = Object.Prototype
 */
console.log('[PROTOTYPE]');
function Person2() {
    this.firstname = 'Reyco';
    this.lastname = 'Seguma';
}

// CREATING A PROTOTYPE
// this will appear on __proto__
console.log('[CREATING A PROTOTYPE]');
Person2.prototype.fullName = function() {
    return this.firstname + ' ' + this.lastname;
}

const personC = new Person2();
console.log(personC);
// Object: { firstname: "Reyco", lastname: "Seguma" } Proto: { fullName: function fullName() }
console.log(personC.fullName());
// Reyco Seguma


// OVERRIDING A PROTOTYPE
// this will appear on the actual object
// object method/property > prototype method/property
console.log('[OVERRIDING A PROTOTYPE]');
const personD = new Person2();
personD.fullName = function() {
    return this.firstname + ' ' + this.lastname + ' - This is prototype overrride';
}
console.log(personD);
// Object: { firstname: "Reyco", lastname: "Seguma", fullName: fullName() }
console.log(personD.fullName());
// Reyco Seguma - This is prototype overrride

/**
 * OBJECT.HASOWNPROTERTY
 * PersonC:
 *      Object: { firstname: "Reyco", lastname: "Seguma" }
 *      Proto: { fullName: function fullName() }
 * PersonD:
 *      Object: { firstname: "Reyco", lastname: "Seguma", fullName: fullName() }
 *      Proto: { fullName: function fullName() }
 */
console.log('[HAS OWN PROPERTY]')
// Original Object
console.log(personC.hasOwnProperty('firstname')); // True
console.log(personC.hasOwnProperty('fullName')); // False
console.log(personC.__proto__.hasOwnProperty('fullName')); // True
console.log('---');
// Overrided Object
console.log(personD.hasOwnProperty('firstname')); // True
console.log(personD.hasOwnProperty('fullName')); // True
console.log(personD.__proto__.hasOwnProperty('fullName')); // True