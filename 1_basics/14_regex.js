/*
  REGEX
  - is a sequence of characters that forms a search pattern.
  - when you search for data in a text, you can use this search pattern to describe what you are searching for.
  - can be a single character, or a more complicated pattern.
  - can be used to perform all types of text search and text replace operations.

  SYNTAX
  /pattern/modifier
  pattern - to be search
  modifier - modifies the seach pattern

  MODIFIERS (search mode)
  i - case insensitive (single)
  g - global matching (find all) - array
  m - perform multiline matching

  PATTERNS
  # BRACKETS (find a range of character)
  [abc] - any of the charaters between the bracket
  [0-9] - any of the number within the bracket
  [a|b] - alternative separated by |
  (there's more)

  METACHARACTERS
  \d - Find a digit
  \s - Find a whitespace character
  \b - Find a match at the beginning or at end like \bWORD or WORD\b
  \uxxxx - Find a unicode character specified by the hexadecimal number xxxx
  (there's more)

  UNICODE LIST
  https://en.wikipedia.org/wiki/List_of_Unicode_characters

  QUANTIFIER - specify how many instances of a character, group, or character
  class must be present in the input for a match to be found
  n+ - matches string that contains at least one n
  n* - matches string that contains zero or more occurrences of n
  n? - matches string that contains zero or one occurrences of n
  (there are more)

  REGEX METHODS
  test() - search if a pattern exist on a given text.
  exec()

  COMPLETE REFERENCE
  https://www.w3schools.com/jsref/jsref_obj_regexp.asp
*/


// STRING METHODS
// regex is frequently used on string method search() ang replace() methods.

// SEARCH()
let a1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let b1 = "123456789";

// TEXT SEARCH
console.log(a1.search("E")); //4
// REGEX SEARCH
console.log(a1.search(/e/i)); // 4
// REPLACE
console.log(a1.replace(/E/i, "(REPLACED)")); //ABCD(REPLACED)FGHIJKLMNOPQRSTUVWXYZ

// PATTERNS - find a range of character
// [abc] - range between e - h
console.log(a1.match(/[abc]/gi)); //  ['A','B','C']
console.log(a1.match(/[a-d]/gi)); // ['A','B','C','D']
// [0-9]
console.log(b1.match(/[123]/gi)); // ['1','2','3']
console.log(b1.match(/[1-4]/gi)); // ['1','2','3','4']
// [a|b]
console.log(a1.match(/[a|c]/gi)); // ['A','C']
// WITHOUT MODIFIERS
console.log(a1.match(/a/)); // Null
console.log(a1.match(/A/)); // ['A',index:0,input:'ABCDEFGHIJKLMNOPQRSTUVWXYZ']

// METACHARACTERS
const c1 = "ABCDEFGHI";
const d1 = "123456789";
const e1 = "ABCDE12345";
const f1 = " ABCD ABCD ";
const g1 = "ABCDABCD";
// \d - Find a number
console.log(c1.match(/\d/gi)); // null
console.log(d1.match(/\d/gi)); // ['1','2','3','4','5','6','7','8','9']
console.log(e1.match(/\d/gi)); // ['1','2','3','4','5']
// \s - Find a whitespace
console.log(c1.match(/\s/gi)); // null
console.log(f1.match(/\s/gi)); // [' ',' ',' ']
// \b - Find a character at the beginning and the end
console.log(c1.match(/\bAB/gi)); // ['AB']
console.log(f1.match(/\bAB/gi)); // ['AB','AB']
console.log(g1.match(/\bAB/gi)); // ['AB']
console.log(c1.match(/HI\b/gi)); // ['HI']
console.log(f1.match(/CD\b/gi)); // ['CD','CD']
console.log(g1.match(/CD\b/gi)); // ['CD']
// \uxxxx - Unicode search (U+0041 A) (U+0042 B)
console.log(c1.match(/\u0041/gi)); // ['A']
console.log(c1.match(/\u0042/gi)); // ['B']

// QUANTIFIERS - return how may instance of a specific character
// should occur on the search
const a2 = "ABCDE";
const b2 = "ABCDE ABCDE";
const c2 = "AABCD ABCDE BABAA";
// n+
console.log(a2.match(/a+/gi)); // ['A']
console.log(b2.match(/a+/gi)); // ['A','A']
console.log(c2.match(/a+/gi)); // ['AA','A','A','AA']
// n*
console.log(a2.match(/a*/gi)); // ['A','','','','','']
console.log(b2.match(/a*/gi)); // ['A','','','','','','A','','','','','']
console.log(c2.match(/a*/gi)); // ['AA','','','','','A','','','','','','','A','','AA','']
// n?
console.log(a2.match(/a?/gi)); // [ 'A','','','','','']
console.log(b2.match(/a?/gi)); // ['A','','','','','','A','','','','','']
console.log(c2.match(/a?/gi)); // ['A','A','','','','','A','','','','','','','A','','A','A','']

// USING REGEX OBJECT
const a3 = "ABCDE";
const b3 = "ABCDE ABCDE"
const c3 = "AABCD ABCDE 12345";
const patternA = /a/gi; // (g is not recommended)
const patternA2 = /a/i; // (this is best practice)
const patternB = /\d/gi;
const patternC = /[a-d]/gi
// test() - searches for an specific pattern then returns true or false
console.log(patternA.test(a3)); // true
console.log(patternB.test(c3)); // true
console.log(patternC.test(b3)); // true
// exec() - searches for an specific pattern then returns the result as object
console.log(patternA.exec(a3)); // null (using g modifier is not allowed for single character)
console.log(patternA2.exec(a3)); // ['A',index:0,input:'ABCDE',groups:undefined]
console.log(patternB.exec(c3)); // ['2',index:13,input:'AABCD ABCDE 12345',groups:undefined]
console.log(patternC.exec(b3)); // ['B',index:1,input:'ABCDE ABCDE',groups:undefined]
