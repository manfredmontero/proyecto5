import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
//import axios from "axios";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

function EditarProductos() {
  const navegar = useNavigate()
  const params = useParams();
  //hooks
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");

  useEffect(() => {
    console.log(params.idProducto);
    axios
      .post("/api/producto/obtenerDataProducto", {
        idProducto: params.idProducto,
      })
      .then((res) => {
        //setNombre = res.data.nombre

        console.log(res.data);
        const dataProducto = res.data[0];
        setNombre(dataProducto.nombre);
        setDescripcion(dataProducto.descripcion);
        setPrecio(dataProducto.precio);
      });
  }, []);

  function editarProducto() {
    let producto = {
      idProducto: params.idProducto,
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
    };
    // console.log(idProducto);
    axios
      .post("/api/producto/actualizarProducto", producto)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        navegar(0)
      })
      .then((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <h2>Editar un producto</h2>
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
            <button onClick={editarProducto} className="btn btn-success">
                Actualizar Producto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditarProductos;
