import React from 'react';
import './CSS/HomeCategory.css'
import { useContext } from 'react';
import {HomeContext} from '../Context/HomeContext';
import Item from '../Components/Item/Item'



const HomeCategory = (props)=>{
  const {all_product} = useContext(HomeContext);
  return(
    <div className='home-category'>
     <img className='homecategory-banner' src={props.banner} alt="" />
     <div className="homecategory-index">
      <p>
        <span>Showing 1-12 </span>Out of 36 Products
        </p>
      <div className="homecategory-sort">
        SortBy <img src="" alt="" />
      </div>
     </div>
     <div className="homecategory-products">
       {all_product.map((item,i)=>{
        if(props.category === item.category){
          return <Item key={i}id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> 
        }else{
          return null;
        } 
      })}
     </div>
    </div>
  )
}

export default HomeCategory;