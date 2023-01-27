import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductoIndividual from "./ProductoIndividual";

function Productos() {
  const [dataProductos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("api/producto/obtenerProductos")
      .then((res) => {
        console.log(res);
        setProductos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //mapear lista de usuarios en objeto de productos
  const listaProductos = dataProductos.map((producto) => {
    return (
      <div>
        <ProductoIndividual producto={producto} />
      </div>
    );
  });

  return (
    <div>
      <h2>Lista de productos</h2>
      {listaProductos}
    </div>
  );
}

export default Productos;
