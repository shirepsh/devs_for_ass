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
            src="vol3.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 style={{ color: "black" }}>Juniors? <br/><br/> Come and develop your experience by volunteering in our various associations </h4>
            {/* <p style={{ color: "yellow" , backgroundColor: 'black'}}>Come and develop your experience by volunteering in our various associations</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="vol4.jpg"
            alt=""
          />

          <Carousel.Caption>
          <h4 style={{ color: "black" }}>Seniors? <br/><br/> Let's donate to the various associations in the country in the thing that you are the best at! </h4>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="vol2.jpeg"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  )
}

export default HomePage