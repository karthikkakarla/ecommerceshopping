import React from 'react';
import './ProductsRelated.css';
import data_product from  '../Assets/data';
import Item from  '../Item/Item';


const ProductsRelated = () =>{
  return(
    <div className='productsrelated'>
       <h1>Products Related to this Item</h1>
       <hr />
       <div className="productrelated-item">
        {data_product.map((item,i)=>{
          return <Item key={i}id={item.id} name={item.name} image={item.image} new_price={item.new_price}/>
        })}
       </div>
    </div>
  )
}

export default ProductsRelated;