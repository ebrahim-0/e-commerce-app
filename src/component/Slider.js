import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../rtk/Slices/ProductSlice";

function Slider() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {products.length > 0 ? (
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              style={{
                height: "650px",
              }}
              className="d-block w-100"
              src={
                products[Math.floor(Math.random() * products.length)].images[
                  Math.floor(Math.random() * 3)
                ]
              }
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                height: "650px",
              }}
              className="d-block w-100"
              src={
                products[Math.floor(Math.random() * products.length)].images[
                  Math.floor(Math.random() * 3)
                ]
              }
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                height: "650px",
              }}
              className="d-block w-100"
              src={
                products[Math.floor(Math.random() * products.length)].images[
                  Math.floor(Math.random() * 3)
                ]
              }
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      ) : (
        <p>API did not provided any product, try again.</p>
      )}
    </>
  );
}

export default Slider;
