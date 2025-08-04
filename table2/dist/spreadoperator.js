"use strict";
// copier un tableau
const legumes = ["carotte", "patate", "manioc"];
const copie = [...legumes];
console.table(copie);
// fusionner deux tableaux
const telephones = ["iphone", "samsung", "tecno"];
const voitures = ["hundai", "bmw", "jeep"];
const fusion = [...telephones, ...voitures];
console.table(fusion);
// copie un objet
const user = { nom: "mouhamed", age: 1 };
const copier = Object.assign({}, user);
console.table(copier);
// fusionner un objet
const users = { nom: "mouhamed", age: 1 };
const info = { poids: 11, taille: 50 };
const fusionner = Object.assign(Object.assign({}, users), info);
console.table(fusionner);
// Si deux objets ont la même clé, c’est le dernier qui écrase.
const utilisateur = { nom: "mouhamed", age: 1 };
const infos = { age: 2, poids: 11 };
const fus = Object.assign(Object.assign({}, utilisateur), infos);
console.table(fus);
// spread dans les fonctions
const nombres = [1, 2, 3];
function soustraction(a, b, c) {
    return a - b - c;
}
console.log(soustraction(...nombres));
// spread sur des chaine de caracteres
const mot = 'salut';
const lettre = [...mot];
console.log(lettre);
