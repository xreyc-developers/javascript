/*
  BREAK AND CONTINUE
  BREAK - jump out of a loop or switch.
        - skip the whole iteration
  CONTINUE - it stops the current iteration then continue to the next iteration
*/

// BREAK
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  console.log(i);
}
// 0 1 2

// CONTINUE
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  console.log(i);
}
// 0 1 2 3 4 5 6 7 8 9
