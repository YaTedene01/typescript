function LogProperty(target: any, propertyKey: string) {
  console.log(`Propriété décorée : ${propertyKey}`);
}

class Produit {
  prix: number = 100;
}
