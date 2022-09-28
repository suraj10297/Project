import React from "react";
import { UncontrolledCarousel } from "reactstrap";

//import img from Images/images.jpg

const items = [
  {
    src: "https://wallpaperaccess.com/full/804850.jpg",
    altText: "Slide 1",
    caption: "NO PAIN NO GAIN",
    header: "Metal Muscle",
    key: "1",
  },
  
  {
    src: "https://wallpapercave.com/dwp2x/wp2639536.jpg",
    altText: "Slide 2",
    caption: "NO PAIN NO GAIN",
    header: "Metal Muscle",
    key: "2",
  },
  {
    src: "https://wallpaperaccess.com/full/804838.jpg",
    altText: "Slide 3",
    caption: "NO PAIN NO GAIN",
    header: "Metal Muscle",
    key: "3",
  },
];

const SliderComponent = () => <UncontrolledCarousel items={items} />;

export default SliderComponent;
