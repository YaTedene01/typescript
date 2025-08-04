class Boîte<T> {
  contenu: T;
  constructor(contenu: T) {
    this.contenu = contenu;
  }
}

const boîteNombre = new Boîte<number>(42);
const boîteTexte = new Boîte<string>("Hello");
