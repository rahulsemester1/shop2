import React,{useContext} from 'react'
import "./ProductDisplay.css"
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

function ProductDisplay({product}) {
   const{addToCart}=useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
         <div className="productdisplay-img-list">
            <img src={product.image}/>
            <img src={product.image}/>
            <img src={product.image}/>
            <img src={product.image}/>
         </div>
         <div className="productdisplay-img">
            <img className="productdisplay-main-img" src={product.image}/>
         </div>
      </div>

      <div className="productdisplay-right">
         <h1>{product.name}</h1>
         <div className="productdisplay-right-star">
         <img src={star_icon}/>
         <img src={star_icon}/>
         <img src={star_icon}/>
         <img src={star_icon}/>
         <img src={star_dull_icon}/>
         <p>122</p>
         </div>
         <div className="productdisplay-right-prices">
            <div className="product-right-prices-old">${product.old_price}</div>
            <div className="product-right-prices-new">$  {product.new_price}</div>
         </div>
         <div className="productdisplay-right-description">
            A lightweight,usually knitted,pullover shirts,close fitted and with a 
            round neckline and short sleeves,
             worn as an undershirt or outer garment
         </div>
         <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-size">
               <div>S</div>
               <div>M</div>
               <div>L</div>
               <div>XL</div>
               <div>XXL</div>
            </div>
         </div>
         <button onClick={()=>{addToCart(product.id)}} disabled={!localStorage.getItem("authToken")}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductDisplay