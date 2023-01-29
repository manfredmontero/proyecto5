import axios from "axios";
import React, { useEffect, useState } from "react";
import CatalogoIndividual from "./CatalogoIndividual";

function Catalogo({ producto }) {
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
        <CatalogoIndividual producto={producto} />
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

export default Catalogo;
