import React from "react";
import Banner1 from "@app/assets/img/thirdBanner1.png";
import Banner2 from "@app/assets/img/thirdBanner2.png";
import Image from "next/image";

function Banner() {
  return (
    <div className="cartbannerSection">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="bannerImg">
              <Image src={Banner1.src} height={250} width={500} alt=""/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bannerImg">
              <Image src={Banner2.src} height={250} width={500} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
