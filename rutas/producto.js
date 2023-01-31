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
  images: String,
});

const ModeloProducto = mongoose.model("productos", eschemaProducto);
module.exports = router;

//agregar un producto a la BD
router.post("/agregarProducto", (req, res) => {
  const { nombre, descripcion, precio, idProducto, images } = req.body;
  const nuevoProducto = new ModeloProducto({
    nombre: nombre,
    descripcion: descripcion,
    precio: precio,
    producto: idProducto,
    images: images,
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

router.post("/obtenerDataProducto", (req, res) => {
  ModeloProducto.find({ producto: req.body.idProducto }, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

router.post("/actualizarProducto", (req, res) => {
  ModeloProducto.findOneAndUpdate(
    { producto: req.body.idProducto },
    {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: req.body.precio,
      images: req.body.images,
    },
    (err) => {
      if (!err) {
        res.send("Producto Actualizado");
      } else {
        res.send(err);
      }
    }
  );
  /*
  const { nombre, descripcion, precio, idProducto } = req.body;
  const nuevoProducto = new ModeloProducto({
    nombre: nombre,
    descripcion: descripcion,
    precio: precio,
    producto: idProducto,
  });

  nuevoProducto.save(function (err) {
    if (!err) {
      res.send("Producto Actualizado Correctamente");
    } else {
      res.send(err);
    }
  });

  */
});

router.post("/borrarProducto", (req, res) => {
  ModeloProducto.findOneAndDelete({ producto: req.body.producto }, (err) => {
    if (!err) {
      res.send("Producto Borrado");
    } else {
      res.send(err);
    }
  });
});
