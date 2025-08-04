"use strict";
// type primitif
let a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);
let c = 1;
let d = 2;
c = d;
console.log(c);
console.log(d);
//type reference
const objet1 = { nom: "faye" };
const objet2 = objet1;
console.log(objet1);
console.log(objet2);
const object1 = { nom: "faye", prenom: "ndeye" };
const object2 = object1;
object2.nom = "gueye";
console.log(object1);
