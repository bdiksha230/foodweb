import React from 'react'
import data_product from '../assets/Data'
import Item from '../Item/Item'

const Popular = () => {

    return (
        <div className="popular">
            <div className="container">
                <h1>Our best Food</h1>
                <hr />

                <div className="popular-item">
                    <div className="row">
                        {data_product.filter((_, index) => index < 6).map(({id, name, image, new_price, old_price}) => {
                            return <Item key={id}
                                id={id}
                                name={name}
                                image={image}
                                new_price={new_price}
                                old_price={old_price} />
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular
