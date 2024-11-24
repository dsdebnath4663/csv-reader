import React from 'react';
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";


const CustomerInfo = ({ customer }) => {
  return (
    <Card>
      <Card.Header>Customer Details</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item><strong>Name:</strong> {customer.name}</ListGroup.Item>
        <ListGroup.Item><strong>Name:</strong> {customer.name}</ListGroup.Item>
        <ListGroup.Item><strong>Name:</strong> {customer.name}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};
export default CustomerInfo; 