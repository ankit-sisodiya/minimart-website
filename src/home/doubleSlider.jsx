"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tab, Tabs } from "react-bootstrap/";
import product1 from "../assets/img/product1.png";
import { BsHeart } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import Image from "next/image";
import CommonCard from "@app/components/common-card";

const DoubleSlider = () => {
  const [key, setKey] = useState("home");

  const similarSection = [1, 2, 3, 4, 5, 6, 7, 8];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div>
      <div className="double-slider-section">
        <div className="ds-heading">
          <h2>Trending Products</h2>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="product-sidebar">
              <div className="sidebar-heading">
                <h2>New Products</h2>
              </div>
              <div className="sidebar-below-products">
                <div className="product-detail">
                  <div className="row">
                    <div className="col-md-4">
                      <Image
                        src={product1.src}
                        alt=""
                        width={500}
                        height={80}
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
                        width={500}
                        height={80}
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
                        width={500}
                        height={80}
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
                        width={500}
                        height={80}
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
                        width={500}
                        height={80}
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
                        width={500}
                        height={80}
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
          <div className="col-md-9 tab-contents">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-1"
            >
              <h2>Trending Products</h2>
              <Tab eventKey="home" title="Featured">
                <div className="tab-section-container">
                  <Slider {...settings}>
                    {similarSection.map((x, i) => {
                      return (
                        <div key={i} className="col-md-3">
                          <CommonCard />
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Latest">
                <div className="tab-section-container">
                  <Slider {...settings}>
                    {similarSection.map((x, i) => {
                      return (
                        <div key={i} className="col-md-3">
                          <CommonCard />
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="contact" title="Bestseller">
                <div className="tab-section-container">
                  <Slider {...settings}>
                    {similarSection.map((x, i) => {
                      return (
                        <div key={i} className="col-md-3">
                          <CommonCard />
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleSlider;
