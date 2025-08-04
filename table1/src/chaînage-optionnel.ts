type Contact = {
  telephone: string;
  email?: string; //propriété optionnelle
};

type Compte = {
  titulaire: {
    nom: string;
    contact?: Contact;
  };
};

const compte: Compte = {
  titulaire: {
    nom: "Astou Mbow",
    contact: {
      telephone: "77 199 28 43"
      // email est absent volontairement
    }
  }
};

// Accès sécurisé
console.log(compte.titulaire?.contact?.email);      // undefined
console.log(compte.titulaire?.contact?.telephone);  // "77 199 28 43"
