const somethingWillHappen = (condition) => {
  return new Promise((resolve, reject) =>
    condition ? resolve('Excelente pasa.') : reject('Fall la promesa')
};

//Le ponemos true o false, dependiendo de la respuesta que queramos.
somethingWillHappen(true)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
