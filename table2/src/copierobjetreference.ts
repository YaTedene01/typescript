// copie superficielle
const original = { name: "Tedene", age: 25 };
const copi = { ...original };

copi.name = "Faye";

console.log(original.name); 
console.log(copi.name); 

// 

const originale = { nom: "Tedene", agee: 27 };
const cop = Object.assign({}, originale);

cop.agee = 30;

console.log(originale.agee); 

