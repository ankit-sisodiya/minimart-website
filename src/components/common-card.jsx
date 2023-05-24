"use client"
import React from "react";
import { BsHeart } from "react-icons/bs";
import ProductImg from "../assets/img/product/product.png";
import Form from "react-bootstrap/Form";
import Image from "next/image";

function CommonCard() {
  return (
    <div className="card-boxes">
      <div className="card-section">
        <div className="card-offer-part">
          <span className="offer-deal">Best deal</span>
          <span className="pi-icon">
            <BsHeart />
          </span>
        </div>
        <div className="card-image-part">
          <Image src={ProductImg.src} alt="Product Image" height={100} width={100}/>
        </div>
        <div className="rv-product-image-detail">
          <p className="pi-name">Grapes</p>
          <p className="pi-price">
            AED 35.00 <span className="pi-cutPrice">38.00</span>
          </p>
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
  );
}

export default CommonCard;
