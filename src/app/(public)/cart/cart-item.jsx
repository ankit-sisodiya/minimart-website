import React, { useState } from "react";
import CartImage from "@app/assets/img/cart/cart.png";
import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
function CartItem() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1 < 0 ? 0 : count - 1);
  };

  const cartItem = [1, 2, 3, 4];
  return (
    <div className="cartItem">
      <div className="cartHeading">
        <h5>Basket (02)</h5>
        <h5>AED 70.00</h5>
      </div>
      <div className="addcartSection">
        {cartItem.map((x, i) => {
          return(
          <div key={i} className="itemCart">
            <div className="row">
              <div className="col-md-3">
                <div className="cartImage">
                  <Image src={CartImage.src} width={500} height={150} alt="" />
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
                        <button
                          className="btn btn-group"
                          onClick={decrementCount}
                        >
                          <BsDash />
                        </button>
                        <span className="addNum">{count}</span>
                        <button
                          className="btn btn-group"
                          onClick={incrementCount}
                        >
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
                        <button className="btn btn-group">
                          Save for Later
                        </button>
                      </div>
                      <div className="TotalPrice">
                        <h5>AED 35.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>)
        })}
      </div>
    </div>
  );
}

export default CartItem;
