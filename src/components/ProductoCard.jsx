import React, { useState } from "react";
import { Button, Card, Collapse, ListGroup } from "react-bootstrap";

export default function ProductoCard({ producto }) {
  const { category, description, image, price, title, rating } = producto;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Card className="my-4 tamaño fondo-carta">
        <div className="d-flex justify-content-center">
        <Card.Img className="imagen-card mt-4" variant="top" src={image} />
        </div> 
        <Card.Body className="mt-2 fondo-body-carta">
          <Card.Title className="fs-6 text-center mb-2">{title}</Card.Title>
          <ListGroup className="my-2" variant="flush">
            <ListGroup.Item>Categoría : {category}</ListGroup.Item>
            <ListGroup.Item> Precio: {price}</ListGroup.Item>
            <ListGroup.Item>Calificación: {rating.rate}</ListGroup.Item>
            <ListGroup.Item>Stock : {rating.count}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer className="fondo-footer-carta">
          <div className="d-flex justify-content-center" >
            {" "}
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              variant="outline-light"
              
            >
             Detalle
            </Button>
          </div>
          <div>
          <Collapse in={open}>
            <div className="my-2 text-white" id="example-collapse-text">
                {description}
            </div>
          </Collapse>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}
