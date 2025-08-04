class CompteBancaire {
  public titulaire: string;
  private solde: number;

  constructor(titulaire: string) {
    this.titulaire = titulaire;
    this.solde = 0;
  }

  deposer(montant: number) {
    this.solde += montant;
  }

  afficherSolde() {
    console.log(`Solde de ${this.titulaire} : ${this.solde} FCFA`);
  }
}

// Utilisation
const compte1 = new CompteBancaire("Aliou");

compte1.deposer(10000);
compte1.afficherSolde(); // Solde de Aliou : 10000 FCFA

// public titulaire: visible partout.

// private solde: uniquement accessible dans la classe.

// deposer(): ajoute un montant au solde.

// afficherSolde(): affiche le solde avec console.log.