import { useState } from "react"
import { useContext } from "react";
import { Context } from "../pages/Context";
import PropTypes from 'prop-types';
import useHover from "../useHover";


function Image({ className, img }) {
    // const [hovered, setHovered] = useState(false)
    const [hovered, ref] = useHover()

    const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(Context)

    function heartIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon() {
        if (cartItems.some(item => item.id === img.id)) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }


    return (
        <div className={`${className} image-container`} ref={ref} >
            <img src={img.url} className="image" />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

// prop types
Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}


export default Image