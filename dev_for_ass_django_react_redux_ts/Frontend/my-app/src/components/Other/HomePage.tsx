import React from "react";
import Carousel from "react-bootstrap/Carousel";

function HomePage() {
  return (
    <div> 
      <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/></head>
      <div className="d-flex justify-content-center">
      <Carousel className="animate_animated animate_fadeInUp" slide={true} interval={3000} style={{width:'1000px', height:'1000px'}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="grid4s.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: "white" }}>iRetro - Preserve Your Technology</h3>
            <p>Keep your old iPhone, showing off its internal beauty.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="grid4s.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 style={{ color: "white" }}>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="grid4s.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ color: "white" }}>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  )
}

export default HomePage