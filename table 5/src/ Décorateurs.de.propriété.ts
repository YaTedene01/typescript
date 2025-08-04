function decorateursDePropriete(value: any, context: ClassFieldDecoratorContext) {
    return function (this: any, initialValue: any) {
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
    @decorateursDePropriete
    nom: string = "Tableau";
}

const prod = new Production();
console.log(`Nom de la production: ${prod.nom}`);
prod.nom = "Nouveau Tableau";
console.log(`Nom modifié: ${prod.nom}`);
