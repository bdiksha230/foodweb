import React, { createContext, useEffect, useState } from "react";
import allproduct from "../component/assets/Allproducts";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};

    for (let i = 0; i < allproduct.length; i++) {
        // initialy each product quantity 0 in cart
        cart[allproduct[i].id] = 0;
    }
    return cart;
};


const ShopContextProvider = (props) => {

    const [cartItem, setCartitem] = useState(getDefaultCart());

    console.log(cartItem);

    // Add to cart
    const addToCart = (itemId) => {
        try {
            setCartitem((prev) => ({
                ...prev,
                [itemId]: (prev[itemId] || 0) + 1,
            }));
            console.log(addToCart);
            console.log("Added item:", itemId, "Cart:", cartItem);
        } catch (err) {
            console.log("error adding to cart error", err);
        }

    };

    // Romove item from cart
    const removeCart = (itemId) => {
        try {
            setCartitem((prev) => ({
                ...prev,
                [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
            }));
        } catch (err) {
            console.log("failed to remove item", err);
        }

    };
    useEffect(() => {
        console.log("cart changed", cartItem);
    }, [cartItem]);
    
    const contextvalue = { allproduct, cartItem, addToCart, removeCart };

    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;