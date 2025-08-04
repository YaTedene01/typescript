"use strict";
const utilisateur = {
    identifiant: 1,
    nom: "Fatou Ndiaye",
    password: "fatou123",
};
// Ces modifications sont permises :
utilisateur.nom = "Fatou Sarr";
utilisateur.password = "fatoundiaye123";
//  Celle-ci est interdite :
// utilisateur.identifiant = 2; // Erreur TypeScript : Cannot assign to 'identifiant' because it is a read-only property
// Pourquoi readonly est utile ici :
// Empêche les erreurs comme changer l’ID d’un utilisateur après sa création.
// Renforce la cohérence des objets immuables (ex. : ID, numéro de dossier, matricule…).
