/*
  STRING METHODS

  STRING CODES
  \'	single quote
  \"	double quote
  \\	backslash
  \n	newline
  \r	carriage return
  \t	tab
  \b	word boundary
  \f	form feed
*/

let a = "ABCDEFGH";
let b = "ABCD-EFGH-IJKL";
let c = "     ABCD     ";

// LENGTH
console.log(a.length); //8

// GET CHARACTER FROM STRING
// String works like an object
console.log(a[0]); // A
console.log(a[2]); // C

// CUTTING STRING
// slice(start, end) -  if negative (start from the end)
// substring(start, end) - does not accept negative values
// substr(start, length) - second parameter identifies the lenght
console.log(a.slice(0,5)); // ABCDE
console.log(a.slice(-6,-1)); // CDEFG
console.log(a.substring(0,5)); // ABCDE
console.log(a.substr(1,5)); // BCDEF
console.log(a.substr(1)); // BCDEFGH

// REPLACING STRING
console.log(a.replace("ABCDEFG","XREYC-")); //XREYC-H (Case Sentitive)
console.log(a.replace(/abcdefg/i,"XREYC-")); //XREYC-H (Case Insensitive) - RegExp
console.log(a.replace(/ABCDEFG/g,"XREYC-")); //XREYC-H (Replace all match) -

// UPPERCASE AND LOWERCASE
console.log(a.toUpperCase()); // ABCDEFGH
console.log(a.toLowerCase()); // abcdefgh

// CONCAT - join string to current string
console.log(a.concat("JOIN1")); // ABCDEFGHJOIN1(Join Single)
console.log(a.concat("JOIN1","JOIN2")); // ABCDEFGHJOIN1JOIN2 (JOIN MULTIPLE)

// TRIM - Remove white spaces
console.log(c); //      ABCD
console.log(c.trim()); // ABCD

// CONVERT STRING TO ARRAY
let x1 = a.split("");
console.log(x1); // ['A','B','C','D','E','F','G','H']


/*
  STRING SEARCH
*/

let d = "ABCD EFGH ABCD IJKL EFGH";

// indexOf()
// - position of the first occurence
// - cannot take regular expression
console.log(d.indexOf("ABCD")); // 0
console.log(d.indexOf("EFGH")); // 5

// lastIndexOf() - position of the last occurence
console.log(d.lastIndexOf("ABCD")); // 10
console.log(d.lastIndexOf("EFGH")); // 20

// search()
// - position of the first occurence
// - cannot take second start
console.log(d.search("ABCD")); // 0

// match(regex)
// - returns all matches as an array
// - use regular expression
console.log(d.match(/ABCD/g)); // ['ABCD','ABCD'] (case sentitive)
console.log(d.match(/abcd/g)); // null (no match)
console.log(d.match(/abcd/gi)); // ['ABCD','ABCD'] (case insensitive)

// includes(searchvalue, start) - check if exist on a string
console.log(d.includes("ABCD")); // true
console.log(d.includes("ABSS")); // false
console.log(d.includes("ABCD", 5)); // true (start searching at position 5)
console.log(d.includes("ABCD", 11)); // false (start searching at position 11)

// startsWith() and endsWith()
console.log(d.startsWith("ABCD")); // true
console.log(d.endsWith("EFGH")); // true


/*
  STRING TEMPLATES
*/

let firstname = "Reyco";
let lastname = "Seguma";

// BACK-TICS
let e = `Hello World!`;
let f = `He's a man of "honor"`;
let g = `Hello
World`;

// STRING INTERPOLATION
let h = `My name is ${firstname} ${lastname}`;
let h = `the value is ${11 * 11}`;

// HTML TEMPLATE
let j = `<div>${firstname} ${lastname}</div>`;

// STRINGS CAN BE OBJECT
let k = new String("Reyco");
