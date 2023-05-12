import React from 'react';
import secondBanner1 from '../assets/img/sb-left.png';  
import secondBanner2 from '../assets/img/sb-right.png';  

const Banner2 = () => {
  return (
    <div>
        <div className="second-banner">
                <div className="row">
                        <div className="col-md-3">
                            <div className="second-banner-left">
                                <img src={secondBanner1.src} alt="Banner Image"/>
                            </div>
                        </div>
                        <div className="col-md-9">
                          <div className="second-banner-right">
                            <img src={secondBanner2.src} alt="Banner Image" />
                          </div>
                        </div>
                </div>
        </div>
    </div>
  )
}

export default Banner2;
