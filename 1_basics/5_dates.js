/*
  DATES
*/

/*
  CREATING A DATE
  - new Date()
  - new Date(year, month, day, hours, minutes, seconds, milliseconds)
  - new Date(milliseconds)
  - new Date(date string)
*/

// CURRENT DATE
const a1 = new Date();
console.log(a1); // 2021-08-11T12:39:06.958Z

// DEFINED DATE
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
const b1 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(b1); //2018-12-24T02:33:30.000Z

// DATE FROM STRING
const c1 = new Date("November 22, 1996 04:00:00");
console.log(c1); //1996-11-21T20:00:00.000Z

// DATE FROM MILLISECONDS
// - javascript stores dates as number of milliseconds since January 01, 1970
const d1 = new Date(1231222133312)
console.log(d1); // 2009-01-06T06:08:53.312Z

// READABLE DATE
const e1 = new Date();
console.log(e1.toDateString()); // Wed Aug 11 2021

// UTC DATE
const f1 = new Date();
console.log(f1.toUTCString()); // Wed, 11 Aug 2021 12:49:58 GMT

// ISO DATE
const g1 = new Date();
console.log(g1.toISOString()); // 2021-08-11T12:50:37.984Z


/********************************************
  DATE FORMAT
********************************************/

/*
+------------+--------------------------------------------+
| Type 	     | Example                                    |
+ -----------+--------------------------------------------+
| ISO Date 	 | "2015-03-25" (The International Standard)  | (recommended)
| Short Date | "03/25/2015"                               |
| Long Date  | "Mar 25 2015" or "25 Mar 2015"             |
+------------+--------------------------------------------+
*/

// COMPLETE DATE
const a2 = new Date("2021-11-22");
console.log(a2); // 2021-11-22T00:00:00.000Z

// DATE CAN BE DEFINED WITHOUT DAY
const b2 = new Date("2015-03");
console.log(b2); // 2015-03-01T00:00:00.000Z

// YEAR ONLY (ISO DATE)
const c2 = new Date("2021");
console.log(c2); // 2021-01-01T00:00:00.000Z

// DATETIME (ISO DATE)
const d2 = new Date("2015-03-25T12:00:00Z");
console.log(d2); // 2015-03-25T12:00:00.000Z

/*
  NOTES
  - always put leading zeros on date (other browser might not support no 0)
  - YYYY/MM/DD (undefined)
  - DD-MM-YYYY (undefined)
*/

/********************************************
  GET METHODS
********************************************/

/*
getFullYear() 	    Get the year as a four digit number (yyyy)
getMonth() 	        Get the month as a number (0-11)
getDate() 	        Get the day as a number (1-31)
getHours() 	        Get the hour (0-23)
getMinutes() 	      Get the minute (0-59)
getSeconds()      	Get the second (0-59)
getMilliseconds() 	Get the millisecond (0-999)
getTime() 	        Get the time (milliseconds since January 1, 1970)
getDay() 	          Get the weekday as a number (0-6)
Date.now()         	Get the time. ECMAScript 5.
*/

const a3 = new Date();
console.log(a3.getFullYear()); // 2021
console.log(a3.getMonth()); // 7
console.log(a3.getDate()); // 11
console.log(a3.getHours()); // 21
console.log(a3.getMinutes()); // 12
console.log(a3.getSeconds()); // 35
console.log(a3.getMilliseconds()); // 442
console.log(a3.getTime()); // 1628687632442
console.log(a3.getDay()); // 3
console.log(Date.now()); // 1628687632446


/********************************************
  SET METHODS
********************************************/

/*
setDate() 	        Set the day as a number (1-31)
setFullYear() 	    Set the year (optionally month and day)
setHours() 	        Set the hour (0-23)
setMilliseconds() 	Set the milliseconds (0-999)
setMinutes() 	      Set the minutes (0-59)
setMonth() 	        Set the month (0-11)
setSeconds() 	      Set the seconds (0-59)
setTime() 	        Set the time (milliseconds since January 1, 1970)
*/
