import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const BookingAccordion = ({ bookings }) => {
  return (
    <Accordion defaultActiveKey="0">
      {bookings.map((booking, index) => (
        <Accordion.Item eventKey={index.toString()} key={booking.bookingId}>
          <Accordion.Header>
            {booking.packageName}
            <Badge bg={booking.status === 'confirmed' ? 'success' : booking.status === 'pending' ? 'warning' : 'danger'} className="ms-2">
              {booking.status}
            </Badge>
          </Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col md={4}>
                <h5>Customer Details</h5>
                <p>Name: {booking.customer.name}</p>
                <p>Email: {booking.customer.email}</p>
                <p>Phone: {booking.customer.phone}</p>
              </Col>
              <Col md={8}>
                <h5>Booking Information</h5>
                <p>Booking Date: {booking.bookingDate}</p>
                <ListGroup className="mb-3">
                  {booking.inquiries.length > 0 && (
                    <ListGroup.Item>
                      <strong>Inquiry:</strong> {booking.inquiries[0].message}
                    </ListGroup.Item>
                  )}
                  {booking.modifications.length > 0 && (
                    <ListGroup.Item>
                      <strong>Modification:</strong> {booking.modifications[1].modificationType} - {booking.modifications[1].status}
                    </ListGroup.Item>
                  )}
                </ListGroup>
                <Button variant="primary" className="me-2">Respond to Inquiry</Button>
                <Button variant="danger">Cancel Booking</Button>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default BookingAccordion;
