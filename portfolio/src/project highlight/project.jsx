import React, { useState } from "react";
import image1 from "../assets/AdobeStock_609927726_Preview.jpeg";
import image2 from "../assets/images.jpg";
import "./project_sample.css";

export default function Project_sample() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sample = [
    {
      image: image1,
      discription: `hi this is discription of projec111111
      11111111111111111111111111111111111111111111111111
      111111111111111111111111111111
      111111111111111111111`,
    },
    {
      image: image2,
      discription: `hi this is discription of project 22222222
        222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222
        222222222222222222`,
    },
  ];

  function right() {
    setCurrentIndex((current) =>
      current < sample.length - 1 ? current + 1 : 0
    );
  }

  function left() {
    setCurrentIndex((current) =>
      current > 0 ? current - 1 : sample.length - 1
    );
  }

  return (
    <div className="sample-container">
      <div className="discription-conainer">
        <div className="dis-content">
          <button className="left" onClickCapture={left}>
            👈🏻
          </button>
          <p>{sample[currentIndex].discription}</p>
        </div>
       <p>here insert the buton and adjusst every thing required</p>
      </div>
      <div
        className="image-container"
        style={{ backgroundImage: `url(${sample[currentIndex].image})` }}
      >
        <button onClick={right}>👉🏻</button>
      </div>
    </div>
  );
}
