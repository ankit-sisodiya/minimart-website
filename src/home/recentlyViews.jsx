'use client'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsHeart} from "react-icons/bs";
import ProductImg from "../assets/img/product/product.png";
import Form from "react-bootstrap/Form";

const RecentlyViews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 1,
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
      <div className="recent-view-section">
        <div className="recent-view-heading">
            <h2>Recently Views</h2>
        </div>
        <div className="recent-view-slider">
                    <Slider {...settings}>
                       <div className="card-boxes">
                      <div className="card-section">
                        <div className="card-offer-part">
                          <span className="offer-deal">Best deal</span>
                          <span className="pi-icon"><BsHeart/></span>
                        </div>
                        <div className="card-image-part">
                          <img src={ProductImg.src} alt="Product Image" />
                        </div>
                        <div className="rv-product-image-detail">
                          <p className="pi-name">Grapes</p>
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
                          <img src={ProductImg.src} alt="Product Image" />
                        </div>
                        <div className="rv-product-image-detail">
                          <p className="pi-name">Grapes</p>
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
                          <img src={ProductImg.src} alt="Product Image" />
                        </div>
                        <div className="rv-product-image-detail">
                          <p className="pi-name">Grapes</p>
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
                          <img src={ProductImg.src} alt="Product Image" />
                        </div>
                        <div className="rv-product-image-detail">
                          <p className="pi-name">Grapes</p>
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
                          <img src={ProductImg.src} alt="Product Image" />
                        </div>
                        <div className="rv-product-image-detail">
                          <p className="pi-name">Grapes</p>
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
                          <img src={ProductImg.src} alt="Product Image" />
                        </div>
                        <div className="rv-product-image-detail">
                          <p className="pi-name">Grapes</p>
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
                          <img src={ProductImg.src} alt="Product Image" />
                        </div>
                        <div className="rv-product-image-detail">
                          <p className="pi-name">Grapes</p>
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
                          <img src={ProductImg.src} alt="Product Image" />
                        </div>
                        <div className="rv-product-image-detail">
                          <p className="pi-name">Grapes</p>
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
                          <img src={ProductImg.src} alt="Product Image" />
                        </div>
                        <div className="rv-product-image-detail">
                          <p className="pi-name">Grapes</p>
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
                          <img src={ProductImg.src} alt="Product Image" />
                        </div>
                        <div className="rv-product-image-detail">
                          <p className="pi-name">Grapes</p>
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
                          <img src={ProductImg.src} alt="Product Image" />
                        </div>
                        <div className="rv-product-image-detail">
                          <p className="pi-name">Grapes</p>
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
                          <img src={ProductImg.src} alt="Product Image" />
                        </div>
                        <div className="rv-product-image-detail">
                          <p className="pi-name">Grapes</p>
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
      </div>
    </div>
  )
}

export default RecentlyViews;
