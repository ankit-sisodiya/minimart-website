'use client'
import React , {useState } from 'react';
import Logo from '../assets/img/logo.png';
import { BsSearch, BsCart } from 'react-icons/bs';
import { FaUser, FaRegHeart,FaPercentage } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { BiHomeAlt,BiCategory } from 'react-icons/bi';
import { BsFire,BsQrCodeScan } from 'react-icons/bs';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

const Header = ({ direction, ...args }) => {
    console.log(Logo)
  return (
    <div>
      <div className="header-top">
        <div className="row">
            <div className="col-md-8 text-start">
                <span className="phone-section">+1800-120-3699</span>
            </div>
            <div className="col-md-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className="account-section">
                            <span><FaUser/> &nbsp; My Account</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <span>Language</span>
                    </div>
                    <div className="col-md-4">
                        <span>Track Order</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="header-center">
        <div className="row alignClass">
            <div className="col-md-6">
                <div className="row alignClass">
                    <div className="col-md-4">
                        <div className="logo">
                            <img src={Logo.src} alt="logo"/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="search-bar">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search Categories"/>
                                <div className="input-group-append">
                                    <button className="btn btn-secondary searchButton" type="button">
                                        <BsSearch/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-3">
                      <span><FaRegHeart/> Wishlist</span>
                    </div>
                    <div className="col-md-3">
                            <div className="dropdown">
                                <span><BsCart/> My Cart</span>
                            </div>
                    </div>
                    <div className="col-md-3">
                            <div className="dropdown">
                                <span><GoLocation/> Location</span>
                            </div>
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
            </div>
        </div>
      </div>

        <div className="header-bottom">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse header-bottom-navbar" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="/">
                                <BiHomeAlt/> Home
                            </a>
                            <a className="nav-item nav-link" href="/">
                                <BiCategory/> Categories
                            </a>
                            <a className="nav-item nav-link" href="/">
                                <BsFire/> Hot deals
                            </a>
                            <a className="nav-item nav-link" href="/">
                                <FaPercentage/> Promotions
                            </a>
                            <a className="nav-item nav-link" href="/"><MdOutlineProductionQuantityLimits/> New Product</a>
                            <a className="nav-item nav-link" href="/"><BsQrCodeScan/> Scan QR Code</a>
                            </div>
                        </div>
                    </nav>
        </div>
    </div>
  )
}

export default Header
