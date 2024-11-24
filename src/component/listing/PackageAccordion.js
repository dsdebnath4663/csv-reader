import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const PackageAccordion = ({ packages }) => {
  return (
    <Accordion defaultActiveKey="0">
      {packages.map((pkg, index) => (
        <Accordion.Item eventKey={index.toString()} key={pkg.packageId}>
          <Accordion.Header>
            {pkg.packageName} <Badge bg="info" className="ms-2">{pkg.cost.currency} {pkg.cost.amount}</Badge>
          </Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col md={4}>
                <Image src={pkg.images[0]} thumbnail alt="Package image" />

              </Col>
              <Col md={8}>
                <h5>Destinations</h5>
                <ListGroup>
                  {pkg.destinations.map((destination, idx) => (
                    <ListGroup.Item key={idx}>
                      {destination.city}, {destination.country} - {destination.duration}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <h5 className="mt-4">Itinerary</h5>
                <ListGroup>
                  {pkg.itinerary.map((day, idx) => (
                    <ListGroup.Item key={idx}>
                      Day {day.day}: {day.description}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <h5 className="mt-4">Available Dates</h5>
                <p>{pkg.availableDates.join(", ")}</p>
                <Button variant="primary" className="me-2">Update Package</Button>
                <Button variant="danger">Delete Package</Button>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      ))};

    </Accordion>
  );
};
export default PackageAccordion;
