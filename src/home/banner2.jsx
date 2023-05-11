import React from 'react';
import secondBanner1 from '../assets/img/secondBanner1.png';  
import secondBanner2 from '../assets/img/secondBanner3.png'; 
import secondBanner3 from '../assets/img/secondBanner4.png'; 
import secondBanner4 from '../assets/img/secondBanner5.png'; 

const Banner2 = () => {
  return (
    <div>
        <div className="second-banner">
                <div className="row">
                        <div className="col-md-3">
                            <div className="second-banner-left">
                                <img src={secondBanner1.src} alt="Banner Image" className="sb-first"/>
                            </div>
                        </div>
                        <div className="col-md-9">
                          <div className="row mb-4">
                                  <div className="col-md-5">
                                      <img src={secondBanner2.src} alt="Banner Image" className="sb-second"/>
                                  </div>
                                  <div className="col-md-7">
                                      <img src={secondBanner3.src} alt="Banner Image" className="sb-third"/>
                                  </div>
                          </div>
                          <div className="second-banner-bottom-image">
                              <img src={secondBanner4.src} alt="Banner Image" className="sb-fourth"/>
                          </div>
                        </div>
                </div>
        </div>
    </div>
  )
}

export default Banner2;
