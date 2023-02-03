import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import AgregarUsuario from "./AgregarUsuario";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState({ correcto: "esto fue correcto" });

  function loguear() {
    const params = {
      usuario: usuario,
      contrasena: contrasena,
    };
    console.log(params);
    console.log(params.usuario);
    axios
      .post("/api/usuario/validarusuario", {
        usuario: params.usuario,
        contra: params.contrasena,
      })
      .then((res) => {
        if (res.data.length === 1) {
          const dataProducto = res.data[0];
          if (dataProducto.contra === params.contrasena) {
            sessionStorage.setItem("user", dataProducto.nombreusuario);
            /*      window.location.reload(false);  */
          } else {
            console.log("incorrecta");
            setMensaje = "prueba";
          }
        } else {
          setMensaje("testing");
          console.log("usuario No encontrado");
        }
      });
  }

  return (
    <div className="d-flex align-items-center justify-content-center w-100">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            required
            className="text-login"
            type="text"
            placeholder="Ingrese su usuario"
            defaultValue={usuario}
            onChange={(e) => {
              setUsuario(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contrasena</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Contrasena"
            defaultValue={contrasena}
            onChange={(e) => {
              setContrasena(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Label defaultValue={mensaje} > </Form.Label>
        <Button variant="primary" onClick={loguear}>
          Ingresar
        </Button>
        <a
          className="btn btn-warning m-4"
          aria-current="page"
          href="agregarUsuario"
        >
          Registrarme
        </a>
      </Form>
      <BrowserRouter>
        <Routes>
          <Route path="/agregarUsuario" element={<AgregarUsuario />} exact>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Login;
