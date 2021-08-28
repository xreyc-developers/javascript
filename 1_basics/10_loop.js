/*
  LOOP
*/

// FOR LOOP
// for (condition1; condition2; condition3) {}
// condition1 - executed before start
// condition2 - condition to meet (any conditon you want to fulfill)
// condition3 - executed every iteratiob
// (for loop will work even we remove condition1 and condition3)
console.log('[FOR LOOP]');
const a1 = [0,1,2,3,4,5,6,7,8,9];
// FOR LOOP 1
for (let ai = 0; ai <= a1.length - 1; ai++) {
  console.log(a1[ai]);
}
// Result: 0 1 2 3 4 5 6 7 8 9
// FOR LOOP 2
let bi = 0;
for (;bi <= a1.length - 1; bi++) {
  console.log(a1[bi]);
}
// Result: 0 1 2 3 4 5 6 7 8 9

// FOR IN
// for (key in object) {}
const b1 = {
  fname: 'Reyco',
  lname: 'Seguma',
  age: 24,
  course: 'Electronics Engineering'
}
for (let x in b1) {
  console.log(x);
}
// Result: fname lname age course
for (let x in b1) {
  console.log(`${x} : ${b1[x]}`);
}
/* Result
  fname: Reyco
  lname: Seguma
  age: 24
  course: Electronics Engineering
*/

// ARRAY FOREACH
// Array.forEach((value,index,array) => {})
const c1 = [0,1,2,3,4,5,6,7,8,9];
c1.forEach((item,index,array) => {
  console.log(item);
})
// Result: 0 1 2 3 4 5 6 7 8 9

// FOR OF
// for (variable of iterable) {}
const d1 = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 }
]
for (let x of d1) {
  console.log(x);
}
/* Result
  { id: 0 }
  { id: 1 }
  { id: 2 }
  { id: 3 }
  { id: 4 }
*/
const e1 = "Reyco";
for (let x of e1) {
  console.log(x);
} // R e y c o

// WHILE
// while (condition) {}
let f1 = 0;
while (f1 <= 9) {
  console.log(f1);
  f1++;
} // 0 1 2 3 4 5 6 7 8 9

// DO WHILE
// do {} while(condition)
let g1 = 0;
do {
  console.log(g1);
  g1++;
} while (g1 <= 9);
// 0 1 2 3 4 5 6 7 8 9
