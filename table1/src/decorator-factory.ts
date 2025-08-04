function Logger(message: string) {
  return function (constructor: Function) {
    console.log(message, constructor.name);
  };
}

@Logger("Classe enregistrée :")
class Service {}
