import React, { useContext } from 'react';
import './CSS/shopcategory.css';
import { ShopContext } from '../context/ShopContext';
import Item from '../component/Item/Item';


const ShopCategory = (props) => {

  const { allproduct } = useContext(ShopContext);


  return (
    <div className="shopcategorypage">
      <img className="shop_banners" src={props.banner} alt="" />
      <div className="shop_category_indexsort">
        <p>
          <span>showing 1-12</span> out of 36 products
        </p>
      </div>
      <div className="shopcategory_sort">
        sort by dropdown button
      </div>
      <div className="shopcategory_products">
        <div className="container">
          <div className="row">


            {allproduct.map((item, i) => {

              if (props.category === item.category) {
                return <Item key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price} />
              }
              else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopCategory
