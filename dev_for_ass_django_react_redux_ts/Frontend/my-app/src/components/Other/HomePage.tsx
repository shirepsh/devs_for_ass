import React from "react";
import Carousel from "react-bootstrap/Carousel";

function HomePage() {
  function linearGradient(arg0: number, deg: any, red: any, arg3: number, blue: any, arg5: number, green: any, arg7: number): import("csstype").Property.BackgroundColor | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <div> 
      <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/></head>
      <div className="d-flex justify-content-center">
        
      <Carousel className="animate_animated animate_fadeInUp" slide={true} interval={3000} style={{width:'800px', height:'600px'}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Developer.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="vol2.jpeg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="vol4.jpg"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  )
}

export default HomePage