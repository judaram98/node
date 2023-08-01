const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("nueva peticion");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      res.write("Hola que tal");
      res.end();
      break;

    default:
      res.write("Error 404, no se lo que quieres");
      res.end();
  }

  //   req.writeHead(201, { "Content-Type": "text/plain" });

  //   res.write("Hola, ya se usar Http de NodeJs");
  //   res.end();
}

console.log("Escuchanto http en el puerto 3000");
