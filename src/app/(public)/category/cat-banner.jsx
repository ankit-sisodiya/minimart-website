import React from 'react'
import Banner from "@app/assets/img/catBanner.png"
import Image from 'next/image'

function CatBanner() {
  return (
    <div className='container'>
      <div className='banner'>
            <Image src={Banner.src} alt="" height={250} width={500}/>
      </div>
    </div>
  )
}

export default CatBanner
