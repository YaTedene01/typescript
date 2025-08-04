"use strict";
// Explication : Utiliser une propriété discriminante pour identifier un type dans une union.
function handleDiscrimination(input) {
    if (input.type === "discrimination") {
        console.log(`Discrimination value: ${input.value}`);
    }
    else {
        console.log(`Type value: ${input.value}`);
    }
}
const example1 = { type: "discrimination", value: "Example 1" };
const example2 = { type: "type", value: "Example 2" };
handleDiscrimination(example1);
handleDiscrimination(example2);
