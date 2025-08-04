"use strict";
var _a, _b, _c, _d;
const compte = {
    titulaire: {
        nom: "Astou Mbow",
        contact: {
            telephone: "77 199 28 43"
            // email est absent volontairement
        }
    }
};
// Accès sécurisé
console.log((_b = (_a = compte.titulaire) === null || _a === void 0 ? void 0 : _a.contact) === null || _b === void 0 ? void 0 : _b.email); // undefined
console.log((_d = (_c = compte.titulaire) === null || _c === void 0 ? void 0 : _c.contact) === null || _d === void 0 ? void 0 : _d.telephone); // "77 199 28 43"
