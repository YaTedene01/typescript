// Explication : Syntaxe courte pour les fonctions.
// Il n'y a pas de paramètres.
// Il n'y a pas de retour de valeur.


const store = (a: number, b: number): number => a + b;
console.log(store(1, 2));
// Explication : Syntaxe longue pour les fonctions.
// Il y a des paramètres.
// il y a un retour de valeur.
const store2 = (a: number, b: number): number => {
    return a + b;
}
console.log(store2(51, 92));