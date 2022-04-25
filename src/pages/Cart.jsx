import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../shopContext'
import CartItem from '../components/CartItem'

function Cart() {
    const [buttonText, setButtonText] = useState('Place Order')
    const { cartItems, emptyCart } = useContext(ShopContext)
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
    
    const cartItemElements = cartItems.map(item => (
      <CartItem key={item.id} item={item} />
    ))
    
    function placeOrder() {
      setButtonText('Ordering...')
      setTimeout(() => {
        setButtonText('Place Order')
        emptyCart()
      }, 3000)
    }
    
    return (
      <section className='cart-page'>
        <h1>Check out</h1>
        {cartItemElements}
        <p className='total-cost'>Total: {totalCostDisplay}</p>
        {
          cartItems.length > 0 ?
          <div className='order-button'>
            <button onClick={placeOrder}>{buttonText}</button>
          </div> :
          <p>You have no items in your cart.</p>
        }
        <Link to='/shop'>Back to Shop</Link>
      </section>
    )
}

export default Cart