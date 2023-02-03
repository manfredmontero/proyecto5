import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./Catalogo";
import AgregarProductos from "./AgregarProducto";
import EditarProductos from "./EditarProductos";
import Carrito from "./Carrito";
import Productos from "./Productos";
import AgregarUsuario from "./AgregarUsuario";
import Login from "./Login";
import Carusel from "./carusel";

function menu() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Productos Montero
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="catalogo"
                >
                  Catalogo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="productos"
                >
                  Productos
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="agregarProducto"
                >
                  AgregarProducto
                </a>
              </li>
              <li className="nav-item item-right">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="carrito"
                >
                 <img className="imgLogo" src="https://cdn-icons-png.flaticon.com/512/107/107831.png"></img>
                </a>
              </li>

              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Log In
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Loguearse
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <Login />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Carusel />} exact></Route>
          <Route path="/agregarProducto" element={<AgregarProductos />} exact>
            {" "}
          </Route>
          <Route path="/agregarUsuario" element={<AgregarUsuario />} exact>
            {" "}
          </Route>
          <Route
            path="/editarProducto/:idProducto"
            element={<EditarProductos />}
            exact
          >
            {" "}
          </Route>
          <Route path="/catalogo" element={<Catalogo />} exact>
            {" "}
          </Route>
          <Route path="/productos" element={<Productos />} exact>
            {" "}
          </Route>
          <Route path="/carrito" element={<Carrito />} exact>
            {" "}
          </Route>
          <Route path="/login" element={<Login />} exact>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default menu;
