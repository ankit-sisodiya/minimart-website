'use client'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brand from "../assets/img/BrandImage.png";

const ShopByBrand = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
        rows: 2,
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
        <div className="brand-section">
            <div className="shop-brand-heading">
                <h2>Shop By Brand</h2>
            </div>
            <div className="brand-slider-part">
                <Slider {...settings}>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                    <div className="brand-images">
                        <img src={brand.src} alt="Brand Image" />
                    </div>
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default ShopByBrand;
