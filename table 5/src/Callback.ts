// Explication : Fonction passée en argument à une autre.
// Elle permet de créer des fonctions plus flexibles en acceptant des fonctions comme paramètres.
function executeCallback(callback: () => void): void {
    console.log("Exécution de la fonction de rappel...");
    callback();
}
// Exemple d'utilisation
executeCallback(() => {
    console.log("Fonction de rappel exécutée !");
});
 

// autres exemple 
 function myCallback(callback :()=>void):void{
    console.log("je suis un callback ");
    callback();

 }
 myCallback(() =>{
    console.log("je suis un autre callback qui est executer");
 }
);
