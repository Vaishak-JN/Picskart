import { useContext, useState } from "react";
import { Context } from "../pages/Context";
import { CartItem } from "./CartItem";

export function Cart() {
    const { cartItems, setCartItems } = useContext(Context)
    // console.log(cartItems)
    const cartItemElements = cartItems.map(item => <CartItem key={item.id} item={item} />)
    const [ordered, setOrdered] = useState(false)



    function order() {
        if (cartItems.length) {
            setOrdered(true)
            setTimeout(() => {
                setCartItems([])
                setOrdered(false)
            }, 3000);
        }

    }

    const totalCost = (cartItems.length * 5.99).toLocaleString("en-US", { style: "currency", currency: "USD" })
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total:{totalCost} </p>
            <div className="order-button">
                {cartItemElements.length > 0 ? <button onClick={() => order()}>{ordered ? "Ordering..." : "Place Order"}</button> : <p>You have no items in your cart.</p>}
            </div>
        </main>
    );
}

