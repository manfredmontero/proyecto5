import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CatalogoIndividual({ producto }) {
  //const navegar = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">{producto.descripcion}</p>
          <p className="card-text">{producto.precio}</p>
          <a href="#" className="btn btn-primary">
            Agregar al Carrito
          </a>
        </div>
      </div>
    </div>
  );
}

export default CatalogoIndividual;
