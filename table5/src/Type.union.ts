// Explication : Un type union permet de définir un type qui peut être l'un des types spécifiés.
// il permet de créer des types plus flexibles en permettant de spécifier plusieurs types possibles pour une variable.
type UnionType = string | number | boolean;
let Type: UnionType= "breukhh";
let Type2: UnionType = 2025;
let Type3: UnionType = true;

console.log(`Type 1: ${Type}`);
console.log(`Type 2: ${Type2}`);
console.log(`Type 3: ${Type3}`);