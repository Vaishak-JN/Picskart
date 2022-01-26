import { useContext, useState } from "react";
import { Context } from "../pages/Context";
import PropTypes from 'prop-types';
import useHover from "../useHover";


export function CartItem({ item }) {
    // console.log(item)

    // const [hovered, setHovered] = useState(false)
    const [hovered, ref] = useHover()

    const { removeFromCart } = useContext(Context)

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    return (
        <div className="cart-item">
            <i className={iconClassName} onClick={() => removeFromCart(item)} ref={ref}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    );
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}
