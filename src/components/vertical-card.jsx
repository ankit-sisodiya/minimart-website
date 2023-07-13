import React, { useState } from "react";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import product1 from "../assets/img/product1.png";
import Form from "react-bootstrap/Form";
import Image from "next/image";

function VerticalCard() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className="slider-products">
        <div className="row">
          <div className="col-md-4 pr-0 d-flex">
            <div className="special-product-image">
              <Image
                src={product1.src}
                alt="Product Image"
                height={100}
                width={100}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="special-product-detail">
              <span className="sp-icon">
                {!active ? (
                  <BsHeart
                    onClick={() => {
                      setActive(true);
                    }}
                  />
                ) : (
                  <BsFillHeartFill />
                )}
              </span>
              <p className="sp-name">Ratlami Sev</p>
              <span className="best-deal-button">Hot deal</span>
              <p className="sp-price">
                AED 35.00 <span className="sp-cutPrice">38.00</span>
              </p>
              <div className="sp-buttons">
                <div className="row">
                  <div className="col-md-7">
                    <button className="sp-cartButton">Add to Cart</button>
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
  );
}

export default VerticalCard;
