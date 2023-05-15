"use client";
import React, { useState } from "react";
import Logo from "../assets/img/logo.png";
import { BsSearch, BsCart } from "react-icons/bs";
import { FaUser, FaRegHeart, FaPercentage } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { BiHomeAlt, BiCategory } from "react-icons/bi";
import { BsFire, BsQrCodeScan } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import Link from "next/link";

const Header = ({ direction, ...args }) => {
  return (
    <>
      <div className="header-top">
        <div className="container header-top-container">
          <div className="header-top-left">
            <span className="phone-section">+1800-120-3699</span>
          </div>
          <div className="header-top-right">
            <div className="account-section">
              <span className="mob-account">
                <FaUser />
              </span>
            </div>
            <div className="text-end">
              <span className="text-end">Language</span>
            </div>
          </div>
        </div>
      </div>
      <div className="header-center">
        <div className="container">
          <div className="row alignClass">
            <div className="col-md-6">
              <div className="row alignClass">
                <div className="col-md-4 logo-for-mob">
                  <div className="logo">
                    <img src={Logo.src} alt="logo" />
                  </div>
                  <div className="hamburger-for-mob">
                    <button> menu </button>
                  </div>
                </div>
                <div className="col-md-8 search-column">
                  <div className="search-bar">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Categories"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-secondary searchButton"
                          type="button"
                        >
                          <BsSearch />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mob-blue-nav">
              <div className="badge-options">
                <button type="button" className="icon-button">
                  <span className="icon-button__badge">2</span>
                  <Link href="/wishlist">
                    <span>
                      <FaRegHeart />
                      <span className="nav-for-mob">Wishlist</span>
                    </span>
                  </Link>
                </button>
                <button type="button" className="icon-button">
                  <span className="icon-button__badge">2</span>
                  <Link href="/cart">
                    <span>
                      <BsCart />
                      <span className="nav-for-mob">My Cart</span>
                    </span>
                  </Link>
                </button>
                <div>
                  <span>
                    <GoLocation />
                    <span className="nav-for-mob">Location</span>
                  </span>
                </div>
                <div className="sign-up-mob">
                  <div className="signUp button">
                    <Link href="/login" className="btn btn-group">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="col-md-10 p-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse header-bottom-navbar"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  <a
                    className="nav-item nav-link active col-md-2 text-center"
                    href="/"
                  >
                    <span className="nav-for-web">
                      <BiHomeAlt /> Home
                    </span>
                  </a>
                  <Link
                    className="nav-item nav-link col-md-2 text-center"
                    href="/category"
                  >
                    <span className="nav-for-web">
                      <BiCategory /> Categories
                    </span>
                  </Link>
                  <Link
                    className="nav-item nav-link col-md-2 text-center"
                    href="/hot-deal"
                  >
                    <span className="nav-for-web">
                      <BsFire /> Hot deals
                    </span>
                  </Link>
                  <a
                    className="nav-item nav-link col-md-2 text-center"
                    href="/"
                  >
                    <span className="nav-for-web">
                      <FaPercentage /> Promotions
                    </span>
                  </a>
                  <Link
                    className="nav-item nav-link col-md-2 text-center"
                    href="/new-product"
                  >
                    <span className="nav-for-web">
                      <MdOutlineProductionQuantityLimits /> New Product
                    </span>
                  </Link>
                  <a
                    className="nav-item nav-link col-md-2 text-center"
                    href="/"
                  >
                    <span className="nav-for-web">
                      <BsQrCodeScan /> Scan QR Code
                    </span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
