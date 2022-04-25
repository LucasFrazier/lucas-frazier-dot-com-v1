import React, { useState, useEffect } from 'react'

const ShopContext = React.createContext()

function ShopContextProvider({children}) {
    const [allProducts, setallProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setallProducts(data))
    }, [])
    
    function toggleFavorite(id) {
        const updatedArr = allProducts.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setallProducts(updatedArr)
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
