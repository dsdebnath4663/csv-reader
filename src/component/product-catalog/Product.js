
import React, { useState } from 'react';
import { Collapse, Card, CardBody, CardHeader } from 'react-bootstrap';

const Product = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Card>
        <Card.Header onClick={toggle} style={{ cursor: 'pointer' }}>
          {product.name}
        </Card.Header>
        <Collapse in={isOpen}>
          <Card.Body>
            <p>{product.description}</p>
            {product.categories.map((category, index) => (
              <div key={index}>
                <strong>Category: {category.name}</strong>
                <ul>
                  {category.subcategories.map((sub, subIndex) => (
                    <li key={subIndex}>{sub.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Card.Body>
        </Collapse>
      </Card>
    </div>
  );
};

export default Product;
