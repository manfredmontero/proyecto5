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
  const catalogoProductos = dataProductos.map((producto) => {
    return (
      <div>
        <CatalogoIndividual producto={producto} />
      </div>
    );
  });

  return (
    <div className=" container d-flex flex-wrap align-items-center">
      <h2 className="">Catalogo de productos disponibles</h2>
      <div className=" container d-flex flex-wrap align-items-center ">
        {catalogoProductos}
      </div>
    </div>
  );
}

export default Catalogo;
