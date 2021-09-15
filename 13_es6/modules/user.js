/*
  NOTES:
  - there can be only one export default
*/


/*
SAMPLE 1 : EXPORT AT THE END OF LINE
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
function printName(user) {
  console.log(user.name);
}
function printAge(user) {
  console.log(user.age);
}
export default User
export { printName, printAge }
*/

// SAMPLE 2 : EXPORT INLINE
export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
export function printName(user) {
  console.log(user.name);
}
export function printAge(user) {
  console.log(user.age);
}
