/*
  DATA TYPES
  - string
  - number
  - boolean
  - object
  - function

  OBJECT TYPES
  - Object
  - Date
  - Array
  - String
  - Number
  - Boolean

  OTHERS
  - null
  - undefined

  PRIMITIVE DATA TYPES
  - string
  - number
  - boolean
  - undefined
*/

// TYPE OF OPERATOR
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"

// PRIMITIVE
typeof "John"              // Returns "string"
typeof 3.14                // Returns "number"
typeof true                // Returns "boolean"
typeof false               // Returns "boolean"
typeof x                   // Returns "undefined" (if x has no value)

// COMPLEX
// - function
// - object
typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"
