import React, { useState } from "react";
import uniqid from "uniqid";
import axios from "axios";

function AgregarUsuario() {
  //hooks
 
  const [identificador, setidentificador] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [nombreusuario, setNombreusuario] = useState("");
  const [contra, setContra] = useState("");
  const [jwt, setJwt] = useState("");


  //esta funcion sirve para agregar un producto a la base de datos
  function agregarUsuario() {
    let usuario = {
        identificador:identificador,
        nombre:nombre,
        apellido:apellido,
        nombreusuario:nombreusuario,
        contra:contra,
        jwt:"jwt"
    };
    console.log(usuario);
    axios
      .post("/api/usuario/agregarUsuario", usuario)
      .then((res) => {
        alert(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }
  return (
    <div className="container">
      <div className="row">
        <h1> Agregar un Usuario</h1>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
            Identificador
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={nombre}
              onChange={(e) => {
                setidentificador(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre De la persona
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">
              Apellido de la Persona
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={apellido}
              onChange={(e) => {
                setApellido(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="nombreusuario" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={nombreusuario}
              onChange={(e) => {
                setNombreusuario(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="precio" className="form-label">
              Contrasena
            </label>
            <input
              type="password"
              className="form-control"
              defaultValue={contra}
              onChange={(e) => {
                setContra(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <button onClick={agregarUsuario} className="btn btn-success">
              Guardar Usuario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgregarUsuario;
