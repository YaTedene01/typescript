"use strict";
const afficherId = (id) => {
    if (typeof id === 'string')
        console.log('Texte :', id);
    else
        console.log('Nombre :', id);
};
afficherId('abc');
afficherId(123);
