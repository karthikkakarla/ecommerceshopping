import React, {useContext} from 'react';
import './CartItems.css';
import {HomeContext} from '../../Context/HomeContext';
import remove_icon from '../Assets/remove_icon.png';

const CartItems = ()=>{
  const {all_product, cartItems,removeFromCart,getTotalCartAmount,} = useContext(HomeContext);
  return(
    <div className='cartitems'>
           <div className="cartitem-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
           </div>
           <hr />
          {all_product.map((e)=>{
              if(cartItems[e.id]>0){
                return( <div>
                   <div className='cartitems-format cartitem-main'>
             <img src={e.image} alt="" className='cart-product-icon'/>
             <p>{e.name}</p>
             <p>{e.new_price}</p>
             <button className='cart-quantity'>{cartItems[e.id]}</button>
             <p>RS. {e.new_price * cartItems[e.id]}</p>
             <img className='cart-remove-icon' src={remove_icon} alt="" onClick={()=> {removeFromCart(e.id)}}  />
           </div>
           <hr />
                </div>)
              }
              return null;
          })}
          <div className="cartitems-down">
            <div className="cartitems-total">
              <h1>Cart Totals</h1>
              <div>
                <div className="cart-total-items">
                  <p>subtotal</p>
                  <p>{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-items">
                  <p>Shipping Fee</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className='cart-total-items'>
                  <h3>Total</h3>
                  <h3>{getTotalCartAmount()}</h3>
                </div>
              </div>
              <button>Procced to checkout</button>
            </div>
            <div className="cartitems-promocode">
              <p>If you have a promocode, Enter it here</p>
              <div className="cartitem-promobox">
                <input type="text" name="" id="" placeholder='promocode'/>
                <button>Submit</button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default CartItems;
