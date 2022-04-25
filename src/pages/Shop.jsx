import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Shop.css'
import Product from '../components/Product'
import { ShopContext } from '../shopContext'

export default function Shop() {
    const { allProducts } = useContext(ShopContext)
    
    const productElements = allProducts.map((img, i) => (
      <Product key={img.id} img={img} />
    ))
    
    return (
      <main className='Shop'>
        <Link to='/cart'>Go to Cart</Link>
        <div className='products'>
          {productElements}
        </div>
      </main>
    )
}
