"use client";
import React, { useState } from "react";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import ProductImg from "../assets/img/product/product.png";
import Form from "react-bootstrap/Form";
import Image from "next/image";

function CommonCard() {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(true);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1 < 0 ? 0 : count - 1);
  };
  return (
    <div className="card-boxes">
      <div className="card-section">
        <div className="card-offer-part">
          <span className="offer-deal">Hot deal</span>
          <span className="pi-icon">
            {!active ? (
              <BsHeart
                onClick={() => {
                  setActive(true);
                }}
              />
            ) : (
              <BsFillHeartFill
                onClick={() => {
                  setActive(false);
                }}
                style={{ color: "red" }}
              />
            )}
          </span>
        </div>
        <div className="card-image-part">
          <Image
            src={ProductImg.src}
            alt="Product Image"
            height={100}
            width={100}
          />
        </div>
        <div className="rv-product-image-detail">
          <p className="pi-name">Grapes</p>
          <p className="pi-price">
            AED 35.00 <span className="pi-cutPrice">38.00</span>
          </p>
          {cart ? (
            <div className="cartButtons">
              <button
                onClick={() => {
                  setCart(false);
                }}
                style={{border:"1px solid #2670b7"}}
              >
                Add to Cart
              </button>
              <div className="pi-dropdown">
                <Form.Select aria-label="Default select example">
                  <option>1 Kg/Unit</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
          ) : (
            <div className="cartButtons">
              <button className="viewCart" >View Cart</button>
              <div class="wrapperss">
                <button
                  class="btn btn--minus"
                  onClick={decrementCount}
                  type="button"
                  name="button"
                  style={{
                    padding: "0px 20px !important",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  -
                </button>
                <input class="quantity" type="text" name="name" value={count} />
                <button
                  class="btn btn--plus"
                  onClick={incrementCount}
                  type="button"
                  name="button"
                  style={{
                    padding: "0px 20px !important",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommonCard;
