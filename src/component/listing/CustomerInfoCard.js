import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Popover from 'react-bootstrap/Popover';

const CustomerInfoCard = ({ customer }) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Customer Actions</Popover.Header>
      <Popover.Body>
        You can <strong>edit</strong> or <strong>remove</strong> this customer.
      </Popover.Body>
    </Popover>
  );

  return (
    <Card>
      <Card.Header>Customer Details</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item><strong>Name:</strong> {customer.name}</ListGroup.Item>
        <ListGroup.Item><strong>Email:</strong> {customer.email}</ListGroup.Item>
        <ListGroup.Item><strong>Phone:</strong> {customer.phone}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <OverlayTrigger
          overlay={<Tooltip id="tooltip-disabled">Contact Customer</Tooltip>}
        >
          <span className="d-inline-block">
            <Button variant="primary" disabled={!customer.phone}>
              Call Customer
            </Button>
          </span>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="secondary" className="ms-3">
            Actions
          </Button>
        </OverlayTrigger>
      </Card.Body>
    </Card>
  );
};
  
export default CustomerInfoCard;
