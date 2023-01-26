const bodyParser = require("body-parser");

const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");
const eschema = mongoose.Schema;

const eschemaProducto = new eschema({
  producto: String,
  nombre: String,
  descripcion: String,
  precio: String,
});

const ModeloProducto = mongoose.model("productos", eschemaProducto);
module.exports = router;

//agregar un producto a la BD
router.post("/agregarProducto", (req, res) => {
  const { nombre, descripcion, precio, idProducto } = req.body;
  const nuevoProducto = new ModeloProducto({
    nombre: nombre,
    descripcion: descripcion,
    precio: precio,
    producto: idProducto
  });

  nuevoProducto.save(function (err) {
    if (!err) {
      res.send("Producto Agregado Correctamente");
    } else {
      res.send(err);
    }
  });
});

//obtener los productos de la BD obtenerProducto

router.get("/obtenerProductos", (req, res) => {
  ModeloProducto.find({}, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});
/*
router.post("/obtenerDataProducto", (req, res) => {
  ModeloProducto.find({idProducto:req.body.idProducto}, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});
*/