import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Carrito({ carrito }) {
  const carro = carrito;
  console.log(carro);
  function pagar() {}

  function vaciarCarrito() {
    axios
      .post("/api/carrito/vaciarcarrito", {
        nombreusuario: sessionStorage.getItem("user"),
      })
      .then((res) => {
        setTimeout(window.location.reload(false), 5000);
      })
      .then((err) => {
        console.log(err);
      });
  }

  return (
    <div className="d-flex align-items-center justify-content-center w-100">
      <Form>
        <Form.Group className="mb-3" controlId="FormCantidad">
          <Form.Label>Cantidad de Articulos: {carrito.cantidad} </Form.Label>
        </Form.Group>

        <Form.Group className="mb-3" controlId="FormTotalPrecio">
          <Form.Label>Total a Pagar: ${carrito.precioTotal}</Form.Label>
        </Form.Group>

        <Button variant="primary" onClick={pagar}>
          Pagar
        </Button>

        <Button
          variant="primary"
          className="btn btn-warning m-4"
          onClick={vaciarCarrito}
        >
          Vaciar Carrito
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default Carrito;
