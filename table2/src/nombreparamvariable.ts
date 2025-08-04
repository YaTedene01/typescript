function somme(...nombres: number[]): number {
  return nombres.reduce((total, n) => total + n, 0);
}
console.log(somme(1, 2, 3, 4)); // 10
