import React, {useContext} from 'react';
import {HomeContext} from '../Context/HomeContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import ProductsRelated from '../Components/ProductsRelated/ProductsRelated';


const Product = ()=>{
  const {all_product} = useContext(HomeContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId))
  return(
    <div>
      <ProductDisplay product={product} />
      <Description />
      <ProductsRelated />
    </div>
  )
}

export default Product;