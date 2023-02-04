import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


function CatalogoIndividual({ producto }) {

  function agregarProductoCarrito() {
    let carrito = {
      producto: producto.producto,
      nombreusuario: sessionStorage.getItem("user"),
      precio: producto.precio,
    };

    axios
      .post("/api/carrito/agregarproductocarrito", carrito)
      .then((res) => {
        toast.success(res.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .then((err) => {
        console.log(err);
      });
  }

  return (
    <div className="m-2">
      <div className="card cardModified p-2">
        <div className="card-body card-center">
          <p className="hidden"> {producto.producto} </p>
          <h4 className="card-header">{producto.nombre}</h4>
          <br />
          <p className="card-text">{producto.descripcion}</p>
          <p className="card-text">Precio: ${producto.precio}</p>
          <img className="imagen-productos" src={producto.images} />
          <br />
          <br />
          <button
            className="btn btn-info"
            type="submit"
            onClick={agregarProductoCarrito}
          >
            Agregar al Carrito
          </button>
        </div>
        <ToastContainer />
      </div>
      <br />
    </div>
  );
}

export default CatalogoIndividual;
