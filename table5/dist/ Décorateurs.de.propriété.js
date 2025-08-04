"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorateursDePropriete(value, context) {
    return function (initialValue) {
        console.log(`Initialisation de ${context.name.toString()}: ${initialValue}`);
        let _val = initialValue;
        Object.defineProperty(this, context.name, {
            get() {
                return _val;
            },
            set(newVal) {
                console.log(`Modification de ${context.name.toString()}: ${_val} -> ${newVal}`);
                _val = newVal;
            },
            configurable: true,
            enumerable: true
        });
        return initialValue;
    };
}
class Production {
    constructor() {
        this.nom = "Tableau";
    }
}
__decorate([
    decorateursDePropriete
], Production.prototype, "nom", void 0);
const prod = new Production();
console.log(`Nom de la production: ${prod.nom}`);
prod.nom = "Nouveau Tableau";
console.log(`Nom modifié: ${prod.nom}`);
