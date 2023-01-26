const express = require("express");
const app = express();

//importar archivo de conexion
const connectBD = require("./conexion");
//
connectBD();

//importacion de archivo de rutas y modelo de productos

const rutaProducto = require("./rutas/producto");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/producto", rutaProducto);

// configurar server basico
app.get("/", (req, res) => {
  res.end("boojour");
});

app.listen(5000, function () {
  console.log("el servidor Node esta corriendo ");
});
