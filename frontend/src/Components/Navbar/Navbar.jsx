import React, { useContext, useRef } from 'react';
import { useState } from 'react';
import {Link}  from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.png'
import nav_dropdown from '../Assets/nav_dropdown.png';
import { HomeContext } from '../../Context/HomeContext';


const Navbar = ()=>{
  const[menu, setMenu] = useState("Home");
  const {getTotalCartItems} = useContext(HomeContext);
  const menuRef = useRef();

  const navbar_toggle = (e) =>{
      menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open');
    }

  return (
    <div className="navbar">
     <div className="nav-logo">
      <img src={logo} alt="" />
      <p>Shop++</p>
     </div>
     <img className='nav-dropdown' onClick={navbar_toggle} src={nav_dropdown} alt="" />
     <ul ref={menuRef} className="nav-menu">
      <li onClick={()=> {setMenu("home")}}><Link style={{textDecoration: 'none'}} to ="/">Home</Link>{menu === "home" ? <hr/> : <></>}</li>
      <li onClick={()=> {setMenu("oral")}}><Link style={{textDecoration: 'none'}} to='/oral'>OralCare</Link>{menu === "oral" ? <hr/> : <></>}</li>
      <li onClick={()=> {setMenu("hair")}}><Link style={{textDecoration: 'none'}} to='/hair'>HairCare</Link>{menu === "hair" ? <hr/> : <></>}</li>
      <li onClick={()=> {setMenu("body")}}><Link style={{textDecoration: 'none'}} to='/body'>BodyCare</Link>{menu === "body" ? <hr/> : <></>}</li>
     </ul>
     <div className="nav-login-cart">
      {localStorage.getItem('auth-token')? <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/")}}>Logout</button> : <Link to='/login'><button>Login</button></Link>}
      
      <Link to='/cart'><img src={cart_icon} alt="" /></Link>
      <div className="nav-cart-count">{getTotalCartItems()}</div>
     </div>
    </div>
  )
}

export default Navbar;