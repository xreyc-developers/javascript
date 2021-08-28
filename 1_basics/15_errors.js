/*
  ERRORS
  try - test the code
  catch - handles the error
  throw - create customer error
  finally - execute a code after try and catch block regardless of the result
*/

// TRY AND CATCH
try {
  console.log('Reyco Seguma');
} catch(e) {}
// e is just an argument used for recieving an error
// it could be anything
// Result: Reyco Seguma

// CATCH
try {
  throw("Hello")
} catch(e) {
  console.log(e);
}
// Result: Hello

// THROW AND EXCEPTION (throw an error)
// exception can be String, Number or an Object
// throw "Too big";
// throw 500;

// TRY, CATCH WITH THROW
const a1 = 5;
try {
  if(a1 === 10) {
    console.log("Success");
  } else {
    throw "Failed"
  }
} catch (e) {
  console.log(e);
}
// Result: Failed

// FINALLY
const b1 = 5;
try {
  if(b1 === 10) {
    console.log("Success");
  } else {
    throw "Failed";
  }
} catch (e) {
  console.log(e);
} finally {
  console.log("Finally");
}
// Result: Failed Finally

/* ERROR OBJECT
  name - sets or returns an error name
  message - sets or returns an error message (a string)

+------------------+--------------------------------------------------+
|  Error Name	     |  Description                                     |
+------------------+--------------------------------------------------+
|  EvalError	     |  An error has occurred in the eval() function    |
|  RangeError	     |  A number "out of range" has occurred            |
|  ReferenceError	 |  An illegal reference has occurred               |
|  SyntaxError	   |  A syntax error has occurred                     |
|  TypeError	     |  A type error has occurred                       |
|  URIError	       |  An error in encodeURI() has occurred            |
+------------------+--------------------------------------------------+
*/
