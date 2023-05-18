import React from "react";
import Banner1 from "../../assets/img/thirdBanner1.png";
import Banner2 from "../../assets/img/thirdBanner2.png";

function Banner() {
  return (
    <div className="cartbannerSection">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="bannerImg">
              <img src={Banner1.src} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="bannerImg">
              <img src={Banner2.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
