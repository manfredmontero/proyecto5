const bodyParser = require("body-parser");

const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");
const eschema = mongoose.Schema;

const eschemaCarrito = new eschema({
  producto: String,
  nombreusuario: String,
  precio: String,
});

const ModeloProducto = mongoose.model("carritos", eschemaCarrito);
module.exports = router;

//agregar un producto al carrito del usuario a la BD
router.post("/agregarproductocarrito", (req, res) => {
  const { producto, nombreusuario, precio} = req.body;
  const nuevoProducto = new ModeloProducto({
    producto: producto,
    nombreusuario: nombreusuario,
    precio: precio,
  });

  nuevoProducto.save(function (err) {
    if (!err) {
      res.send("Producto Agregado Correctamente");
    } else {
      res.send(err);
    }
  });
});
