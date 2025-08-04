// Explication : Utiliser une propriété discriminante pour identifier un type dans une union.

 type Discrimination = {
    type: "discrimination";
    value: string;
};
type Type = {
    type: "type";
    value: string;
}
type DiscriminationType = Discrimination | Type;
function handleDiscrimination(input: DiscriminationType) {
    if (input.type === "discrimination") {
        console.log(`Discrimination value: ${input.value}`);
    } else {
        console.log(`Type value: ${input.value}`);
    }
}
const example1: DiscriminationType = { type: "discrimination", value: "Example 1" };
const example2: DiscriminationType = { type: "type", value: "Example 2" };
handleDiscrimination(example1);
handleDiscrimination(example2);