import React, { useEffect, useState } from 'react';
import './BestSeller.css';
// import data_product from '../Assets/data';
import Item from '../Item/Item';



const BestSeller = ()=>{

  const[bestsellers,setbestsellers] = useState([]);

  useEffect(()=>{
    // fetch('http://localhost:4000/bestsellers')
     fetch('https://ecommerceshopping.onrender.com/bestsellers')
     .then((res)=>res.json())
    .then((data)=>setbestsellers(data));
  },[])
  return(

    <div className='bestseller'>
      <h1>Best Sellers</h1>
      <hr />
     <div className="bestseller-item">
      {bestsellers.map((item,i)=>{
           return <Item key={i}id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
      })}
     </div>
    </div>
  )
}

export default BestSeller;