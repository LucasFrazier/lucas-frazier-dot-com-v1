import React, { useState, useEffect } from 'react'

const ShopContext = React.createContext()

function ShopContextProvider({children}) {
    const [allProducts, setAllProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    useEffect(() => {
      async function getProducts() {
        const res = await fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        const data = await res.json()
        setAllProducts(data)
      }
      getProducts()
    }, [])
    
    function toggleFavorite(id) {
        const updatedArr = allProducts.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setAllProducts(updatedArr)
    }
    
    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    
    function emptyCart() {
        setCartItems([])
    }
    
    return (
        <ShopContext.Provider value={{
            allProducts, 
            toggleFavorite, 
            cartItems, 
            addToCart, 
            removeFromCart, 
            emptyCart
        }}>
            {children}
        </ShopContext.Provider>
    )
}

export { ShopContextProvider, ShopContext}
