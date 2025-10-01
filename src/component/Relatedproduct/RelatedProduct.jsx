import React from 'react'
import data_product from '../assets/Data';
import Item from '../Item/Item';

const RelatedProduct = () => {
    const filterproduct = data_product.slice(0,6);
     
    return (
        <div className='container'>
            <h1 className="my-5">RELATED PRODUCT</h1>
            <div className="realated_product">
                <div className="row">
                    {filterproduct.map((item,i) => {
                      return  <Item key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price} />
                    })}
                </div>

            </div>

        </div>
    )
}

export default RelatedProduct
