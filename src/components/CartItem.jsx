import React, { useContext } from 'react'
import { ShopContext } from '../shopContext'
import useHover from '../hooks/useHover'
import './CartItem.css'

export default function CartItem({item}) {
    const [hovered, ref] = useHover()
    const { removeFromCart } = useContext(ShopContext)
    
    const iconClassName = hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'
    
    return (
      <div className='cart-item'>
        <i 
          className={iconClassName} 
          onClick={() => removeFromCart(item.id)}
          ref={ref}
        >
        </i>
        <img src={item.url} alt='' width='130px' />
        <p>$5.99</p>
      </div>
    )
}
