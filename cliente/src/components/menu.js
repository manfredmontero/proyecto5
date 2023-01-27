import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./Catalogo"
import AgregarProductos from "./AgregarProducto";
import EditarProductos from "./EditarProductos";
import Carrito from './Carrito'
import Productos from './Productos'

function menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            RutinasMontero
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
                <a className="nav-link active" aria-current="page" href="catalogo">
                  Catalogo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="productos">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="carrito">
                  Carrito
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarProducto">AgregarProducto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<menu />} exact></Route>
          <Route path="/agregarProducto" element={<AgregarProductos />} exact>
            {" "}
          </Route>
          <Route path="/editarProducto/:idProducto" element={<EditarProductos />} exact>
            {" "}
          </Route>
          <Route path="/carrito" element={<Carrito />} exact>
            {" "}
          </Route>
          <Route path="/catalogo" element={<Catalogo />} exact>
            {" "}
          </Route>
          <Route path="/productos" element={<Productos />} exact>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default menu;
