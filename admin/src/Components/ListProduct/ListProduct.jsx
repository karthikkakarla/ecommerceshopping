import React,{useState, useEffect} from 'react';
import './ListProduct.css';
import removeicon from '../../assets/remove_icon.png';

const ListProduct =()=>{
 const[allproducts, setAllProducts] = useState([]);

 const fetchInfo = async()=>{
  await fetch('https://ecommerceshopping.onrender.com/allproducts')
  .then((res)=>res.json())
  .then((data)=>{setAllProducts(data)})
 }
useEffect(()=>{
  fetchInfo();
},[])

const remove_product = async(id) =>{
  await fetch('https://ecommerceshopping.onrender.com/removeproduct', {
    method:'POST',
    headers:{
      Accept:'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id:id})
  })
  await fetchInfo();
}
  return(
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>old_price</p>
        <p>new_price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product,index)=>{
          return <><div key={index} className='listproduct-format-main listproduct-format'>
               <img className='listproduct-product-icon' src={product.image} alt="" />
               <p>{product.name}</p>
               <p>RS. {product.old_price}</p>
               <p>RS. {product.new_price}</p>
               <p>{product.category}</p>
               <img onClick={()=>{remove_product(product.id)}} className='listproduct-remove-icon' src={removeicon}alt="" />
          </div>
           <hr />
           </>
        })}
      </div>
    </div>
  )
}

export default ListProduct;