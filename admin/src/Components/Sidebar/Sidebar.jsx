import React from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom';
import shoppingcart from '../../assets/shopping-cart.svg';
import productlist from '../../assets/productlist.png';

const Sidebar =()=>{
  return(
    <div className='sidebar'>
     <Link to={'/addproduct'} style={{textDecoration :'none'}}>
      <div className='sidebar-item'>
          <img src={shoppingcart} alt="" />
          <p>Add Product</p>
      </div>
     </Link>

     <Link to={'/listproduct'} style={{textDecoration :'none'}}>
      <div className='sidebar-item'>
          <img src={productlist} alt="" />
          <p>Product List</p>
      </div>
     </Link>
    </div>
  )
}

export default Sidebar;