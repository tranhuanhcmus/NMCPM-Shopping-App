import styled from "styled-components";

import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filtersProducts, setFiltersProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFiltersProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFiltersProducts((prev) =>
        [...prev].sort((a, b) => a.createAt - b.createAt)
      );
    } else if (sort === "asc") {
      setFiltersProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFiltersProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filtersProducts.map((item) => <Product item={item} key={item._id} />)
        : products.map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
