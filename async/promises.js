function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Bla bla bla");
      //   resolve(nombre);
      reject("Hay un error");
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Adios " + nombre);
      resolve();
    }, 1000);
  });
}

//_____________
console.log("Iniciado el proceso");
hola("Juan")
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log("Terminado el proceso");
  })
  .catch((error) => {
    console.error(error);
  });
