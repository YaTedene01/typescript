class Produit {
  private _prix = 0;

  get prix() {
    return this._prix;
  }

  set prix(val: number) {
    if (val >= 0) this._prix = val;
  }
}
