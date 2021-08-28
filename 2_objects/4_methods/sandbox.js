/**
 * CREATING A METHOD
 */
const person1 = {
    firstname: 'Reyco',
    lastname: 'Seguma',
    fullname: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

/**
 * CALLING A METHOD
 */
console.log(person1.fullname());

/**
 * ADDING A METHOD TO A FUNCTION
 */
person1.name = function() {
    return this.firstname + ' ' + this.lastname;
}

/**
 * BUILT IN METHODS
 */
let name1 = "Hello world";
name1 = name1.toUpperCase();
console.log(name1);