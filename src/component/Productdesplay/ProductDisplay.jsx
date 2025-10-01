import React, { useContext } from 'react';
import './productdisplay.css'
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-6">
                    <img className="product-detail-img" src={product.image} alt="" />
                </div>
                <div className="col-md-6">
                    <h1>{product.name}</h1>
                    <p>
                        <span>${product.new_price}</span>
                        <span>${product.old_price}</span>
                    </p>
                    <div className="rating">
                        <span>★★★★☆</span>
                    </div>
                    <button onClick={() => {addToCart(product.id)}}>Add to cart</button>
                </div>
            </div>
             

        </div>
    )
}

export default ProductDisplay
