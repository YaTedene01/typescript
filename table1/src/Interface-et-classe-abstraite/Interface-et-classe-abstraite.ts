abstract class Animal {
  constructor(public nom: string) {}
  abstract parler(): void;
}

class Chien extends Animal {
  parler() {
    console.log("Ouaf !");
  }
}
