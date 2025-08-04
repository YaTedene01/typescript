"use strict";
class Person {
    constructor(name) {
        this.name = name; // `this` fait référence à l'instance courante
    }
    greet() {
        console.log(`Bonjour, je m'appelle ${this.name}`);
    }
}
const q = new Person("Ali");
q.greet(); // Bonjour, je m'appelle Ali
