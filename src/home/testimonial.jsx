"use client";
import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import userImage from '../assets/img/user-profile.png'
import { BsStar } from "react-icons/bs";
import Image from "next/image";

const Testimonial = ({ cards }) => {
  const settings = {
    centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  };

  return (
    <div>
        <div className="sliderContainer">
          <div className="testimonial-heading">
            <h2>What Our Customers Are Saying</h2>
          </div>
              <Slider {...settings}>
                <div className="slide">
                    <div className="testimonial-cards">
                        <div className="testimonial-profile-section">
                          <Image src={userImage.src} alt="user-profile" height={100} width={100}/>
                          <p className="user-name">Shivam Bagora1</p>
                        </div>
                      <div className="user-comment-section">
                          <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam adipisci. Quibusdam at officiis eaque accusantium nisi, hic atque magni veritatis molestias voluptatem quaerat dicta itaque blanditiis soluta magnam, eos qui quas minus explicabo placeat.
                          </p>
                          <div className="testimonial-starRating">
                            <BsStar style={{ color: "#FFCE00", fill: "#FFCE00" }} />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                          </div>
                      </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="testimonial-cards">
                        <div className="testimonial-profile-section">
                          <Image src={userImage.src} alt="user-profile" height={100} width={100}/>
                          <p className="user-name">Shivam Bagora1</p>
                        </div>
                      <div className="user-comment-section">
                          <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam adipisci. Quibusdam at officiis eaque accusantium nisi, hic atque magni veritatis molestias voluptatem quaerat dicta itaque blanditiis soluta magnam, eos qui quas minus explicabo placeat.
                          </p>
                          <div className="testimonial-starRating">
                            <BsStar style={{ color: "#FFCE00", fill: "#FFCE00" }} />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                          </div>
                      </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="testimonial-cards">
                        <div className="testimonial-profile-section">
                          <Image src={userImage.src} alt="user-profile" height={100} width={100}/>
                          <p className="user-name">Shivam Bagora1</p>
                        </div>
                      <div className="user-comment-section">
                          <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam adipisci. Quibusdam at officiis eaque accusantium nisi, hic atque magni veritatis molestias voluptatem quaerat dicta itaque blanditiis soluta magnam, eos qui quas minus explicabo placeat.
                          </p>
                          <div className="testimonial-starRating">
                            <BsStar style={{ color: "#FFCE00", fill: "#FFCE00" }} />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                          </div>
                      </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="testimonial-cards">
                        <div className="testimonial-profile-section">
                          <Image src={userImage.src} alt="user-profile" height={100} width={100}/>
                          <p className="user-name">Shivam Bagora1</p>
                        </div>
                      <div className="user-comment-section">
                          <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam adipisci. Quibusdam at officiis eaque accusantium nisi, hic atque magni veritatis molestias voluptatem quaerat dicta itaque blanditiis soluta magnam, eos qui quas minus explicabo placeat.
                          </p>
                          <div className="testimonial-starRating">
                            <BsStar style={{ color: "#FFCE00", fill: "#FFCE00" }} />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                          </div>
                      </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="testimonial-cards">
                        <div className="testimonial-profile-section">
                          <Image src={userImage.src} alt="user-profile" height={100} width={100}/>
                          <p className="user-name">Shivam Bagora1</p>
                        </div>
                      <div className="user-comment-section">
                          <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam adipisci. Quibusdam at officiis eaque accusantium nisi, hic atque magni veritatis molestias voluptatem quaerat dicta itaque blanditiis soluta magnam, eos qui quas minus explicabo placeat.
                          </p>
                          <div className="testimonial-starRating">
                            <BsStar style={{ color: "#FFCE00", fill: "#FFCE00" }} />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                          </div>
                      </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="testimonial-cards">
                        <div className="testimonial-profile-section">
                          <Image src={userImage.src} alt="user-profile" height={100} width={100}/>
                          <p className="user-name">Shivam Bagora1</p>
                        </div>
                      <div className="user-comment-section">
                          <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam adipisci. Quibusdam at officiis eaque accusantium nisi, hic atque magni veritatis molestias voluptatem quaerat dicta itaque blanditiis soluta magnam, eos qui quas minus explicabo placeat.
                          </p>
                          <div className="testimonial-starRating">
                            <BsStar style={{ color: "#FFCE00", fill: "#FFCE00" }} />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                          </div>
                      </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="testimonial-cards">
                        <div className="testimonial-profile-section">
                          <Image src={userImage.src} alt="user-profile" height={100} width={100}/>
                          <p className="user-name">Shivam Bagora1</p>
                        </div>
                      <div className="user-comment-section">
                          <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam adipisci. Quibusdam at officiis eaque accusantium nisi, hic atque magni veritatis molestias voluptatem quaerat dicta itaque blanditiis soluta magnam, eos qui quas minus explicabo placeat.
                          </p>
                          <div className="testimonial-starRating">
                            <BsStar style={{ color: "#FFCE00", fill: "#FFCE00" }} />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                          </div>
                      </div>
                    </div>
                </div>
              </Slider>
            </div>

    </div>
  );
};

export default Testimonial;
