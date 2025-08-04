"use strict";
class Produit {
    constructor() {
        this._prix = 0;
    }
    get prix() {
        return this._prix;
    }
    set prix(val) {
        if (val >= 0)
            this._prix = val;
    }
}
