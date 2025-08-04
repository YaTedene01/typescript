// --- ReduceRight / ReduceLeft ---
const diffGauche = [10, 5, 1].reduce((acc, curr) => acc - curr);
const diffDroite = [10, 5, 1].reduceRight((acc, curr) => acc - curr);
console.log(diffGauche); // 4
console.log(diffDroite); // -4