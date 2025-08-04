// var
if (true){
    var nom="Abdallah";
}
console.log(nom);

// let
let poids=80;
poids=60;
if (true){
    let taille=64;
    console.log(taille);
    console.log(poids);

}
console.log(poids);
// console.log(taille);

// const
const noms="faye";
console.log(noms);

// noms="fall";
const personne={prenom:"ndeye"};
personne.prenom="tedene";
console.log(personne.prenom);
// personne={prenom:"fatou"};

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
