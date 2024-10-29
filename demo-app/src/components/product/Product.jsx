import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Product = () => {
  const [products, getProducts] = useState([]);

  useState(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  const cards = products.map((product) => (
    <div className="mt-4 col-md-3 d-flex justify-content-center">
      <Card style={{ width: "18rem", height: "500px", marginBottom:"40px" }}>
        <div className="text-center p-3">
          <Card.Img
            variant="top"
            style={{ width: "200px", height: "230px" }}
            className=""
            src={product.image}
          />
        </div>

        <Card.Body>
          <div style={{height:"70px", overflow: "hidden"}}>
            <Card.Title>{product.title}</Card.Title>
          </div>

          <Card.Text style={{ position: "absolute", bottom: "80px" }}>
            ${product.price}
          </Card.Text>
          <Button
            variant="primary"
            style={{ position: "absolute", bottom: "30px" }}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <div>
      <h1 className="my-4 d-flex justify-content-center">Product Dashboard</h1>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
