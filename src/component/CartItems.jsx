import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartItems = () => {
    const { allproduct, cartItem, removeCart } = useContext(ShopContext);
    return (
        <div className="container">
            <div className="cartitem_formate_main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>

            </div>
            <hr />
            <div className="">
                {allproduct.map((e) => {
                     if (cartItem[e.id] > 0) {
                        return <div>
                            <div className="cartitem_formate">
                                <img src={e.image} alt="" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button>{cartItem[e.id]}</button>
                                <p>{e.new_price * cartItem[e.id]}</p>
                                <span onClick={() => { removeCart(e.id) }}>remove</span>
                            </div>
                        </div>
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default CartItems
