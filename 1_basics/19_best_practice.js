/*
  BEST PRACTICE
  - avoid global variables
  - avoid new
  - avoid ==
  - avoid eval()

  # AVOID GLOBAL VARIABLES
    - minimize the use of global variables
    - global variables and functions can be overwriten by other scripts

  # ALWAYS DECLARE LOCAL VARIABLES
    - variables must be declared else it will become global variable

  # DECLARATIONS ON TOP
    - gives cleaner code
    - single place for variables
    - to avoid unwanted (implied) global variables
    - to avoid redeclaration

    <-- EXAMPLE
    let firstName, lastName, price, discount, fullPrice;
    firstName = "John";
    lastName = "Doe";
    price = 19.90;
    discount = 0.10;
    -->

  # INITIALIZE VARIABLES
    - gives cleaner code
    - single place to initialize
    - to avoid undefined values

    <-- EXAMPLE
    let firstName = "",
    let lastName = "",
    let price = 0,
    let discount = 0,
    let fullPrice = 0,
    const myArray = [],
    const myObject = {};
    -->

  # DECLARE OBJECTS WITH CONST
    - prevents accidental change of type

    <-- EXAMPLE
    let car = { brand: 'Honda' }
    car = ''; (changed the object into string)

    const car = { brand: 'Honda' }
    car = ''; (not possible)
    -->

  # DONT USE NEW
      Use "" instead of new String()
      Use 0 instead of new Number()
      Use false instead of new Boolean()
      Use {} instead of new Object()
      Use [] instead of new Array()
      Use /()/ instead of new RegExp()
      Use function (){} instead of new Function()

  # BEWARE OF AUTOMATIC TYPE CONVERSION
    <-- EXAMPLE
    let x = "Hello";
    x = 5;

    let x = 5 + 7;       // x.valueOf() is 12,  typeof x is a number
    let x = 5 + "7";     // x.valueOf() is 57,  typeof x is a string
    let x = "5" + 7;     // x.valueOf() is 57,  typeof x is a string
    let x = 5 - 7;       // x.valueOf() is -2,  typeof x is a number
    let x = 5 - "7";     // x.valueOf() is -2,  typeof x is a number
    let x = "5" - 7;     // x.valueOf() is -2,  typeof x is a number
    let x = 5 - "x";     // x.valueOf() is NaN, typeof x is a number

    "Hello" - "Dolly"    // returns NaN
    -->

  # USE === COMPARISON
    <-- EXAMPLE
    0 == "";        // true
    1 == "1";       // true
    1 == true;      // true

    0 === "";       // false
    1 === "1";      // false
    1 === true;     // false
    -->

  # USE PARAMETER DEFAULTS
    <-- EXAMPLE
      function myFunction (x,y) {
        if (x === undefined) x = 0;
        if (y === undefined) y = 0;
      }
      OR (ECMASCRIPT 2015)
      function (x = 0,y = 0) {}
    -->

  # END SWITCH WITH DEFAULT
  # AVOID NUMBER, STRING AND BOOLEAN AS OBJECT
  # AVOID USING EVAL
*/


/*
  PERFORMANCE PRACTICES

  # REDUCE ACTIVITY IN LOOPS
    * BAD PRACTICE
    for (let i = 0; i < arr.length - 1; i++) {}
    * BEST PRACTICE
    let l = arr.length - 1;
    for (let i = 0; i < l; i++ ) {}

  # REDUCE DOM ACCESS
  - access DOM once by storing it on variable
  const obj = document.getElementById("demo");
  obj.innerHTML = "Hello";

  # REDUCE DOM SIZE
  - keep the number of element on the HTML DOM small (will speed up rendering)
  - dom selector will benefit from this

  # AVOID UNNECESSARY VARIABLES
    * BAD PRACTICE
    const fullname = firstname + ' ' + lastname;
    document.getElementById("demo").innerHTML = fullname;
    * BEST PRACTICE
    document.getElementById("demo").innerHTML = firstname + ' ' + lastname;

  # DELAY JAVASCRIPT LOADING
    - put the javascript at the bottom so that page can load first.
    - if script is on top, it will download the script first before loading the rest of the page
    - we can use defer="true" as alternative

  # AVOID USING WITH
    - has negative effect on speed
    - not allowed in strict mode
*/
