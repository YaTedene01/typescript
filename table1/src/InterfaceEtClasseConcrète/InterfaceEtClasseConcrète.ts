interface Volant {
  voler(): void;
}

class Oiseau implements Volant {
  voler() {
    console.log("Je vole !");
  }
}
