'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import product1 from '../assets/img/product1.png';
import product2 from '../assets/img/product2.png';
import product3 from '../assets/img/product3.png';
import product4 from '../assets/img/product4.png';
import product5 from '../assets/img/product5.png';
import product6 from '../assets/img/product6.png';
import product7 from '../assets/img/product7.png';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Slider() {
  return (
    <div className='categorySlider'>
      <div className="category-heading">
        <h3>Explore Categories</h3>
      </div>
      <Carousel responsive={responsive} infinite={true}>
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
    </Carousel>
        </div>
  )
}

export default Slider;
