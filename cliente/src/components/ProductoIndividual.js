import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductoIndividual({ producto }) {
  const navegar = useNavigate();

  function borrarProducto(idProducto) {
    axios
      .post("/api/producto/borrarProducto", { producto: idProducto })
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        navegar(0);
      })
      .then((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3">
          <ul className="list-group">
            <strong>
              <li className="list-group-item">{producto.nombre}</li>
            </strong>
            <li className="list-group-item">{producto.descripcion}</li>
            <li className="list-group-item">Precio: {producto.precio}</li>
            <li className="list-group-item"><img className="imagen-productos" src={producto.images}/></li>
          </ul>
          <br />
          <Link to={`/editarProducto/${producto.producto}`}>
            <li className="btn btn-success">Editar</li>
          </Link>

          <button
            onClick={() => {
              borrarProducto(producto.producto);
            }}
            className="btn btn-danger ms-2"
          >
            {" "}
            Borrar
          </button>
          <hr className="mt-4"></hr>
        </div>
      </div>
    </div>
  );
}

export default ProductoIndividual;
