import { useState } from "react";
import { Button, Offcanvas, Table } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add, clear, deleteFromCart, sub } from "../rtk/Slices/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  // const totalPrice = cart.reduce((acc, product) => {
  //   acc += product.price * product.quantity;
  //   return acc;
  // }, 0);

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="p-4">
      <Container>
        <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Products
            </Link>
          </Nav>
          <Nav>
            <div
              onClick={handleShow}
              className="position-relative mt-sm-3"
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faCartShopping} className="fs-3" />

              {cart.length > 0 && (
                <span
                  style={{
                    width: "30px",
                    height: "30px",
                    textAlign: "center",
                    position: "absolute",
                    top: "-15px",
                    left: "32px",
                  }}
                  className="d-inline-block rounded-circle border border-dark border-3 text-dark"
                >
                  {cart.length}
                </span>
              )}
            </div>

            <Offcanvas
              show={show}
              onHide={handleClose}
              placement="end"
              scroll
              backdrop={false}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Button
                  variant="dark"
                  className="mb-2"
                  onClick={() => dispatch(clear())}
                >
                  Clear
                </Button>
                <div className="mb-2">Total Price: {totalPrice}$</div>
                <div>
                  {cart.map((cart) => {
                    return (
                      <div className="m-2 mb-3" key={cart.id}>
                        <div className="d-flex gap-2 align-items-center border rounded-top">
                          <div>
                            <img
                              src={cart.thumbnail}
                              alt=""
                              className="rounded-top"
                              style={{ width: "100px", height: "100px" }}
                            />
                          </div>
                          <div className="text-center">
                            <div>Price</div>
                            <span>{cart.price * cart.quantity} $</span>
                          </div>
                          <div className="d-flex">
                            <div className="text-center">
                              <div>Quantity</div>
                              {cart.quantity}
                            </div>
                            <Button
                              variant="outline-dark"
                              onClick={() => dispatch(sub(cart))}
                              className="m-2"
                            >
                              -
                            </Button>
                            <Button
                              variant="outline-dark"
                              onClick={() => dispatch(add(cart))}
                              className="m-2"
                            >
                              +
                            </Button>
                          </div>
                        </div>
                        <div className="p-2 border rounded-bottom">
                          <div>Title :{cart.title}</div>
                          <div>Description: </div>
                          {cart.description}
                          <div className="mt-3 d-flex justify-content-end">
                            <Button
                              variant="danger"
                              onClick={() => dispatch(deleteFromCart(cart))}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
