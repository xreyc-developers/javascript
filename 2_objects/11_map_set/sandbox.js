/*
  MAP()
  - holds key-value pairs where the keys can be any datatype.
  - remembers the original insertion order of the keys.
  - has a property that represents the size of the map.

  ESSENTIAL MAP METHODS
  new Map()	   Creates a new Map object
  set()	       Sets a value for a key in a Map object
  get() 	     Gets a value for a key in a Map object
  entries()	   Returns an array of the key/value pairs in a Map object
  keys()	     Returns an array of the keys in a Map object
  values()	   Returns an array of the values in a Map object

  OTHER MAP METHODS
  clear()	    Removes all elements in a Map
  delete()	  Removes an element specified by a key.
  has()	      Returns true if a key exists.
  forEach()	  Invokes a callback for each key/value pair.

  MAP PROPERTIES
  size	       Gets a value for a key in a Map object
 */

/*********************************
  MAP
*********************************/

// CREATE A MAP
const map1 = new Map();

// SET A MAP AND THEIR VALUES
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

// GETING A VALUE BY A MAP
console.log(map1.get('a')); // 1

// OVERRIDE A MAP
map1.set('a', 97);
console.log(map1.get('a')); // 97

// GET MAP SIZE
console.log(map1.size); // 3

// DELETE FROM A MAP
map1.delete('b');
console.log(map1.size); // 2
console.log(map1.get('b')); // undefined

// CORRECT USAGE SAMPLE
const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1

/*********************************
  SET
  - is a collection of unique values
  - each value may occur only once in a Set
  - can hold any values of any data type

  SYNTAX
  new Set()
  new Set(iterable)

  new Set()	  Creates a new Set object
  add()	      Adds a new element to the Set
  clear()	    Removes all elements from a Set
  delete()	  Removes an element specified by its value.
  entries()	  Returns an array of the values in a Set object
  has()	      Returns true if a value exists
  forEach()	  Invokes a callback for each element
  keys()	    Returns an array of the values in a Set object
  values()	  Same as keys()
  size	      Returns the element count
*********************************/

const set1 = new Set();
set1.add('a');
set1.add('b');
set1.add('c');
set1.add('c');
console.log(set1); // Set(3) [ "a", "b", "c" ]

const set2 = new Set([1,2,3,4,5]);
console.log(set2.has(1)); // true
console.log(set2.has(7)); // false