import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const Main = ({ data }) => {

  return (
    <main>
      <Carousel interval={3000} pause={false} controls={true} indicators={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg"
            alt="First slide"
            style={{ height: '90vh', objectFit: 'cover' }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg"
            alt="Second slide"
            style={{ height: '90vh', objectFit: 'cover' }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
            alt="Third slide"
            style={{ height: '90vh', objectFit: 'cover' }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
            alt="Third slide"
            style={{ height: '90vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>
    </main>
  )
}

export default Main
