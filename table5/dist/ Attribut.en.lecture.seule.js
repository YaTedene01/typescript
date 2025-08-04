"use strict";
// Explication : readonly empêche la modification d’un attribut.
class architecte {
    constructor(name) {
        this.name = name;
    }
}
const architecte1 = new architecte("tedene");
console.log(architecte1.name);
// architecte1.name = "tedene"; // Erreur :
// Cannot assign to 'name' because it is a read-only property.
