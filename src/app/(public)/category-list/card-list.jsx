"use client";
import React from "react";
import Banner from "@app/assets/img/banner2.png";
import CommonCard from "@app/components/common-card";
import Link from "next/link";
import Image from "next/image";

function CardList() {
  const ListCard = [1, 2, 3, 4, 5, 6];

  return (
    <div className="cardListing">
      <div className="banner">
        <Image src={Banner.src} alt="" height={100} width={500}/>
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
