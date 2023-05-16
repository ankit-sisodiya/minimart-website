"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsHeart } from "react-icons/bs";
import product1 from "../assets/img/product1.png";
import Form from "react-bootstrap/Form";

const SpecialProducts = () => {
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
    <div>
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
          <div className="col-md-9">
            <div className="specialProduct-rightSection">
              <div className="specialProduct-heading">
                <h3>Special Products</h3>
              </div>
              <div className="specialProduct-slider">
                <Slider {...settings}>
                  <div>
                    <div className="slider-products">
                      <div className="row">
                        <div className="col-md-4 pr-0 d-flex">
                          <div className="special-product-image">
                            <img src={product1.src} alt="Product Image" />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="special-product-detail">
                            <span className="sp-icon">
                              <BsHeart />
                            </span>
                            <p className="sp-name">Ratlami Sev</p>
                            <span className="best-deal-button">Best deal</span>
                            <p className="sp-price">
                              AED 35.00{" "}
                              <span className="sp-cutPrice">38.00</span>
                            </p>
                            <div className="sp-buttons">
                              <div className="row">
                                <div className="col-md-7">
                                  <button className="sp-cartButton">
                                    Add to Cart
                                  </button>
                                </div>
                                <div className="col-md-5">
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
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="slider-products">
                      <div className="row">
                        <div className="col-md-4 pr-0 d-flex">
                          <div className="special-product-image">
                            <img src={product1.src} alt="Product Image" />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="special-product-detail">
                            <span className="sp-icon">
                              <BsHeart />
                            </span>
                            <p className="sp-name">Ratlami Sev</p>
                            <span className="best-deal-button">Best deal</span>
                            <p className="sp-price">
                              AED 35.00{" "}
                              <span className="sp-cutPrice">38.00</span>
                            </p>
                            <div className="sp-buttons">
                              <div className="row">
                                <div className="col-md-7">
                                  <button className="sp-cartButton">
                                    Add to Cart
                                  </button>
                                </div>
                                <div className="col-md-5">
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
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="slider-products">
                      <div className="row">
                        <div className="col-md-4 pr-0 d-flex">
                          <div className="special-product-image">
                            <img src={product1.src} alt="Product Image" />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="special-product-detail">
                            <span className="sp-icon">
                              <BsHeart />
                            </span>
                            <p className="sp-name">Ratlami Sev</p>
                            <span className="best-deal-button">Best deal</span>
                            <p className="sp-price">
                              AED 35.00{" "}
                              <span className="sp-cutPrice">38.00</span>
                            </p>
                            <div className="sp-buttons">
                              <div className="row">
                                <div className="col-md-7">
                                  <button className="sp-cartButton">
                                    Add to Cart
                                  </button>
                                </div>
                                <div className="col-md-5">
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
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="slider-products">
                      <div className="row">
                        <div className="col-md-4 pr-0 d-flex">
                          <div className="special-product-image">
                            <img src={product1.src} alt="Product Image" />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="special-product-detail">
                            <span className="sp-icon">
                              <BsHeart />
                            </span>
                            <p className="sp-name">Ratlami Sev</p>
                            <span className="best-deal-button">Best deal</span>
                            <p className="sp-price">
                              AED 35.00{" "}
                              <span className="sp-cutPrice">38.00</span>
                            </p>
                            <div className="sp-buttons">
                              <div className="row">
                                <div className="col-md-7">
                                  <button className="sp-cartButton">
                                    Add to Cart
                                  </button>
                                </div>
                                <div className="col-md-5">
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
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="slider-products">
                      <div className="row">
                        <div className="col-md-4 pr-0 d-flex">
                          <div className="special-product-image">
                            <img src={product1.src} alt="Product Image" />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="special-product-detail">
                            <span className="sp-icon">
                              <BsHeart />
                            </span>
                            <p className="sp-name">Ratlami Sev</p>
                            <span className="best-deal-button">Best deal</span>
                            <p className="sp-price">
                              AED 35.00{" "}
                              <span className="sp-cutPrice">38.00</span>
                            </p>
                            <div className="sp-buttons">
                              <div className="row">
                                <div className="col-md-7">
                                  <button className="sp-cartButton">
                                    Add to Cart
                                  </button>
                                </div>
                                <div className="col-md-5">
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
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="slider-products">
                      <div className="row">
                        <div className="col-md-4 pr-0 d-flex">
                          <div className="special-product-image">
                            <img src={product1.src} alt="Product Image" />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="special-product-detail">
                            <span className="sp-icon">
                              <BsHeart />
                            </span>
                            <p className="sp-name">Ratlami Sev</p>
                            <span className="best-deal-button">Best deal</span>
                            <p className="sp-price">
                              AED 35.00{" "}
                              <span className="sp-cutPrice">38.00</span>
                            </p>
                            <div className="sp-buttons">
                              <div className="row">
                                <div className="col-md-7">
                                  <button className="sp-cartButton">
                                    Add to Cart
                                  </button>
                                </div>
                                <div className="col-md-5">
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
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="slider-products">
                      <div className="row">
                        <div className="col-md-4 pr-0 d-flex">
                          <div className="special-product-image">
                            <img src={product1.src} alt="Product Image" />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="special-product-detail">
                            <span className="sp-icon">
                              <BsHeart />
                            </span>
                            <p className="sp-name">Ratlami Sev</p>
                            <span className="best-deal-button">Best deal</span>
                            <p className="sp-price">
                              AED 35.00{" "}
                              <span className="sp-cutPrice">38.00</span>
                            </p>
                            <div className="sp-buttons">
                              <div className="row">
                                <div className="col-md-7">
                                  <button className="sp-cartButton">
                                    Add to Cart
                                  </button>
                                </div>
                                <div className="col-md-5">
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
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="slider-products">
                      <div className="row">
                        <div className="col-md-4 pr-0 d-flex">
                          <div className="special-product-image">
                            <img src={product1.src} alt="Product Image" />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="special-product-detail">
                            <span className="sp-icon">
                              <BsHeart />
                            </span>
                            <p className="sp-name">Ratlami Sev</p>
                            <span className="best-deal-button">Best deal</span>
                            <p className="sp-price">
                              AED 35.00{" "}
                              <span className="sp-cutPrice">38.00</span>
                            </p>
                            <div className="sp-buttons">
                              <div className="row">
                                <div className="col-md-7">
                                  <button className="sp-cartButton">
                                    Add to Cart
                                  </button>
                                </div>
                                <div className="col-md-5">
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
                      </div>
                    </div>
                  </div>
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
