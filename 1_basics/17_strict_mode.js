/*
  "strict mode"
  - makes it easier to write "secure" JavaScript
  - mistyping a variable name creates a new global variable, strict mode does not allow that.

  #NOT ALLOWED
  "use strict";

  UNDECLARED VARIABLES
  x = 3.14;
  x = {p1:10, p2:20};

  DELETING
  delete x;
  function x(p1, p2) {};
  delete x;

  // DUPLICATE ARGUMENTS
  function x(p1, p1) {};

  // OCTAL NUMERIC
  let x = 010;
  let x = "\010";

  // READ-ONLY PROPERTY
  const obj = {};
  Object.defineProperty(obj, "x", {value:0, writable:false});
  obj.x = 3.14; (not allowed)

  // GET ONLY PROPERTY
  const obj = {get x() {return 0} };
  obj.x = 3.14; (not allowed)

  // DELETING UNDELETABLE PROPERTY
  delete Object.prototype;

  // WORDS
  let eval = 3.14;
  let arguments = 3.14;

  // WITH STATEMENT
  with (Math){x = cos(2)};

  // EVAL IS NOT ABLE TO CREATE VARIABLES (security reasons)
  eval ("let x = 2");
  alert (x);

  // THIS KEYWORD BEHAVES DIFFERENTLY
  function myFunction() {
    alert(this); // undefined
  }
  myFunction();
*/
