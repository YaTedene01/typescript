"use strict";
//  un fonction générique permet de créer des fonctions qui peuvent travailler avec différents types de données.
//  il permet de créer des fonctions plus flexibles et réutilisables.
function fonctionGenerique(param) {
    return param;
}
// Exemple d'utilisation
console.log(fonctionGenerique("Hello, World!"));
// Exemple d'utilisation avec un nombre
console.log(fonctionGenerique(42));
// Exemple d'utilisation avec un tableau
console.log(fonctionGenerique([1, 2, 3]));
// Exemple d'utilisation avec un objet
console.log(fonctionGenerique({ name: "John", age: 30 }));
console.log(fonctionGenerique(true));
