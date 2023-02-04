import React, { useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function AgregarProductos() {
  //hooks
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [images, setImages] = useState("");

  //esta funcion sirve para agregar un producto a la base de datos
  function agregarProducto() {
    let producto = {
      idProducto: uniqid(),
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      images:images
    };
    console.log(producto);
    axios
      .post("/api/producto/agregarProducto", producto)
      .then((res) => {
        toast.success(res.data)
      })
      .then((err) => {
        console.log(err);
      });
  }
  return (
    <div className="container">
      <div className="row">
        <h1> Agregar un producto</h1>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre producto
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
              Descripcion del producto
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={descripcion}
              onChange={(e) => {
                setDescripcion(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="precio" className="form-label">
              Precio producto
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={precio}
              onChange={(e) => {
                setPrecio(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="precio" className="form-label">
              URL de la imagen
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={images}
              onChange={(e) => {
                setImages(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <button onClick={agregarProducto} className="btn btn-success">
              Guardar Producto
            </button>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default AgregarProductos;
