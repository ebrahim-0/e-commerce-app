import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../rtk/Slices/ProductSlice";
import { addToCart } from "../rtk/Slices/CartSlice";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Loading.css";

function Products() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Container>
      <Row>
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <Col key={product.id} className="d-flex justify-content-center">
                <Card style={{ width: "18rem", margin: "8px" }}>
                  <Card.Img
                    style={{ height: "300px", padding: "5px" }}
                    variant="top"
                    src={product.thumbnail}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.price} $</Card.Text>
                    <Button
                      variant="dark"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add to cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <div className="loading">
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </Row>
    </Container>
  );
}

export default Products;
