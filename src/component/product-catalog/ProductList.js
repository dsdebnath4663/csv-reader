import React from 'react';
import { ListGroup } from "react-bootstrap";
import product from './Product';
import Product from './Product';

const ProductList = ({ products }) => {

  return (
    <ListGroup>
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </ListGroup>

  );

};
export default ProductList;