'use client'
import React from 'react';
import { BsHeart, BsShare, BsFillEyeFill } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import productDetail from '@app/assets/img/productDetail.png';
import productImageA from '@app/assets/img/pda.png';
import productImageB from '@app/assets/img/pdb.png';
import productImageC from '@app/assets/img/pdc.png';
import Image from 'next/image';

const ProductDetail = () => {
  return (
    <div>
        <div className="container">
            <div className="product-detail-section">
                <div className="row">
                    <div className="col-md-6">
                    <div className="pd-image-detail">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="pd-image-detail-column">
                                    <div className="product-image-option">
                                        <Image height={100} width={500} src={productImageA.src} alt="product other images" />
                                    </div>
                                    <div className="product-image-option">
                                        <Image height={100} width={500} src={productImageB.src} alt="product other images" />
                                    </div>
                                    <div className="product-image-option">
                                        <Image height={100} width={500} src={productImageC.src} alt="product other images" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <Image height={100} width={500} src={productDetail.src} alt="product-image" className="product-enlarge" />
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-detail-side">
                            <div className="product-detail-heading">
                                <h2>Apple Envy Premium</h2>
                                <div className="share-icons">
                                    <BsHeart/>
                                    <BsShare/>
                                </div>
                            </div>

                            <div className="product-describe">
                                <p className="watch-number"><BsFillEyeFill/> 230 people are viewing this right now</p>
                                <span className="product-price-detail">AED <span className="pd-price">35.00</span> <span className="pd-cut-price">AED 38.00</span> <span className="pd-offer">60% Off</span></span>
                                <p className="stock-option">In Stock</p>
                                <span className="pd-sold">Sold By <span className="brand-head">MyMarket</span></span>
                            </div>

                            <div className="pd-cart-buttons">
                                <div className="row">
                                    <div className="col-md-8">
                                        <button className="pd-cart">Add to cart</button>
                                    </div>
                                    <div className="col-md-4 pd-dropdown">
                                        <Form.Select aria-label="Default select example">
                                            <option>1 Kg/Unit</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </div>

                            <div className="pd-description">
                                <h2 className="description">Description</h2>
                                    <p>
                                        At 70 calories on average, the natural sweetness of a Envy® apple makes it a healthy and just as delicious alternative to a sugary snack.
                                        Envy® in the kitchen, Envy® apples are naturally sweet, so you can reduce the amount of sugar a recipe says you should add. Our apples also hold together well when cooked.
                                        Picked perfect for sweet snackisfaction
                                        Suitable for vegetarians
                                        Product life guaranteed for 3 days including delivery day, with an average of 8.5 days.
                                    </p>
                                <span className="pd-desclaimer">Disclaimer :</span>
                                <p className="disclaimer-part">
                                    Despite our attempts to provide you with the most accurate information possible, the actual packaging, ingredients and colour of the product may sometimes vary Please read the label, directions and warnings carefully before use
                                </p>
                            </div>

                            <div className="pd-specification-section">
                                <h2>Specifications</h2>
                                <div className="specs-area">
                                    <span className="spec-name">Size</span>
                                    <span className="spec-detail">1 KG</span>
                                </div>
                                <div className="specs-area">
                                    <span className="spec-name">Dietary Needs</span>
                                    <span className="spec-detail">Vegetarian</span>
                                </div>
                                <div className="specs-area">
                                    <span className="spec-name">Storage Requirements</span>
                                    <span className="spec-detail">Chilled(2-6)</span>
                                </div>
                                <div className="specs-area">
                                    <span className="spec-name">Item Pack Quantity</span>
                                    <span className="spec-detail">Single</span>
                                </div>
                                <div className="specs-area">
                                    <span className="spec-name">Shelf Life</span>
                                    <span className="spec-detail">3 day</span>
                                </div>
                                <div className="specs-area">
                                    <span className="spec-name">Item Count</span>
                                    <span className="spec-detail">5-6 Pieces</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail
