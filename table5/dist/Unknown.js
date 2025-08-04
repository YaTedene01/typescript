"use strict";
let nbr = 22; // Peut être n'importe quel type
if (typeof nbr === 'number') {
    console.log(`Le nombre est : ${nbr}`); // Affiche : Le nombre est : 22
}
// Exemple d'utilisation de unknown avec une fonction
function processValue(value) {
    if (typeof value === 'string') {
        console.log(`La chaîne de caractères est : ${value}`);
    }
    else if (typeof value === 'number') {
        console.log(`Le nombre est : ${value}`);
    }
    else {
        console.log('Type inconnu');
    }
}
processValue("Hello, World!");
processValue(42);
// Exemple d'utilisation de unknown avec un tableau
let tableaux = [1, "Hello", true];
tableaux.forEach(item => {
    if (typeof item === 'number') {
        console.log(`Nombre : ${item}`);
    }
    else if (typeof item === 'string') {
        console.log(`Chaîne : ${item}`);
    }
    else {
        console.log(`Autre type : ${item}`);
    }
});
