
// --- Test type union ---
type ID = string | number;
const afficherId = (id: ID) => {
  if (typeof id === 'string') console.log('Texte :', id);
  else console.log('Nombre :', id);
};
afficherId('abc');
afficherId(123);
