import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselCaption } from 'react-bootstrap';


const Main = ({ data }) => {

  return (
    <main>
      <div class="carousel-caption-custom">
        <img class="logo-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Eo_circle_deep-orange_letter-t.svg/1024px-Eo_circle_deep-orange_letter-t.svg.png" style={{width:"250px"}} />
        <h1>TECHNOSTORE</h1>
      </div>
      <Carousel interval={3000} pause={false} controls={true} indicators={true} className='carousel-custom'>
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
