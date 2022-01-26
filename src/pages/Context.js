import React, { useEffect, useState } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {

    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])


    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if (photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })

        setAllPhotos(updatedArr)
    }

    function addToCart(newItem) {
        setCartItems([...cartItems, newItem])

    }
    // console.log(cartItems)

    function removeFromCart(img) {
        const updatedArr = cartItems.filter(item => item.id !== img.id)
        setCartItems(updatedArr)
    }
    console.log(cartItems)

    return (
        <Context.Provider value={{ allPhotos, setAllPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, setCartItems }} >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }