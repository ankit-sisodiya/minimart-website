import React from "react";
import CartImage from "@app/assets/img/cart/cart.png";
import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Link from "next/link";
function CartItem() {
  return (
    <div className="cartItem">
      <div className="cartHeading">
        <h5>Basket (02)</h5>
        <h5>AED 70.00</h5>
      </div>
      <div className="addcartSection">
        <div className="itemCart">
          <div className="row">
            <div className="col-md-3">
              <div className="cartImage">
                <img src={CartImage.src} />
              </div>
            </div>
            <div className="col-md-9">
              <div className="cartDetail">
                <div className="cartTopName">
                  <div className="cartHeadName">
                    <h5>
                      Apple Envy Premium{" "}
                      <span className="quantity">1 Kg/Unit</span>
                    </h5>
                    <div className="addBtn">
                      <button className="btn btn-group">
                        <BsDash />
                      </button>
                      <span className="addNum">2</span>
                      <button className="btn btn-group">
                        <BsPlus />
                      </button>
                    </div>
                  </div>
                  <div className="price">
                    <p>
                      AED 35.00 <span className="cuttedPrice">30.00</span>
                    </p>
                  </div>
                  <div className="savedAmount">
                    <span>You Save AED 03.00</span>
                  </div>
                  <div className="soldText">
                    <h4>
                      Sold By <Link href="/">MyMarket</Link>
                    </h4>
                  </div>
                  <div className="editSection">
                    <div className="editbtn">
                      <button className="btn btn-group">Edit</button>
                      <button className="btn btn-group">Remove</button>
                      <button className="btn btn-group">
                        Move to Wishlist
                      </button>
                      <button className="btn btn-group">Save for Later</button>
                    </div>
                    <div className="TotalPrice">
                      <h5>AED 35.00</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="itemCart">
          <div className="row">
            <div className="col-md-3">
              <div className="cartImage">
                <img src={CartImage.src} />
              </div>
            </div>
            <div className="col-md-9">
              <div className="cartDetail">
                <div className="cartTopName">
                  <div className="cartHeadName">
                    <h5>
                      Apple Envy Premium{" "}
                      <span className="quantity">1 Kg/Unit</span>
                    </h5>
                    <div className="addBtn">
                      <button className="btn btn-group">
                        <BsDash />
                      </button>
                      <span className="addNum">2</span>
                      <button className="btn btn-group">
                        <BsPlus />
                      </button>
                    </div>
                  </div>
                  <div className="price">
                    <p>
                      AED 35.00 <span className="cuttedPrice">30.00</span>
                    </p>
                  </div>
                  <div className="savedAmount">
                    <span>You Save AED 03.00</span>
                  </div>
                  <div className="soldText">
                    <h4>
                      Sold By <Link href="#">MyMarket</Link>
                    </h4>
                  </div>
                  <div className="editSection">
                    <div className="editbtn">
                      <button className="btn btn-group">Edit</button>
                      <button className="btn btn-group">Remove</button>
                      <button className="btn btn-group">
                        Move to Wishlist
                      </button>
                      <button className="btn btn-group">Save for Later</button>
                    </div>
                    <div className="TotalPrice">
                      <h5>AED 35.00</h5>
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

export default CartItem;
