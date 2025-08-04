// Explication :interface : pour décrire un objet (extensible)
// type : alias pour n'importe quel type (objets, unions, fonctions…)


interface InterfaceExample {
    name: string;
    age: number;
    address?: string;
}

type TypeExample = {
    name: string;
    age: number;
    address?: string;
}
// Exemple d'utilisation
const interfaceExample: InterfaceExample = {
    name: "dane",
    age: 30,
    address: "dakar",
};
const typeExample: TypeExample = {
    name: "baba",
    age: 30,
    address: "1thies",
};
console.log(`Interface Example: ${interfaceExample.name}, ${interfaceExample.age}, ${interfaceExample.address}`);
console.log(`Type Example: ${typeExample.name}, ${typeExample.age}, ${typeExample.address}`);