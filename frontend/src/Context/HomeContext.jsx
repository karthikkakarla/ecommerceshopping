import React, { createContext, useEffect, useState} from 'react';


export const HomeContext = createContext(null);

const getDeafaultCart = () =>{
  let cart= {}
  for (let index = 0; index < 300+1; index++) {
   cart[index] =0; 
  }
  return cart;
}


const HomeContextProvider = (props) =>{
  const[all_product, setAll_Product]= useState([]);
  const[cartItems,setCartItems]= useState(getDeafaultCart());
  
  useEffect(()=>{
          fetch('http://localhost:4000/allproducts')
          .then((res)=>res.json())
          .then((data)=> setAll_Product(data))
  },[])
   const addToCart = (itemId)=>{
   setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
  }

  const removeFromCart = (itemId)=>{
     setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
   }
    
   const getTotalCartAmount = () =>{
       let totalAmount = 0;
       for(const item in cartItems)
       {
        if(cartItems[item]>0)
        {
          let itemInfo = all_product.find((product)=> product.id === Number(item))
          totalAmount += itemInfo.new_price * cartItems[item];
        }
       }
       return totalAmount;
   }

   const getTotalCartItems= ()=>{
    let totalItem = 0;
    for(const item in cartItems){
      if(cartItems[item]> 0){
        totalItem += cartItems[item];
      }
    }
    return totalItem;
   }
   
   const contextValue = {getTotalCartItems, getTotalCartAmount,all_product, cartItems,addToCart, removeFromCart};

  return(
    <HomeContext.Provider value={contextValue}>
      {props.children}
    </HomeContext.Provider>
  )
}

export default HomeContextProvider; 