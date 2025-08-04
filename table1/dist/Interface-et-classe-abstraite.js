"use strict";
class Animal {
    constructor(nom) {
        this.nom = nom;
    }
}
class Chien extends Animal {
    parler() {
        console.log("Ouaf !");
    }
}
