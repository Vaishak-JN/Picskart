import { Switch, Route, Link, Redirect } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../pages/Context";

export function Header() {
    const { cartItems } = useContext(Context)

    // function cart() {
    //     if (cartItems.length > 0) {
    //         return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i >
    //     } else {
    //         return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
    //     }
    // }

    const cartLength = cartItems.length
    return (
        <header>
            <Link to="/">
                <h2>Picskart</h2>
            </Link>
            <Link to="/cart">
                {/* {cart()} */}
                {/* {cartItems.length > 0 ? <i className="ri-shopping-cart-fill ri-fw ri-2x"></i > : <i className="ri-shopping-cart-line ri-fw ri-2x"></i>} */}
                <i className={cartLength ? "ri-shopping-cart-fill ri-fw ri-2x" : "ri-shopping-cart-line ri-fw ri-2x"}></i>
            </Link>

        </header>
    );
}
