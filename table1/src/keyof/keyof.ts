type Voiture = { marque: string; vitesse: number };
type ClésVoiture = keyof Voiture; // "marque" | "vitesse"
