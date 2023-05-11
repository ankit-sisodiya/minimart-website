"use client"
import React from "react";
import Banner from "../../assets/img/banner2.png";
import { BsHeart, BsStar } from "react-icons/bs";
import ProductImg from "../../assets/img/product/product.png";
import Form from 'react-bootstrap/Form';

function CardList() {
  return (
    <div className="cardListing">
      <div className="banner">
        <img src={Banner.src} />
      </div>
      <div className="listing">
        <div className="row">
          <div className="col-md-4">
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
                    <BsStar style={{ color: "#FFCE00", fill: "#FFCE00" }} />
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
        </div>
      </div>
    </div>
  );
}

export default CardList;
