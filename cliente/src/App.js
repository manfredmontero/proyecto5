import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./components/Productos";
import AgregarProductos from "./components/AgregarProducto";
import EditarProductos from "./components/EditarProductos";
import Menu from "./components/menu";

function App() {
  return (
    <div className="App">
      <h1>CRUD para agregar un producto</h1>
      <Menu />

    </div>
  );
}

export default App;
