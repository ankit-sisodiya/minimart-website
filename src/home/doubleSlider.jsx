"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tab, Tabs } from "react-bootstrap/";
import product1 from "../assets/img/product1.png";
import { BsHeart } from "react-icons/bs";
import Form from "react-bootstrap/Form";

const DoubleSlider = () => {
  const [key, setKey] = useState("home");

  const settings = {
    dots: true,
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
          dots: true,
          rows: 2
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
                      <img src={product1.src} alt="" />
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
                      <img src={product1.src} alt="" />
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
                      <img src={product1.src} alt="" />
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
                      <img src={product1.src} alt="" />
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
                      <img src={product1.src} alt="" />
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
                      <img src={product1.src} alt="" />
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
              className="mb-3"
            >
              <h2>Trending Products</h2>
              <Tab eventKey="home" title="Featured">
                <div className="tab-section-container">
                  <Slider {...settings}>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Latest">
                <div className="tab-section-container">
                <Slider {...settings}>
                <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="contact" title="Bestseller">
                <div className="tab-section-container">
                  <Slider {...settings}>
                  <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={product1.src} alt="Product Image" />
                        </div>
                        <div className="product-image-detail">
                          <p className="pi-name">Aloo Sev</p>
                          <p className="pi-price">AED 35.00 <span className="pi-cutPrice">38.00</span></p>
                          <div className="cartButtons">
                              <button>Add to Cart</button>
                              <div className="pi-dropdown">
                                  <Form.Select aria-label="Default select example">
                                      <option>1 Kg/Unit</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </Form.Select>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
