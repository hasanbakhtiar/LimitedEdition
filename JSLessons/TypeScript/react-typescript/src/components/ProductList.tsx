import React from 'react'
import ProductItem from './ProductItem'
import productData from '../data/productdata'

const ProductList = () => {
  return (
    <div className='row'>
        <ProductItem prodData={productData}/>
    </div>
  )
}

export default ProductList
