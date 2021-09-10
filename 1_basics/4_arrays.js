/*
  ARRAYS
  - a special variable which can hold more than one value
  - arrays are special object
  - arrays use number to access its elements
  - can have different type inside the same array

  DIFFERENCE BETWEEN ARRAY AND OBJECT
  - arrays are numbered indexes
  - object are named indexes
*/

// CREATING AN ARRAY
const a = ['Reyco','Cobselin','Seguma'];
const b = new Array('Reyco','Cobselin','Seguma'); // No need to use this (avoid)

// ACCESSING ARRAY
console.log(a[0]); // Reyco

// UPDATING ARRAY
// a[0] = 'Kezeah';
console.log(a[0]); // Kezeah

// ARRAYS ARE OBJECT
console.log(typeof a); // object

// ARRAY PROPERTIES AND METHODS
//console.log(a.length); // 3
//console.log(a.sort()); // [ 'Cobselin', 'Reyco', 'Seguma' ]

// FIRST AND LAST ELEMENT
console.log(a[0]); // Reyco (first element)
console.log(a[a.length - 1]); // Seguma (last element)

// CHECK IF TYPE IS ARRAY
console.log(Array.isArray(a));


/********************************************
  ARRAY METHODS
********************************************/

// toString() - convert array to string
console.log(a.toString()); // Reyco,Cobselin,Seguma

// join() - join array by text then convert to string
console.log(a.join()); // Reyco,Cobselin,Seguma
console.log(a.join('')); // ReycoCobselinSegum
console.log(a.join('+')); // Reyco+Cobselin+Seguma

// POPPING AND PUSHING (inserting and removing element)
const c = ['Influder','Pentreyc','Xreyc'];
// POPPING -  Removes the last element
let popc = c.pop()
console.log(popc); // Xreyc
console.log(c); // ['Influder','Pentreyc']
// PUSHING - Inserting new element at the end
let pushc = c.push('Treeword');
console.log(pushc); // 3 (returns the new array length)
console.log(c); // ['Influder,''Pentreyc','Treeword']

// SHIFTING AND UNSHIFTING
// SHIFTING - removes the first element
let shiftc = c.shift();
console.log(shiftc); // Influder
console.log(c); // ['Pentreyc','Treeword']
// UNSHIFT - add to the beginning of the array
let unshiftc = c.unshift('Developers');
console.log(unshiftc); // 3 (returns the length of the array)
console.log(c); // ['Developers','Pentreyc','Treeword']

// DELETING ELEMENTS FROM THE ARRAY
// this may cause some issue on the code
// for best practice use shift or pop
const d = ['Apple','Ball','Cat','Dog','Egg'];
delete d[d.length - 1]; // changes the last element to undefines
console.log(d); // [ 'Apple', 'Ball', 'Cat', 'Dog', <1 empty item> ]

// splice() - can be use to add or remove items
// ADDING ITEMS
const e = ['Apple','Ball','Cat','Dog','Egg'];
let addsplice = e.splice(2,0,'Flower','Goat');
// 2 - position where the new elements will be added
// 0 -  number of elements to be remove
// 'Flower','Goat' - elements to be added
console.log(addsplice); // [] (returns an array of deleted items)
console.log(e); // ['Apple','Ball','Flower','Goat','Cat','Dog','Egg']
// REMOVING ITEMS
let removespliceA = e.splice(0,1);
// 0 - position where the elements should be added
// 1 - number of elements to be added
console.log(removespliceA); // ['Apple'] (returns the list of deleted items)
console.log(e); // ['Ball','Flower','Goat','Cat','Dog','Egg']
let removespliceB = e.splice(1,1);
// 1 - position where the elements should be added
// 1 - number of elements to be added
console.log(removespliceB); // ['Flower']
console.log(e); // ['Ball','Goat','Cat','Dog','Egg']
// ADD WITH REMOVE
const f = ['Apple','Ball','Cat','Dog','Egg'];
let addspliceF = f.splice(2,2,'Flower','Goat');
console.log(addspliceF); // ['Cat','Dog'] (removed elements)
console.log(f); // ['Apple','Ball','Flower','Goat','Egg']

// MERGING (CONCATENATION) ARRAYS
// - does not change the existing array
// - always return the new arraw
const g = ['Apple','Ball','Cat'];
const h = ['Dog','Elephant','Flower'];
const i = ['Goat','Horse','Ice'];
const concatgh = g.concat(h,i);
console.log(concatgh); // ['Apple','Ball','Cat','Dog','Elephant','Flower','Goat','Horse','Ice']

// SLICING ARRAY
const j = ['Apple','Ball','Cat','Dog','Elephant','Flower','Goat','Horse','Ice'];
const jsliceA = j.slice(3);
const jsliceB = j.slice(3,5);
console.log(jsliceA); // ['Dog','Elephant','Flower','Goat','Horse','Ice']
console.log(jsliceB); // ['Dog','Elephant']


/********************************************
  ARRAY SORT
********************************************/

// SORT AN ARRAY
const a1 = ['Apple','Ball','Cat','Dog','Elephant','Flower','Goat','Horse','Ice'];
console.log(a1.sort()); // ['Apple','Ball','Cat','Dog','Elephant','Flower','Goat','Horse','Ice']

// REVERSE
console.log(a1.reverse()); // ['Ice','Horse','Goat','Flower','Elephant','Dog','Cat','Ball','Apple']

/*
 NUMERIC SORT
 - we have to use compare function of sort()
 - compare function accepts only 2 parameters

 The compare() function accepts two arguments a and b. The sort() method will
 sort elements based on the return value of the compare() function with the following rules:
  - If compare(a,b) returns value less than zero,a will come first.
  - If compare(a,b) returns value greater than zero, b will come first.
  - If compare(a,b) returns value zero, positions unchanged.
*/
const b1 = [40, 100, 1, 5, 25, 10];
b1.sort((a,b) => { console.log(a, b); });
/*
+-----+----+
| a   | b  | Iterations
+-----+----+
| 100 | 40 | 1st
| 5   | 1  | 2nd
| 25  | 5  | 3rd
| 10  | 25 | 4th
+-----+----+
*/
// ASCENDING SORT
console.log('[ASCENDING SORT]');
console.log(b1.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
}));
// ASCENDING SHORTCUT
console.log(b1.sort((a,b) => { return a - b })); // [ 1, 5, 10, 25, 40, 100 ]
// DESCENDING SORT
console.log('[DESCENDING SORT]');
console.log(b1.sort((a,b) => {
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
}));
console.log(b1.sort((a,b) => { return b - a })); // [ 100, 40, 25, 10, 5, 1 ]

// RANDOM SORT
const c1 = ['Apple','Ball','Cat','Dog','Elephant','Flower','Goat','Horse','Ice'];
console.log(c1.sort(() => { return 0.5 - Math.random() }));
// ['Elephant','Apple','Ball','Horse','Cat','Flower','Dog','Goat','Ice']

// FISHER YATES METHOD (RANDOM SORT)
for (let i = c1.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = c1[i]
  c1[i] = c1[j]
  c1[j] = k
}
console.log(c1);
//['Ice','Flower','Goat','Cat','Horse','Ball','Elephant','Apple','Dog']

// SORT ARRAY OBJECT
// SORT BY STRING
// - using return a - b is not possible
// string(a - b) = NaN
// string(a < b) = true or false
const d1 = [
  { name: 'Reyco', age: 24 },
  { name: 'Kezeah', age: 23 },
  { name: 'Reniel', age: 22 },
  { name: 'Precious', age: 20 }
]
console.log(d1.sort((a,b) => {
  if ( a.name < b.name ) return -1;
  if ( a.name > b.name ) return 1;
  return 0;
}));
/* Result
[
  { name: 'Kezeah', age: 23 },
  { name: 'Precious', age: 20 },
  { name: 'Reniel', age: 22 },
  { name: 'Reyco', age: 24 }

]*/
// SORT BY NUMBER
console.log(d1.sort((a,b) => { return a.age - b.age }));
/* Result
[
  { name: 'Precious', age: 20 },
  { name: 'Reniel', age: 22 },
  { name: 'Kezeah', age: 23 },
  { name: 'Reyco', age: 24 }
]*/


/********************************************
  ARRAY ITERATIONS
********************************************/

/*
  FOREACH VS MAP
  - foreach does not return a value but used only for performing things
  it cannot return a value.
  - map can perform foreach and can be used to transform the data then
  return as output

  FILTER VS FIND
  - filter returns all that match the condition.
  - find returns only the first element that match the condition.
*/

// FOREACH
// Array.forEach(function(value, index, array){})
const a2 = ['Apple','Ball','Cat','Dog','Elephant','Flower','Goat','Horse','Ice'];
a2.forEach((value,index,array) => {
  console.log(value);
})

// OBJECT FOREACH
// use if you want to loop a functionality. (use for loop instead)
const b2 = [
  { name: 'Kezeah', age: 23 },
  { name: 'Precious', age: 20 },
  { name: 'Reniel', age: 22 },
  { name: 'Reyco', age: 24 }
]
b2.forEach((item,index,array) => {
  console.log(item.name + ' - ' + item.age);
})

// MAP
// - creates a new array by performing a function on each array element.
// - does not execute the function for array elements without values.
// - does not change the original array.
// - use if you want to transform data as a new variable
a2.map((value,index,array) => {
    console.log(value);
});
const b2map = b2.map((item) => item.name.toUpperCase());
console.log(b2map); //[ 'KEZEAH', 'PRECIOUS', 'RENIEL', 'REYCO' ]

// FILTER
// - creates a new array with array elements that past the test
const c2 = [
  { name: 'Kezeah', age: 23 },
  { name: 'Precious', age: 20 },
  { name: 'Reniel', age: 22 },
  { name: 'Reyco', age: 24 },
  { name: 'Jenezel', age: 9 },
  { name: 'John Rey', age: 20 }
]
const filteredc2 = c2.filter((item,index,array) => {
  return item.age >= 22; // This is the search condition (true or false)
})
console.log(filteredc2);
/* Result
[
  { name: 'Kezeah', age: 23 },
  { name: 'Reniel', age: 22 },
  { name: 'Reyco', age: 24 }
]
*/

// FIND
// - returns the first element matched the condition
const c2find = c2.find((item,index,array) => {
  return item.name == 'Reyco';
});
console.log(c2find); // { name: 'Reyco', age: 24 }

// FINDINDEX
console.log(c2.findIndex((item,index,array) => {
  return item.name == 'Reyco';
})); // 3

// REDUCE(LEFT TO RIGHT) OR REDUCERIGHT(RIGHT TO LEFT)
// myFunction(total, value, index, array)
// - derive a single value from multiple elements
// - method works from left-to-right in the array
// Reduce with number
const d2 = [1,2,3,4,5,6,7,8,9];
const sumd2 = d2.reduce((total,value,index,array) => {
  return total + value;
})
console.log(sumd2); // 45
// Reduce with string
const e2 = ['A','B','C','D',1,2,3];
const reducede2 = d2.reduce((overall,value,index,array) => {
  return overall + value + '-';
})
console.log(reducede2); // 3-3-4-5-6-7-8-9-

// INDEXOF (first), LASTINDEXOF(last)
// array.indexOf(item, start)
// - returns the position of the first element that matched condition
// - data type must matched
const f2 = [1,2,3,4,5,'1','2','3','4','5']
console.log(f2.indexOf('1')); //5
console.log(f2.indexOf(1)); //0

//INCLUDES
console.log(f2.includes('1')); // true
console.log(f2.includes('z')); // false

/*
  ARRAY CONST
  - it does not define constant array.
  - it defines constant reference to an array.
  - we can still change the elements of a costant array
*/

/*
# Cannot be reassigned
const a3 = ['Apple','Ball','Cat'];
a3 = ['Dog','Elephant','Fish'];

# Will not work
const b3;
b3 = ["Saab", "Volvo", "BMW"];
*/

// ELEMENTS CAN BE REASSIGNED
const a3 = ['Apple','Ball','Cat'];
a3[0] = 'Airplane';
console.log(a3); // ['Airplane','Ball','Cat'];
