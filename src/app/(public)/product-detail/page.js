import React from 'react'
import ProductDetail from './productDetail';
import ProductContent from './productContent';
import SimilarCard from '../cart/similar-card';

const page = () => {
  return (
    <div>
        <ProductDetail/>
        <SimilarCard/>
        <ProductContent/>
    </div>
  )
}

export default page;
