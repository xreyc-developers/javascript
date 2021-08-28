/*
  3 ways to declare a varible

  var
  - can be declared anywhere
  - can be change
  - unblock

  let
  - cannot be redeclared
  - must be declared before use
  - block scoped
  - you can change the value

  const
  - cannot be redeclared
  - cannot be reassigned
  - block scoped
  - must be assigned with vakue on declaration
*/

/************** ASSIGNMENT **************/
//VAR
var vx1 = 5;
var vy1 = 6;
var vz1 = vx1 + vy1; // 11

// LET
let lx1;
lx1 = 5; // 5

//CONST
const cx1;
cx1 = 5; // error

/********************** ALL **********************/
// UNDEFINED
var x2; // undefined

// ONE STATEMENT MANY VARIABLE
var x3 = 'Reyco', y3 = 'Cobselin', z3 = 'Seguma'; // Reyco Cobselin Seguma

// ARITHMETIC
var x4 = 1 + 2 + 3; //6
var x5 = 'Reyco' + ' ' + 'Seguma'; // Reyco Seguma
var x6 = '1' + 2 + 3; // 123 // numbers will be automatically converted to string

// DOLLAR SIGN
var $ = 5;
var $x = 10;
var x7 = $ + $x; // 15

// DOLLAR SIGN
var _ = 5;
var _x = 10;
var x8 = _ + _x; // 15
