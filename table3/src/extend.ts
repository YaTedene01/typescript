function afficherNom<T extends { nom: string }>(objet: T) {
  console.log(objet.nom);
}
afficherNom({ nom: "Tedene", age: 25 });
