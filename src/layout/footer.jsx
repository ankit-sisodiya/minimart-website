import React from 'react';
import footerLogo from '../assets/img/logo.png';
import payment from '../assets/img/payment.png';
import { CiLocationOn } from 'react-icons/ci';
import { IoIosCall } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import { BsInstagram,BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn} from 'react-icons/fa';

const footer = () => {
  return (
    <div className="footer">
     <div className="footer-first-line"></div>
     <div className="footer-second-line"></div>

      <div className="container">
          <div className="footer-main-part">
              <div className="footer-top">
                <div className="row">
                  <div className="col-md-5">
                    <div className="footer-logo-part">
                      <img src={footerLogo.src} alt="footer-logo" />
                    </div>
                    <div className="footer-contact-detail">
                      <p>
                        <span className="footer-icon"><CiLocationOn/></span>
                        <strong>Address: </strong>1762 School House Road
                      </p>
                      <p>
                        <span className="footer-icon"><IoIosCall/></span>
                        <strong>Call Us: </strong>1233-777
                      </p>
                      <p>
                        <span className="footer-icon"><AiOutlineMail/></span>
                        <strong>Email: </strong>myma.ket@contact.com
                      </p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="footer-other-detail">
                      <div className="footer-right-section">
                          <p className="footer-heading">Account</p>
                            <ul>
                              <li>Wishlist</li>
                              <li>Cart</li>
                              <li>Track Order</li>
                              <li>Shipping Details</li>
                            </ul>
                      </div>
                      <div className="footer-right-section">
                          <p className="footer-heading">Useful links</p>
                            <ul>
                              <li>About Us</li>
                              <li>Contact</li>
                              <li>Hot deals</li>
                              <li>Promotions</li>
                              <li>New products</li>
                            </ul>
                      </div>
                      <div className="footer-right-section">
                          <p className="footer-heading">Help Center</p>
                            <ul>
                              <li>Payments</li>
                              <li>Refund</li>
                              <li>Checkout</li>
                              <li>Shipping</li>
                              <li>Q&A</li>
                              <li>Privacy Policy</li>
                            </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="copyright-section">
                  <span>&copy; 2023, All rights reserved</span>
                </div>
                <div className="visa-section">
                  <div className="visa-cards">
                    <img src={payment.src} alt="card" />
                  </div>
                </div>
                <div className="connect-section">
                  <div className="social-icons"><FaFacebookF/></div>
                  <div className="social-icons"><FaLinkedinIn/></div>
                  <div className="social-icons"><BsInstagram/></div>
                  <div className="social-icons"><BsTwitter/></div>
                </div>
              </div>
          </div>
      </div>
    </div>
 )   
}

export default React.memo(footer)
