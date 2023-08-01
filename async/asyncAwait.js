async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

async function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Bla bla bla");
      resolve(nombre);
      //   reject("Hay un error");
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Adios " + nombre);
      resolve();
    }, 1000);
  });
}

async function principal() {
  let nombre = await hola("Juan");
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log("Termina el proceso");
}

console.log("Empezamos el proceso");
principal();
