import React, { useContext } from 'react'
import './Product.css'
import { ShopContext } from '../shopContext'
import useHover from '../hooks/useHover'

export default function Product({ img }) {
    const [hovered, ref] = useHover()
    const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(ShopContext)
    
    function heartIcon() {
      if(img.isFavorite) {
        return <i className='ri-heart-fill favorite' onClick={() => toggleFavorite(img.id)}></i>
      } else if(hovered) {
        return <i className='ri-heart-line favorite' onClick={() => toggleFavorite(img.id)}></i>
      }
    }
    
    function cartIcon() {
      const alreadyInCart = cartItems.some(item => item.id === img.id)
      if(alreadyInCart) {
        return <i className='ri-shopping-cart-fill cart' onClick={() => removeFromCart(img.id)}></i>
      } else if(hovered) {
        return <i className='ri-add-circle-line cart' onClick={() => addToCart(img)}></i>
      }
    }

    return (
      <div 
        className='product-img__container'
        ref={ref}
      >
        <img src={img.url} alt='' className='image-grid'/>
        {heartIcon()}
        {cartIcon()}
      </div>
    )
}
