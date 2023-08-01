let suma = 0;

console.time("bucle");
for (let i = 0; i < 1000000; i++) {
  suma += 1;
}
console.timeEnd("bucle");

let suma2 = 0;

console.time("bucle2");
for (let j = 0; j < 10000000; j++) {
  suma2 += 1;
}
console.timeEnd("bucle2");

console.time("asinc");
function asincrona() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("TErmino e l proceso asincrono");
      resolve();
    }, 1000);
  });
}
console.timeEnd("asinc");
