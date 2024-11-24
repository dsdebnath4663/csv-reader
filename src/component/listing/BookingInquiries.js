import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const BookingInquiries = ({ inquiries }) => {
  return (

    <Accordion>
      {inquiries.map((inquiry, index) => (
        <Accordion.Item eventKey={index.toString()} key={inquiry.inquiryId}>
          <Accordion.Header>Inquiry #{index + 1}</Accordion.Header>
          <Accordion.Body>
            <p><strong>Message:</strong>{inquiry.message}</p>
            <Form.Group controlId="response">
              <Form.Label>Response</Form.Label>
              <Form.Control type="text" placeholder="Respond to inquiry" />
            </Form.Group>
            <Button variant="primary" className="mt-2">Send Response</Button>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>


  );
};

export default BookingInquiries;