import React from 'react'
import Banner from "@app/assets/img/new-product-banner.png"
import Image from 'next/image'

function NewproductBanner() {
  return (
    <div className='container'>
      <div className='banner'>
            <Image src={Banner.src} height={200} width={700} alt=""/>
      </div>
    </div>
  )
}

export default NewproductBanner
