function hola(nombre, miCallback) {
  // console.log("Hola soy una funcion asincrona");
  setTimeout(function () {
    console.log("Hola " + nombre);
    miCallback(nombre);
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("Bla bla bla");
    callbackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios " + nombre);
    otroCallback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}
// --
console.log("Iniciando proceso");
hola("Juan", function (nombre) {
  conversacion(nombre, 3, function () {
    console.log("proceso terminado");
  });
});
// hola("Juan", function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       adios(nombre, function () {
//         console.log("Terminando proceso");
//       });
//     });
//   });
// });
