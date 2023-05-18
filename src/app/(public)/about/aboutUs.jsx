"use client";
import React from "react";
import delivery from "@app/assets/img/delivery.png";
import refund from "@app/assets/img/refund.png";
import bestPrice from "@app/assets/img/bestPrice.png";

function AboutUs() {
  return (
    <div className="aboutSection">
      <div className="MainHead">
        <h2>My Wishlist (6 Items)</h2>
      </div>
      <div className="about">
        <div className="aboutHead">
          <h5>
            About <span className="my">My</span>Market
          </h5>
          <span>Dubai’s Favorite Online Shopping Platform</span>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
      <div className="about">
        <div className="aboutHead">
          <h5>
            Why Should I Use <span className="my">My</span>Market?
          </h5>
          <span>Dubai’s Favorite Online Shopping Platform</span>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
      <div className="banner-below ">
        <div className="row">
          <div className="col-md-4">
            <div className="banner-below-part">
              <div className="banner-below-image">
                <img src={refund.src} alt="Best-price" />
              </div>
              <div className="banner-below-detail">
                <p>Best Prices & Deals</p>
                <span>Don't miss out daily amazing deals and prices</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="banner-below-part">
              <div className="banner-below-image">
                <img src={bestPrice.src} alt="Refundable" />
              </div>
              <div className="banner-below-detail">
                <p>Refundable</p>
                <span>If your items have damage we agree to refund it</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="banner-below-part last-card">
              <div className="banner-below-image">
                <img src={delivery.src} alt="Free Delivery" />
              </div>
              <div className="banner-below-detail">
                <p>Free Delivery</p>
                <span>Do purchase over $50 and get free delivery anywhere</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
