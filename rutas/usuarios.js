const bodyParser = require("body-parser");

const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");
const eschema = mongoose.Schema;

const eschemaUsuario = new eschema({
  identificador: String,
  nombre: String,
  apellido: String,
  nombreusuario: String,
  contra: String,
  jwt: String,
});

const ModeloUsuario = mongoose.model("usuarios", eschemaUsuario);
module.exports = router;

//agregar un producto a la BD
router.post("/agregarUsuario", (req, res) => {
  const { identificador, nombre, apellido, nombreusuario, contra, jwt } =
    req.body;
  const nuevoProducto = new ModeloUsuario({
    identificador: identificador,
    nombre: nombre,
    apellido: apellido,
    nombreusuario: nombreusuario,
    contra: contra,
    jwt: jwt,
  });

  nuevoProducto.save(function (err) {
    if (!err) {
      res.send("Usuario Agregado Correctamente");
    } else {
      res.send(err);
    }
  });
});

//Validar si usuario existeBD

router.post("/validarusuario", (req, res) => {
    
  ModeloUsuario.find({ nombreusuario: req.body.usuario }, function (error, docs) {
    if (!error) {
      res.send(docs);
     
    } else {
      res.send(error);
      
    }
  });
});
