import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Breadcrump from '../component/Breadcrump/Breadcrump';
import ProductDisplay from '../component/Productdesplay/ProductDisplay';
import DiscriptionBox from '../component/Discriptionbox/DiscriptionBox';
import RelatedProduct from '../component/Relatedproduct/RelatedProduct';

const Product = () => {
  const {allproduct} = useContext(ShopContext);
  const {productid} = useParams();
  const product = allproduct.find((e) => e.id=== Number(productid)); 

  return (
    <div className=''>
      <Breadcrump product={product} />
       <ProductDisplay product={product} />
       <DiscriptionBox />
       <RelatedProduct />
    </div>
  )
}

export default Product
