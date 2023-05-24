import React from 'react';
import secondBanner1 from '../assets/img/sb-left.png';  
import secondBanner2 from '../assets/img/sb-right.png';  
import Image from 'next/image';

const Banner2 = () => {
  return (
    <div>
        <div className="second-banner">
                <div className="row">
                        <div className="col-md-3">
                            <div className="second-banner-left">
                                <Image src={secondBanner1.src} alt="Banner Image" width={500} height={330}/>
                            </div>
                        </div>
                        <div className="col-md-9">
                          <div className="second-banner-right">
                            <Image src={secondBanner2.src} alt="Banner Image" width={500} height={100}/>
                          </div>
                        </div>
                </div>
        </div>
    </div>
  )
}

export default Banner2;
