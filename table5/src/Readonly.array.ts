// Explication : Tableau qui ne peut pas être modifié.
// Un tableau en TypeScript est une structure de données qui permet de stocker une collection d'éléments.
// Un tableau readonly est un tableau dont les éléments ne peuvent pas être modifiés après leur création.
// Il est utilisé pour garantir que les données restent constantes et ne peuvent pas être altérées accidentellement.
// Il est utile pour les données qui doivent rester immuables, comme les constantes ou les configurations.
let readonlyArray: readonly number[] = [1, 2, 3, 4, 5];
console.log(readonlyArray); // Affiche : [1, 2, 3, 4, 5]    
// Tentative de modification (provoquera une erreur)
// readonlyArray[0] = 10; // Erreur : Impossible de modifier un tableau
// readonlyArray.push(6); // Erreur : Impossible d'ajouter des éléments à un tableau readonly
// Utilisation d'un tableau readonly dans une fonction
function processReadonlyArray(arr: readonly number[]): void {
    arr.forEach((num) => {
        console.log(`Nombre : ${num}`);
    });
}
processReadonlyArray(readonlyArray); // Affiche : Nombre : 1, Nombre : 2, Nombre : 3, Nombre : 4, Nombre : 5    
