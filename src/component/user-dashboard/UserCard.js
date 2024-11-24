import { Badge, ButtonGroup, Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CarouselComponent from './CarouselComponent';

function UserCard({ user }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.name}
          <h6><Badge bg="secondary">{user.role}</Badge></h6>
        </Card.Title>
        <Card.Text>
          Age: {user.age}
        </Card.Text>
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary">Left</Button>
          <Button variant="secondary">Middle</Button>
        </ButtonGroup>
      </Card.Body>
      {/* <Card.Img variant="top" src={user.images[0]} /> */}
      <CarouselComponent images={user.images} />


    </Card>
  );
}

export default UserCard;