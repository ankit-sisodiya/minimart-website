"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tab, Tabs } from "react-bootstrap/";
import product1 from "../assets/img/product1.png";
import { BsHeart, BsStar } from "react-icons/bs";
import ProductImg from "../assets/img/product/product.png";
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
  };

  return (
    <div>
      <div className="double-slider-section">
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
              </div>
            </div>
          </div>
          <div className="col-md-9">
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
                      <div className="listingCard">
                        <div className="offer">
                          <span>Best Deal</span>
                          <button className="btn btn-group">
                            <BsHeart />
                          </button>
                        </div>
                        <div className="cardDetail">
                          <img src={ProductImg.src} />
                          <h5>Grapes Red Flame</h5>
                          <div className="priceDetail">
                            <p>
                              AED 35.00 &nbsp;<span>38.00</span>
                            </p>
                            <div className="starRating">
                              <BsStar
                                style={{ color: "#FFCE00", fill: "#FFCE00" }}
                              />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                            </div>
                          </div>
                          <div className="cardBtn">
                            <div className="row">
                              <div className="col-md-6">
                                <button className="btn btn-group addCart">
                                  Add to Cart
                                </button>
                              </div>
                              <div className="col-md-6">
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
                    <div className="card-boxes">
                      <div className="listingCard">
                        <div className="offer">
                          <span>Best Deal</span>
                          <button className="btn btn-group">
                            <BsHeart />
                          </button>
                        </div>
                        <div className="cardDetail">
                          <img src={ProductImg.src} />
                          <h5>Grapes Red Flame</h5>
                          <div className="priceDetail">
                            <p>
                              AED 35.00 &nbsp;<span>38.00</span>
                            </p>
                            <div className="starRating">
                              <BsStar
                                style={{ color: "#FFCE00", fill: "#FFCE00" }}
                              />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                            </div>
                          </div>
                          <div className="cardBtn">
                            <div className="row">
                              <div className="col-md-6">
                                <button className="btn btn-group addCart">
                                  Add to Cart
                                </button>
                              </div>
                              <div className="col-md-6">
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
                    <div className="card-boxes">
                      <div className="listingCard">
                        <div className="offer">
                          <span>Best Deal</span>
                          <button className="btn btn-group">
                            <BsHeart />
                          </button>
                        </div>
                        <div className="cardDetail">
                          <img src={ProductImg.src} />
                          <h5>Grapes Red Flame</h5>
                          <div className="priceDetail">
                            <p>
                              AED 35.00 &nbsp;<span>38.00</span>
                            </p>
                            <div className="starRating">
                              <BsStar
                                style={{ color: "#FFCE00", fill: "#FFCE00" }}
                              />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                            </div>
                          </div>
                          <div className="cardBtn">
                            <div className="row">
                              <div className="col-md-6">
                                <button className="btn btn-group addCart">
                                  Add to Cart
                                </button>
                              </div>
                              <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                            <div className="offer">
                            <span>Best Deal</span>
                            <button className="btn btn-group">
                                <BsHeart />
                            </button>
                            </div>
                            <div className="cardDetail">
                            <img src={ProductImg.src} />
                            <h5>Grapes Red Flame</h5>
                            <div className="priceDetail">
                                <p>
                                AED 35.00 &nbsp;<span>38.00</span>
                                </p>
                                <div className="starRating">
                                <BsStar
                                    style={{ color: "#FFCE00", fill: "#FFCE00" }}
                                />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                            </div>
                            <div className="cardBtn">
                                <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-group addCart">
                                    Add to Cart
                                    </button>
                                </div>
                                <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                            <div className="offer">
                            <span>Best Deal</span>
                            <button className="btn btn-group">
                                <BsHeart />
                            </button>
                            </div>
                            <div className="cardDetail">
                            <img src={ProductImg.src} />
                            <h5>Grapes Red Flame</h5>
                            <div className="priceDetail">
                                <p>
                                AED 35.00 &nbsp;<span>38.00</span>
                                </p>
                                <div className="starRating">
                                <BsStar
                                    style={{ color: "#FFCE00", fill: "#FFCE00" }}
                                />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                            </div>
                            <div className="cardBtn">
                                <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-group addCart">
                                    Add to Cart
                                    </button>
                                </div>
                                <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                            <div className="offer">
                            <span>Best Deal</span>
                            <button className="btn btn-group">
                                <BsHeart />
                            </button>
                            </div>
                            <div className="cardDetail">
                            <img src={ProductImg.src} />
                            <h5>Grapes Red Flame</h5>
                            <div className="priceDetail">
                                <p>
                                AED 35.00 &nbsp;<span>38.00</span>
                                </p>
                                <div className="starRating">
                                <BsStar
                                    style={{ color: "#FFCE00", fill: "#FFCE00" }}
                                />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                            </div>
                            <div className="cardBtn">
                                <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-group addCart">
                                    Add to Cart
                                    </button>
                                </div>
                                <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                            <div className="offer">
                            <span>Best Deal</span>
                            <button className="btn btn-group">
                                <BsHeart />
                            </button>
                            </div>
                            <div className="cardDetail">
                            <img src={ProductImg.src} />
                            <h5>Grapes Red Flame</h5>
                            <div className="priceDetail">
                                <p>
                                AED 35.00 &nbsp;<span>38.00</span>
                                </p>
                                <div className="starRating">
                                <BsStar
                                    style={{ color: "#FFCE00", fill: "#FFCE00" }}
                                />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                            </div>
                            <div className="cardBtn">
                                <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-group addCart">
                                    Add to Cart
                                    </button>
                                </div>
                                <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                            <div className="offer">
                            <span>Best Deal</span>
                            <button className="btn btn-group">
                                <BsHeart />
                            </button>
                            </div>
                            <div className="cardDetail">
                            <img src={ProductImg.src} />
                            <h5>Grapes Red Flame</h5>
                            <div className="priceDetail">
                                <p>
                                AED 35.00 &nbsp;<span>38.00</span>
                                </p>
                                <div className="starRating">
                                <BsStar
                                    style={{ color: "#FFCE00", fill: "#FFCE00" }}
                                />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                            </div>
                            <div className="cardBtn">
                                <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-group addCart">
                                    Add to Cart
                                    </button>
                                </div>
                                <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                            <div className="offer">
                            <span>Best Deal</span>
                            <button className="btn btn-group">
                                <BsHeart />
                            </button>
                            </div>
                            <div className="cardDetail">
                            <img src={ProductImg.src} />
                            <h5>Grapes Red Flame</h5>
                            <div className="priceDetail">
                                <p>
                                AED 35.00 &nbsp;<span>38.00</span>
                                </p>
                                <div className="starRating">
                                <BsStar
                                    style={{ color: "#FFCE00", fill: "#FFCE00" }}
                                />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                            </div>
                            <div className="cardBtn">
                                <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-group addCart">
                                    Add to Cart
                                    </button>
                                </div>
                                <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                        <div className="offer">
                          <span>Best Deal</span>
                          <button className="btn btn-group">
                            <BsHeart />
                          </button>
                        </div>
                        <div className="cardDetail">
                          <img src={ProductImg.src} />
                          <h5>Grapes Red Flame</h5>
                          <div className="priceDetail">
                            <p>
                              AED 35.00 &nbsp;<span>38.00</span>
                            </p>
                            <div className="starRating">
                              <BsStar
                                style={{ color: "#FFCE00", fill: "#FFCE00" }}
                              />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                            </div>
                          </div>
                          <div className="cardBtn">
                            <div className="row">
                              <div className="col-md-6">
                                <button className="btn btn-group addCart">
                                  Add to Cart
                                </button>
                              </div>
                              <div className="col-md-6">
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
                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Latest">
                <div className="tab-section-container">
                <Slider {...settings}>
                    <div className="card-boxes">
                      <div className="listingCard">
                        <div className="offer">
                          <span>Best Deal</span>
                          <button className="btn btn-group">
                            <BsHeart />
                          </button>
                        </div>
                        <div className="cardDetail">
                          <img src={ProductImg.src} />
                          <h5>Grapes Red Flame</h5>
                          <div className="priceDetail">
                            <p>
                              AED 35.00 &nbsp;<span>38.00</span>
                            </p>
                            <div className="starRating">
                              <BsStar
                                style={{ color: "#FFCE00", fill: "#FFCE00" }}
                              />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                            </div>
                          </div>
                          <div className="cardBtn">
                            <div className="row">
                              <div className="col-md-6">
                                <button className="btn btn-group addCart">
                                  Add to Cart
                                </button>
                              </div>
                              <div className="col-md-6">
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
                    <div className="card-boxes">
                      <div className="listingCard">
                        <div className="offer">
                          <span>Best Deal</span>
                          <button className="btn btn-group">
                            <BsHeart />
                          </button>
                        </div>
                        <div className="cardDetail">
                          <img src={ProductImg.src} />
                          <h5>Grapes Red Flame</h5>
                          <div className="priceDetail">
                            <p>
                              AED 35.00 &nbsp;<span>38.00</span>
                            </p>
                            <div className="starRating">
                              <BsStar
                                style={{ color: "#FFCE00", fill: "#FFCE00" }}
                              />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                            </div>
                          </div>
                          <div className="cardBtn">
                            <div className="row">
                              <div className="col-md-6">
                                <button className="btn btn-group addCart">
                                  Add to Cart
                                </button>
                              </div>
                              <div className="col-md-6">
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
                    <div className="card-boxes">
                      <div className="listingCard">
                        <div className="offer">
                          <span>Best Deal</span>
                          <button className="btn btn-group">
                            <BsHeart />
                          </button>
                        </div>
                        <div className="cardDetail">
                          <img src={ProductImg.src} />
                          <h5>Grapes Red Flame</h5>
                          <div className="priceDetail">
                            <p>
                              AED 35.00 &nbsp;<span>38.00</span>
                            </p>
                            <div className="starRating">
                              <BsStar
                                style={{ color: "#FFCE00", fill: "#FFCE00" }}
                              />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                            </div>
                          </div>
                          <div className="cardBtn">
                            <div className="row">
                              <div className="col-md-6">
                                <button className="btn btn-group addCart">
                                  Add to Cart
                                </button>
                              </div>
                              <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                            <div className="offer">
                            <span>Best Deal</span>
                            <button className="btn btn-group">
                                <BsHeart />
                            </button>
                            </div>
                            <div className="cardDetail">
                            <img src={ProductImg.src} />
                            <h5>Grapes Red Flame</h5>
                            <div className="priceDetail">
                                <p>
                                AED 35.00 &nbsp;<span>38.00</span>
                                </p>
                                <div className="starRating">
                                <BsStar
                                    style={{ color: "#FFCE00", fill: "#FFCE00" }}
                                />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                            </div>
                            <div className="cardBtn">
                                <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-group addCart">
                                    Add to Cart
                                    </button>
                                </div>
                                <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                            <div className="offer">
                            <span>Best Deal</span>
                            <button className="btn btn-group">
                                <BsHeart />
                            </button>
                            </div>
                            <div className="cardDetail">
                            <img src={ProductImg.src} />
                            <h5>Grapes Red Flame</h5>
                            <div className="priceDetail">
                                <p>
                                AED 35.00 &nbsp;<span>38.00</span>
                                </p>
                                <div className="starRating">
                                <BsStar
                                    style={{ color: "#FFCE00", fill: "#FFCE00" }}
                                />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                            </div>
                            <div className="cardBtn">
                                <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-group addCart">
                                    Add to Cart
                                    </button>
                                </div>
                                <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                            <div className="offer">
                            <span>Best Deal</span>
                            <button className="btn btn-group">
                                <BsHeart />
                            </button>
                            </div>
                            <div className="cardDetail">
                            <img src={ProductImg.src} />
                            <h5>Grapes Red Flame</h5>
                            <div className="priceDetail">
                                <p>
                                AED 35.00 &nbsp;<span>38.00</span>
                                </p>
                                <div className="starRating">
                                <BsStar
                                    style={{ color: "#FFCE00", fill: "#FFCE00" }}
                                />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                            </div>
                            <div className="cardBtn">
                                <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-group addCart">
                                    Add to Cart
                                    </button>
                                </div>
                                <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                            <div className="offer">
                            <span>Best Deal</span>
                            <button className="btn btn-group">
                                <BsHeart />
                            </button>
                            </div>
                            <div className="cardDetail">
                            <img src={ProductImg.src} />
                            <h5>Grapes Red Flame</h5>
                            <div className="priceDetail">
                                <p>
                                AED 35.00 &nbsp;<span>38.00</span>
                                </p>
                                <div className="starRating">
                                <BsStar
                                    style={{ color: "#FFCE00", fill: "#FFCE00" }}
                                />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                            </div>
                            <div className="cardBtn">
                                <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-group addCart">
                                    Add to Cart
                                    </button>
                                </div>
                                <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                            <div className="offer">
                            <span>Best Deal</span>
                            <button className="btn btn-group">
                                <BsHeart />
                            </button>
                            </div>
                            <div className="cardDetail">
                            <img src={ProductImg.src} />
                            <h5>Grapes Red Flame</h5>
                            <div className="priceDetail">
                                <p>
                                AED 35.00 &nbsp;<span>38.00</span>
                                </p>
                                <div className="starRating">
                                <BsStar
                                    style={{ color: "#FFCE00", fill: "#FFCE00" }}
                                />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                            </div>
                            <div className="cardBtn">
                                <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-group addCart">
                                    Add to Cart
                                    </button>
                                </div>
                                <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                            <div className="offer">
                            <span>Best Deal</span>
                            <button className="btn btn-group">
                                <BsHeart />
                            </button>
                            </div>
                            <div className="cardDetail">
                            <img src={ProductImg.src} />
                            <h5>Grapes Red Flame</h5>
                            <div className="priceDetail">
                                <p>
                                AED 35.00 &nbsp;<span>38.00</span>
                                </p>
                                <div className="starRating">
                                <BsStar
                                    style={{ color: "#FFCE00", fill: "#FFCE00" }}
                                />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                            </div>
                            <div className="cardBtn">
                                <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-group addCart">
                                    Add to Cart
                                    </button>
                                </div>
                                <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                        <div className="offer">
                          <span>Best Deal</span>
                          <button className="btn btn-group">
                            <BsHeart />
                          </button>
                        </div>
                        <div className="cardDetail">
                          <img src={ProductImg.src} />
                          <h5>Grapes Red Flame</h5>
                          <div className="priceDetail">
                            <p>
                              AED 35.00 &nbsp;<span>38.00</span>
                            </p>
                            <div className="starRating">
                              <BsStar
                                style={{ color: "#FFCE00", fill: "#FFCE00" }}
                              />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                            </div>
                          </div>
                          <div className="cardBtn">
                            <div className="row">
                              <div className="col-md-6">
                                <button className="btn btn-group addCart">
                                  Add to Cart
                                </button>
                              </div>
                              <div className="col-md-6">
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
                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="contact" title="Bestseller">
                <div className="tab-section-container">
                  <Slider {...settings}>
                    <div className="card-boxes">
                      <div className="listingCard">
                        <div className="offer">
                          <span>Best Deal</span>
                          <button className="btn btn-group">
                            <BsHeart />
                          </button>
                        </div>
                        <div className="cardDetail">
                          <img src={product1.src} />
                          <h5>Grapes Red Flame</h5>
                          <div className="priceDetail">
                            <p>
                              AED 35.00 &nbsp;<span>38.00</span>
                            </p>
                            <div className="starRating">
                              <BsStar
                                style={{ color: "#FFCE00", fill: "#FFCE00" }}
                              />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                            </div>
                          </div>
                          <div className="cardBtn">
                            <div className="row">
                              <div className="col-md-6">
                                <button className="btn btn-group addCart">
                                  Add to Cart
                                </button>
                              </div>
                              <div className="col-md-6">
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
                    <div className="card-boxes">
                      <div className="listingCard">
                        <div className="offer">
                          <span>Best Deal</span>
                          <button className="btn btn-group">
                            <BsHeart />
                          </button>
                        </div>
                        <div className="cardDetail">
                          <img src={product1.src} />
                          <h5>Grapes Red Flame</h5>
                          <div className="priceDetail">
                            <p>
                              AED 35.00 &nbsp;<span>38.00</span>
                            </p>
                            <div className="starRating">
                              <BsStar
                                style={{ color: "#FFCE00", fill: "#FFCE00" }}
                              />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                            </div>
                          </div>
                          <div className="cardBtn">
                            <div className="row">
                              <div className="col-md-6">
                                <button className="btn btn-group addCart">
                                  Add to Cart
                                </button>
                              </div>
                              <div className="col-md-6">
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
                    <div className="card-boxes">
                      <div className="listingCard">
                        <div className="offer">
                          <span>Best Deal</span>
                          <button className="btn btn-group">
                            <BsHeart />
                          </button>
                        </div>
                        <div className="cardDetail">
                          <img src={product1.src} />
                          <h5>Grapes Red Flame</h5>
                          <div className="priceDetail">
                            <p>
                              AED 35.00 &nbsp;<span>38.00</span>
                            </p>
                            <div className="starRating">
                              <BsStar
                                style={{ color: "#FFCE00", fill: "#FFCE00" }}
                              />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                            </div>
                          </div>
                          <div className="cardBtn">
                            <div className="row">
                              <div className="col-md-6">
                                <button className="btn btn-group addCart">
                                  Add to Cart
                                </button>
                              </div>
                              <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                            <div className="offer">
                            <span>Best Deal</span>
                            <button className="btn btn-group">
                                <BsHeart />
                            </button>
                            </div>
                            <div className="cardDetail">
                            <img src={product1.src} />
                            <h5>Grapes Red Flame</h5>
                            <div className="priceDetail">
                                <p>
                                AED 35.00 &nbsp;<span>38.00</span>
                                </p>
                                <div className="starRating">
                                <BsStar
                                    style={{ color: "#FFCE00", fill: "#FFCE00" }}
                                />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                            </div>
                            <div className="cardBtn">
                                <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-group addCart">
                                    Add to Cart
                                    </button>
                                </div>
                                <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                            <div className="offer">
                            <span>Best Deal</span>
                            <button className="btn btn-group">
                                <BsHeart />
                            </button>
                            </div>
                            <div className="cardDetail">
                            <img src={product1.src} />
                            <h5>Grapes Red Flame</h5>
                            <div className="priceDetail">
                                <p>
                                AED 35.00 &nbsp;<span>38.00</span>
                                </p>
                                <div className="starRating">
                                <BsStar
                                    style={{ color: "#FFCE00", fill: "#FFCE00" }}
                                />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                            </div>
                            <div className="cardBtn">
                                <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-group addCart">
                                    Add to Cart
                                    </button>
                                </div>
                                <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                            <div className="offer">
                            <span>Best Deal</span>
                            <button className="btn btn-group">
                                <BsHeart />
                            </button>
                            </div>
                            <div className="cardDetail">
                            <img src={product1.src} />
                            <h5>Grapes Red Flame</h5>
                            <div className="priceDetail">
                                <p>
                                AED 35.00 &nbsp;<span>38.00</span>
                                </p>
                                <div className="starRating">
                                <BsStar
                                    style={{ color: "#FFCE00", fill: "#FFCE00" }}
                                />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                            </div>
                            <div className="cardBtn">
                                <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-group addCart">
                                    Add to Cart
                                    </button>
                                </div>
                                <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                            <div className="offer">
                            <span>Best Deal</span>
                            <button className="btn btn-group">
                                <BsHeart />
                            </button>
                            </div>
                            <div className="cardDetail">
                            <img src={product1.src} />
                            <h5>Grapes Red Flame</h5>
                            <div className="priceDetail">
                                <p>
                                AED 35.00 &nbsp;<span>38.00</span>
                                </p>
                                <div className="starRating">
                                <BsStar
                                    style={{ color: "#FFCE00", fill: "#FFCE00" }}
                                />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                            </div>
                            <div className="cardBtn">
                                <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-group addCart">
                                    Add to Cart
                                    </button>
                                </div>
                                <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                            <div className="offer">
                            <span>Best Deal</span>
                            <button className="btn btn-group">
                                <BsHeart />
                            </button>
                            </div>
                            <div className="cardDetail">
                            <img src={product1.src} />
                            <h5>Grapes Red Flame</h5>
                            <div className="priceDetail">
                                <p>
                                AED 35.00 &nbsp;<span>38.00</span>
                                </p>
                                <div className="starRating">
                                <BsStar
                                    style={{ color: "#FFCE00", fill: "#FFCE00" }}
                                />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                            </div>
                            <div className="cardBtn">
                                <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-group addCart">
                                    Add to Cart
                                    </button>
                                </div>
                                <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                            <div className="offer">
                            <span>Best Deal</span>
                            <button className="btn btn-group">
                                <BsHeart />
                            </button>
                            </div>
                            <div className="cardDetail">
                            <img src={product1.src} />
                            <h5>Grapes Red Flame</h5>
                            <div className="priceDetail">
                                <p>
                                AED 35.00 &nbsp;<span>38.00</span>
                                </p>
                                <div className="starRating">
                                <BsStar
                                    style={{ color: "#FFCE00", fill: "#FFCE00" }}
                                />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                            </div>
                            <div className="cardBtn">
                                <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-group addCart">
                                    Add to Cart
                                    </button>
                                </div>
                                <div className="col-md-6">
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
                    <div className="card-boxes">
                        <div className="listingCard">
                        <div className="offer">
                          <span>Best Deal</span>
                          <button className="btn btn-group">
                            <BsHeart />
                          </button>
                        </div>
                        <div className="cardDetail">
                          <img src={product1.src} />
                          <h5>Grapes Red Flame</h5>
                          <div className="priceDetail">
                            <p>
                              AED 35.00 &nbsp;<span>38.00</span>
                            </p>
                            <div className="starRating">
                              <BsStar
                                style={{ color: "#FFCE00", fill: "#FFCE00" }}
                              />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                              <BsStar />
                            </div>
                          </div>
                          <div className="cardBtn">
                            <div className="row">
                              <div className="col-md-6">
                                <button className="btn btn-group addCart">
                                  Add to Cart
                                </button>
                              </div>
                              <div className="col-md-6">
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
