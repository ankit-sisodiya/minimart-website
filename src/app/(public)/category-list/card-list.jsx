"use client";
import React from "react";
import Banner from "../../assets/img/banner2.png";
import { BsHeart, BsStar } from "react-icons/bs";
import ProductImg from "../../assets/img/product/product.png";
import Form from "react-bootstrap/Form";
import CommonCard from "@app/components/common-card";
import Link from "next/link";

function CardList() {
  const ListCard = [1, 2, 3, 4, 5, 6, ];

  return (
    <div className="cardListing">
      <div className="banner">
        <img src={Banner.src} />
      </div>
      <div className="listing">
        <div className="row">
          {ListCard.map((x, i) => {
            return (
              <div key={i} className="col-md-4">
                <Link href="/product-detail"><CommonCard /></Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardList;
