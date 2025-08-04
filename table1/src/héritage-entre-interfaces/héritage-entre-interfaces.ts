interface Personne {
  nom: string;
}

interface Employé extends Personne {
  salaire: number;
}

const e: Employé = { nom: "Fatou", salaire: 2000 };
