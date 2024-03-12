import React, {useContext} from "react";
import './ProductDisplay.css';
import { HomeContext } from "../../Context/HomeContext";

const ProductDisplay = (props) =>{
  const {product} = props;
  const {addToCart} = useContext(HomeContext);

  return(
    <div className="productdisplay">
         <div className="display-left">
       <div className="display-imglist">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
       </div>
       <div className="displayimg">
        <img className="display-main-img" src={product.image} alt="" />
       </div>
         </div>
         <div className="display-right">
             <h1>{product.name}</h1>
             <div className="display-right-star">
              {/* <img src="" alt="" /> */}
              <p>Reviews :(122)</p>
             </div>
             <div className="display-right-prices">
                 <div className="display-right-price-old">RS. {product.old_price}</div>
                 <div className="display-right-price-new">Rs. {product.new_price}</div>
             </div>
             <div className="display-right-description">
             Oral hygiene is the practice of keeping your mouth clean and disease-free. 
             </div>
             <div className="display-right-size">
              <h1>Select Size</h1>
              <div className="display-right-sizes">
                 <div>S</div>
                 <div>M</div>
                 <div>L</div>
                 <div>XL</div>
                 <div>XXL</div>
              </div>
             </div>
             <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
             <p className="display-right-category"><span>Category</span>Oral, teeth,tongue,dentures</p>
             <p className="display-right-category"><span>Tags</span>Oral, teeth,tongue,dentures</p>
         </div>
    </div>
  )
}

export default ProductDisplay;