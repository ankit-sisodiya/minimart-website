import React from 'react'
import Banner from "../../assets/img/new-product-banner.png"

function NewproductBanner() {
  return (
    <div className='container'>
      <div className='banner'>
            <img src={Banner.src} />
      </div>
    </div>
  )
}

export default NewproductBanner
