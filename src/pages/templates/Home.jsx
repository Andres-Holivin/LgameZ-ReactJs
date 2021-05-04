import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import img from "../../assets/flaccid-anemone-6203188_1920.jpg";
import img2 from "../../assets/flowers-6206279_1920.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home=()=>{
  return(
    <>
      <div className="flex items-center justify-center">
        <div style={{boxShadow:"10px 10px 5px grey"}} className="my-8 shadow-2xl mx-28">
          <Carousel className="">
            <Carousel.Item interval={1000}>
              <img
                className="w-full h-72"
                src={img}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="w-full h-72"
                src={img}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      
    </>
  )
}
export default Home;