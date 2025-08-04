function Logger(constructor: Function) {
  console.log("Classe créée :", constructor.name);
}

@Logger
class Utilisateur {
  constructor(public nom: string) {}
}
