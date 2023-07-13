"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsHeart } from "react-icons/bs";
import product1 from "../assets/img/product1.png";

import Image from "next/image";
import VerticalCard from "@app/components/vertical-card";

const SpecialProducts = () => {
  const similarSection = [1, 2, 3, 4, 5, 6, 7, 8];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
    rows: 2,
    arrow: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          rows: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="mt-5">
      <div className="specialProduct-section">
        <div className="row">
          <div className="col-md-3">
            <div className="product-sidebar">
              <div className="sidebar-heading">
                <h2>Daily Best Sells</h2>
              </div>
              <div className="sidebar-below-products">
                <div className="product-detail">
                  <div className="row">
                    <div className="col-md-4">
                      <Image
                        src={product1.src}
                        alt=""
                        height={80}
                        width={100}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="product-description">
                        <p>Uttapam</p>
                        <span> AED 13.00</span>
                        <button>Add To Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-detail">
                  <div className="row">
                    <div className="col-md-4">
                      <Image
                        src={product1.src}
                        alt=""
                        height={80}
                        width={100}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="product-description">
                        <p>Uttapam</p>
                        <span> AED 13.00</span>
                        <button>Add To Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-detail">
                  <div className="row">
                    <div className="col-md-4">
                      <Image
                        src={product1.src}
                        alt=""
                        height={80}
                        width={100}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="product-description">
                        <p>Uttapam</p>
                        <span> AED 13.00</span>
                        <button>Add To Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-detail">
                  <div className="row">
                    <div className="col-md-4">
                      <Image
                        src={product1.src}
                        alt=""
                        height={80}
                        width={100}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="product-description">
                        <p>Uttapam</p>
                        <span> AED 13.00</span>
                        <button>Add To Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="specialProduct-rightSection">
              <div className="specialProduct-heading">
                <h3>Special Products</h3>
              </div>
              <div className="specialProduct-slider">
                <Slider {...settings}>
                  {similarSection.map((x, i) => {
                    return (
                      <div key={i} className="col-md-3">
                        <VerticalCard/>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProducts;
