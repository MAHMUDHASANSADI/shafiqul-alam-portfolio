import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="assets/images/banner14.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="assets/images/banner7.jpg"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="assets/images/banner8.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  );
}

export default Banner;