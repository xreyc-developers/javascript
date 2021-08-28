/**
 * OBJECT LITERAL
 * 
 * LIST OF OBJECTS
 * Booleans  - can be objects (if defined with the new keyword)
 * Numbers   - can be objects (if defined with the new keyword)
 * Strings   - can be objects (if defined with the new keyword)
 * Dates     - are always objects
 * Maths     - are always objects
 * Regular   - expressions are always objects
 * Arrays    - are always objects
 * Functions - are always objects
 * Objects   - are always objects
 * 
 * PRIMITIVE VALUES ARE NOT AN OBJECT
 * string
 * number
 * boolean
 * null
 * undefined
 */


/**
 ************************************ BOOLEAN ************************************
 */

// PRIMITIVE (NOT AN OBJECT)
console.log('[BOOLEAN AS PRIMITIVE]');
const booleanA = true;
console.log(booleanA); // true

// BOOLEAN AS FUNCTION/CONSTRUCTOR (OBJECT - FUNCTION IS ALWAYS AN OBJECT)
console.log('[BOOLEAN AS FUNCTION/CONSTRUCTOR]');
const booleanB = Boolean;
console.log(booleanB); // function Boolean(){}

// BOOLEAN USING BOOLEAN FUNCTION (NOT AN OBJECT)
console.log('[BOOLEAN USING BOOLEAN FUNCTION OUTPUT]');
const booleanC = Boolean(true);
console.log(booleanC); // true

// BOOLEAN USING BOOLEAN PROTOTYPE (OBJECT)
console.log('[BOOLEAN USING BOOLEAN PROTOTYPE]');
const booleanD = Boolean.prototype;
console.log(booleanD); // Boolean { false }

// BOOLEAN AS OBJECT
console.log('BOOLEAN AS OBJECT');
const booleanE = new Boolean(true);
console.log(booleanE); // Boolean { true }

/**
 ************************************ NUMBERS ************************************
 */

// PRIMITIVE (NOT AN OBJECT)
console.log('-------------------------------');
console.log('[NUMBER AS PRIMITIVE]');
const numberA = 25;
console.log(numberA); // 25

// NUMBER  AS FUNCTION/CONSTRUCTOR (OBJECT - FUNCTION IS ALWAYS AN OBJECT)
console.log('[NUMBER AS FUNCTION/CONSTRUCTOR]');
const numberB = Number;
console.log(numberB); // function Number(){}

// NUMBER USING NUMBER FUNCTION (NOT AN OBJECT)
console.log('[NUMBER USING NUMBER FUNCTION OUTPUT]');
const numberC = Number(25);
console.log(numberC); // 25

// NUMBER USING NUMBER PROTOTYPE (OBJECT)
console.log('[NUMBER USING NUMBER PROTOTYPE]');
const numberD = Number.prototype;
console.log(numberD); // Number { 0 }

// NUMBER AS OBJECT
console.log('NUMBER AS OBJECT');
const numberE = new Number(25);
console.log(numberE); // Boolean { 25 }

/**
 ************************************ STRINGS ************************************
 */

// PRIMITIVE (NOT AN OBJECT)
console.log('-------------------------------');
console.log('[STRING AS PRIMITIVE]');
const stringA = 'Reyco Seguma';
console.log(stringA); // Reyco Seguma

// STRING AS FUNCTION/CONSTRUCTOR (OBJECT - FUNCTION IS ALWAYS AN OBJECT)
console.log('[STRING AS FUNCTION/CONSTRUCTOR]');
const stringB = String;
console.log(stringB); // function String(){}

// STRING USING STRING FUNCTION (NOT AN OBJECT)
console.log('[STRING USING STRING FUNCTION OUTPUT]');
const stringC = String('Reyco Seguma');
console.log(stringC); // Reyco Seguma

// STRING USING STRING PROTOTYPE (OBJECT)
console.log('[STRING USING STRING PROTOTYPE]');
const stringD = String.prototype;
console.log(stringD); // String { "" }

// STRING AS OBJECT
console.log('STRING AS OBJECT');
const stringE = new String('Reyco Seguma');
console.log(stringE); // String { "Reyco Seguma" }


/**
 ************************************ FUNCTION ************************************
 * - can be stored as variable
 * - can passed to another function
 * - function are not just Object they are Function Object
 * - function have a prebuild methods of its own found on prototype.
 */

// WE CAN ASSIGN NEW VALUES AND METHOD TO FUNCTION
console.log('-------------------------------');
console.log('[FUNCTION == OBJECT]');
console.log('[ASSIGN VALUES AND METHODS TO FUNCTION]');
function Person1() {}

Person1.names = ['Reyco','Cobselin','Seguma'];
Person1.getNames = function() {
    return this.names;
}
console.log(Person1);

// PASSING FUNCTION TO ANOTHER FUNCTIONS
// Object can receive another object
console.log('[PASSING FUNCTION TO ANOTHER FUNCTIONS]');
function Person2Receiver(passedFunction) {
    return passedFunction()
}

function Person2() {
    return 'I am passed value';
}

console.log(Person2Receiver(Person2))


/**
 * [Dates, Maths, Regular expressions, Arrays and Functions] are objects with special
 * set of methods on their own what we called the prototype.
 * - they are object themselves but with specific set of methods.
 */
 console.log('-------------------------------');
 console.log('[SPECIAL OBJECTS]');
 console.log(Date);
 console.log(Math);
 console.log(RegExp);
 console.log(Array);
 console.log(Function);