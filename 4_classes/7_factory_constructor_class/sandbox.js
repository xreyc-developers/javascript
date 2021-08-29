/**
 * FACTORY
 */
const person1 = {
    getName() {
        console.log('[FACTORY]');
        return 'Reyco'
    }
}

const person1a = Object.create(person1);
console.log(person1a.getName());

/**
 * CONSTRUCTOR
 */
function Person2() {
    this.name = 'Reyco1 - Constructor';
    this.getName2 = function() {
        return 'Reyco2 - Constructor';
    }
}

Person2.prototype.getName1 = function() {
    console.log('[CONSTRUCTOR]')
    return this.name
}   

const person2a = new Person2(); 
console.log(person2a.getName1());
console.log(person2a.getName2());

/**
 * CLASS
 */
class Person3 {
    getName1() {
        console.log('[CLASS]');
        return 'Kezeah';
    }
}

Person3.prototype.getName2 = function() {
    return 'Kezeah2';
}

const person3a = new Person3();
console.log(person3a.getName1())
console.log(person3a.getName2())