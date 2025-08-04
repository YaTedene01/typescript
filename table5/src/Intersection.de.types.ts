// Explication : Combine plusieurs types avec & 
// pour créer un type qui doit respecter toutes les conditions.

type un ={ nom:string};
type deux ={age :number};
type trois ={adresse :string};
type quatre = un & deux & trois;
const exemple: quatre = {
    nom: "fatou",
    age: 25,
    adresse: "Paris"
};
console.log(`Exemple de type combiné: ${exemple.nom}, ${exemple.age}, ${exemple.adresse}`);
