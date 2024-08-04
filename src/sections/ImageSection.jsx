import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import hero1 from "../assets/images/hero1.webp";
import hero2 from "../assets/images/hero2.webp";
import hero3 from "../assets/images/hero3.webp";
import "./Carousel.css";

const ImageSection = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={hero1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hero2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hero3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageSection;
