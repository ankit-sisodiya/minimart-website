import React from 'react'
import Banner from "@app/assets/img/hotBanner.png"
import Image from 'next/image'

function DealBanner() {
  return (
    <div className='container'>
      <div className='banner mb-5'>
            <Image src={Banner.src} alt="" height={200} width={500}/>
      </div>
    </div>
  )
}

export default DealBanner
