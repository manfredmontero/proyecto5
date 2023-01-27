import React from "react";
import { Link } from "react-router-dom";

function ProductoIndividual({ producto }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3">
          <ul className="list-group">
            <li key={producto._id} className="list-group-item">
              {producto.nombre}
            </li>
            <li key={producto._id} className="list-group-item">
              {producto.descripcion}
            </li>
            <li key={producto._id} className="list-group-item">
              {producto.precio}
            </li>
          </ul>
          <Link to={`/editarProducto/${producto.producto}`}>
            <li className="btn btn-success">Editar</li>
          </Link>

          <button className="btn btn-danger"> Borrar</button>
          <hr className="mt-4"></hr>
        </div>
      </div>
    </div>
  );
}

export default ProductoIndividual;
