import React from 'react'
import thirdBanner1 from '../assets/img/thirdBanner1.png'
import thirdBanner2 from '../assets/img/thirdBanner2.png'
import Image from 'next/image'

const Banner3 = () => {
  return (
    <div className='thirdBanner'>
      <div className="container">
        <div className="row">
            <div className="thirdBanner-section">
                <div className="col-md-6">
                    <Image src={thirdBanner1.src} alt="Banner Image" height={100} width={500} />
                </div>
                <div className="col-md-6">
                    <Image src={thirdBanner2.src} alt="Banner Image" height={100} width={500} />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner3
