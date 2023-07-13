"use client";
import React from "react";
import banner from "../assets/img/banner.png";
import delivery from "../assets/img/delivery.png";
import refund from "../assets/img/refund.png";
import bestPrice from "../assets/img/bestPrice.png";
import { BsEyeSlash } from "react-icons/bs";
import Image from "next/image";

function Banner() {
  return (
    <>
      <div className="banner-section">
        <Image src={banner.src} alt="Banner" width={500} height={500} />
      </div>
      <div className="container">
        <div className="banner-below">
          <div className="row">
            <div className="col-md-4">
              <div className="banner-below-part">
                <div className="banner-below-image">
                  <Image
                    src={refund.src}
                    alt="Best-price"
                    width={500}
                    height={500}
                  />
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
                  <Image
                    src={bestPrice.src}
                    alt="Refundable"
                    width={500}
                    height={500}
                  />
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
                  <Image
                    src={delivery.src}
                    alt="Free Delivery"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="banner-below-detail">
                  <p>Free Delivery</p>
                  <span>
                    Do purchase over $50 and get free delivery anywhere
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
