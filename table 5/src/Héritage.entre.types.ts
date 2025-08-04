// Explication : Un type ou interface peut étendre à un autre.
// il permet de créer des types ou interfaces plus spécifiques en ajoutant des propriétés ou des méthodes à un type ou interface existant.
interface Parent {
    id: number;
    name: string;
}
interface Child extends Parent {
    age: number;
}
interface Enfant extends Parent {
    ville: string;
}
const appreant: Enfant = { id: 1, name: "khadim", ville: "dakar" };
const enfant: Child = { id: 2, name: "pape", age: 10 };
console.log(appreant);
console.log(enfant);
