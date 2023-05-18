import React from 'react'
import Banner from "@app/assets/img/catBanner.png"

function CatBanner() {
  return (
    <div className='container'>
      <div className='banner'>
            <img src={Banner.src} />
      </div>
    </div>
  )
}

export default CatBanner
