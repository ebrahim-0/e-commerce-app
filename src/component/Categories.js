import { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../rtk/Slices/CategoriesSlice";
import {
  getProducts,
  getProductsCategories,
  searchProduct,
} from "../rtk/Slices/ProductSlice";

function Categories() {
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <Container>
      <Row>
        <Form.Group as={Col} className="m-3 w-50">
          <Form.Select
            onChange={(e) => {
              e.target.value === "All"
                ? dispatch(getProducts())
                : dispatch(getProductsCategories(e.target.value));
            }}
          >
            <option>All</option>
            {categories.map((category) => (
              <option key={categories.indexOf(category)}>{category}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} className="m-3 w-50">
          <Form.Control
            type="text"
            placeholder="Search For Product"
            onChange={(e) => {
              dispatch(searchProduct(e.target.value));
            }}
          />
        </Form.Group>
      </Row>
    </Container>
  );
}

export default Categories;
