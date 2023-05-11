"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    arrow:true,
  };

  return (
    <div>
      <div className="testimonial-section">
        <Slider {...settings}>
          <div>hello1</div>
          <div>hello2</div>
          <div>hello3</div>
          <div>hello4</div>
          <div>hello5</div>
          <div>hello6</div>
          <div>hello7</div>
          <div>hello8</div>
          <div>hello1</div>
          <div>hello2</div>
          <div>hello3</div>
          <div>hello4</div>
          <div>hello5</div>
          <div>hello6</div>
          <div>hello7</div>
          <div>hello8</div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
