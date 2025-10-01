import React, { createContext, useState } from "react";
import allproduct from "../component/assets/Allproducts";

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};

    for(let i= 0; i < allproduct.length; i++){
        // initialy each product quantity 0 in cart
        cart[allproduct[i].id] = 0;  
    }
    return cart;
};
 

const ShopContextProvider = (props) => {

    const [cartItem, setCartitem] = useState(getDefaultCart());
    
    console.log(cartItem);

    const addToCart = (itemId) => {
        setCartitem((prev) => ({
            ...prev, 
            [itemId]: prev[itemId] + 1,
        }));
        console.log(addToCart);
       console.log("Added item:", itemId, "Cart:", cartItem);
        
    }
    const removeCart = (itemId) => {
        setCartitem((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1,
        }));
        
    };
    const contextvalue = {allproduct, cartItem, addToCart, removeCart};

    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;