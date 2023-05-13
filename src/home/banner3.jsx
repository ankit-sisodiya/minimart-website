import React from 'react'
import thirdBanner1 from '../assets/img/thirdBanner1.png'
import thirdBanner2 from '../assets/img/thirdBanner2.png'

const Banner3 = () => {
  return (
    <div>
      <div className="thirdBanner">
        <div className="row">
            <div className="thirdBanner-section">
                <div className="col-md-6">
                    <img src={thirdBanner1.src} alt="Banner Image" />
                </div>
                <div className="col-md-6">
                    <img src={thirdBanner2.src} alt="Banner Image" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner3
