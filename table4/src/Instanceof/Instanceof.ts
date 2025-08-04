
// --- Instanceof ---
class Animal {}
class Chien extends Animal {}
const rex = new Chien();
console.log(rex instanceof Chien); // true
console.log(rex instanceof Animal); // true