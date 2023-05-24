import React from 'react'
import Banner from "@app/assets/img/hotBanner.png"

function DealBanner() {
  return (
    <div className='container'>
      <div className='banner'>
            <img src={Banner.src} />
      </div>
    </div>
  )
}

export default DealBanner