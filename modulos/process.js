// const process = require("process");
process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});
process.on("exit", () => {
  console.log("El proceso acabo");
});

process.on("uncaughtException", (err, origen) => {
  console.error(err);
});

noexiste();
