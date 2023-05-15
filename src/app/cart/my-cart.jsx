"use client";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import CartItem from "./cart-item";
import Address from "./address";

function Mycart() {
  const [tab, setTab] = useState(true);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">{tab ? <CartItem /> : <Address />}</div>
        <div className="col-md-4">
          <div className="AmountSection">
            <div className="promoCode">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Enter Promo Code</Form.Label>
                  <div className="cartButtons">
                    <Form.Control type="email" placeholder="Enter email" />
                    <button className="btn btn-group">Submit</button>
                  </div>
                </Form.Group>
              </Form>
            </div>
            <div className="priceSection">
              <h4>Payment Details</h4>
              <div className="priceDetail">
                <h5>Shipping Cost</h5>
                <span>TBD</span>
              </div>
              <div className="priceDetail">
                <h5>Discount</h5>
                <span className="tChange">-AED 0.00</span>
              </div>
              <div className="priceDetail">
                <h5>Tax</h5>
                <span>TBD</span>
              </div>
              <div className="priceDetail borderNone">
                <h5>Estimated Total</h5>
                <p className="tAmount">
                  AED 100.00
                  <br />
                  <span className="savedText">You Save AED 06.00</span>
                </p>
              </div>
            </div>
          </div>
          <div className="placeBtn">
            <button
              className="btn btn-group mt-4"
              onClick={() => {
                setTab(false);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mycart;
