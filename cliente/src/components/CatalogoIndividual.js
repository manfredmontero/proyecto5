import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CatalogoIndividual({ producto }) {
  //const navegar = useNavigate();

  return (
    <div className="container">
      <div className="card cardModified ">
        <div className="card-body ">
          <h4 className="card-header">{producto.nombre}</h4>
          <p className="card-text">{producto.descripcion}</p>
          <p className="card-text">Precio: ${producto.precio}</p>
          <a href="#" className="btn btn-info">
            Agregar al Carrito
          </a>
        </div>
      </div>
      <br />
    </div>
  );
}

export default CatalogoIndividual;
