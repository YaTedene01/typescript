function identité<T>(val: T): T {
  return val;
}

console.log(identité<number>(5));
console.log(identité<string>("Salut"));
