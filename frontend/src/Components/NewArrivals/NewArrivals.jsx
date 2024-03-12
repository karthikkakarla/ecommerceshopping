import React, { useEffect, useState } from 'react';
import './NewArrivals.css';
// import  new_arrivals from '../Assets/new_arrivals';

import Item from '../Item/Item';

const NewArrivals = () =>{

  const[new_arrivals, setnew_arrivals] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newarrivals')
    .then((res)=>res.json())
    .then((data)=>setnew_arrivals(data));
  },[]);
  return(
    <div className='newarrivals'>
     <h1>New Arrivals</h1>
     <hr />
     <div className='arrivals'>
      {new_arrivals.map((item,i)=>{
        return <Item key={i}id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      })}
     </div>
    </div>
  )
}

export default NewArrivals;