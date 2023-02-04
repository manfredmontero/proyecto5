import React from "react";
import { Form, Button } from "react-bootstrap";

function Carrito({carrito}) {
const carro = carrito
console.log(carro);
  function pagar() {

  }
  return (
    <div className="container">
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
        <a
          className="btn btn-warning m-4"
          aria-current="page"   
        >
          Vaciar Carrito
        </a>
        
      </Form>
    </div>
  );
}

export default Carrito;
