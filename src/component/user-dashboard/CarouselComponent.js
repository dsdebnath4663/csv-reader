import { Card, Carousel } from "react-bootstrap";

const CarouselComponent = ({ images }) => {

  return (
    <>
      <Carousel>
        {
          images.map((img, index) => (
            <Carousel.Item key={index}>
              <Card.Img variant="top" src={img} alt={`Slide ${index}`} />
            </Carousel.Item>
          ))
        }
      </Carousel>
    </>
  )
}

export default CarouselComponent;