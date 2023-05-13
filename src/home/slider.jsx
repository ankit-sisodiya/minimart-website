'use client'
import React from 'react'
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import product1 from '../assets/img/product1.png';
import product2 from '../assets/img/product2.png';
import product3 from '../assets/img/product3.png';
import product4 from '../assets/img/product4.png';
import product5 from '../assets/img/product5.png';
import product6 from '../assets/img/product6.png';
import product7 from '../assets/img/product7.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    rows: 1,
    arrow: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          rows: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          dots: false,
        }
      }
    ]
  };


  return (
    <div className='categorySlider'>
      <div className="category-heading">
        <h3>Explore Categories</h3>
      </div>
       <Slider {...settings}>
      <div>
        <div className="card-background">
            <div className="card-image">
              <img src={product1.src} alt="" />
            </div>
            <span>Fresh Product</span>
        </div>
      </div>
      <div>
        <div className="card-background">
            <div className="card-image">
              <img src={product2.src} alt="" />
            </div>
            <span>Fresh Product</span>
        </div>
      </div>
      <div>
        <div className="card-background">
            <div className="card-image">
              <img src={product3.src} alt="" />
            </div>
            <span>Fresh Product</span>
        </div>
      </div>
      <div>
        <div className="card-background">
            <div className="card-image">
              <img src={product4.src} alt="" />
            </div>
            <span>Fresh Product</span>
        </div>
      </div>
      <div>
        <div className="card-background">
            <div className="card-image">
              <img src={product5.src} alt="" />
            </div>
            <span>Fresh Product</span>
        </div>
      </div>
      <div>
        <div className="card-background">
            <div className="card-image">
              <img src={product6.src} alt="" />
            </div>
            <span>Fresh Product</span>
        </div>
      </div>
      <div>
        <div className="card-background">
            <div className="card-image">
              <img src={product7.src} alt="" />
            </div>
            <span>Fresh Product</span>
        </div>
      </div>
      <div>
        <div className="card-background">
            <div className="card-image">
              <img src={product7.src} alt="" />
            </div>
            <span>Fresh Product</span>
        </div>
      </div>
      <div>
        <div className="card-background">
            <div className="card-image">
              <img src={product7.src} alt="" />
            </div>
            <span>Fresh Product</span>
        </div>
      </div>
      <div>
        <div className="card-background">
            <div className="card-image">
              <img src={product7.src} alt="" />
            </div>
            <span>Fresh Product</span>
        </div>
      </div>
      </Slider>
        </div>
  )
}

export default Sliders;
