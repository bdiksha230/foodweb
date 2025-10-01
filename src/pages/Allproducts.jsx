import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Item from '../component/Item/Item';

const Allproducts = (props) => {
    const { allproduct } = useContext(ShopContext);
    const [SelectedCategory, setSelectedCategory] = useState("All");
    // default showing all products

    // filter product based on selected category
    const filteredProducts = SelectedCategory === "All" ? allproduct : allproduct.filter(item => item.category === SelectedCategory);

    return (
        <div>
            <img className="shop_banners" src={props.banner} alt="" />
            <div className="shop_category_indexsort">
                <p>
                    <span>showing 1-12</span> out of 36 products
                </p>
            </div>
            <div className="show_all_category">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="all_category_name">
                                <div className="ul">
                                    <li className="category_name" onClick={() => setSelectedCategory("All")}>All</li>
                                    <li className="category_name" onClick={() => setSelectedCategory("burger")}>Burgur</li>
                                    <li className="category_name" onClick={() => setSelectedCategory("pizza")}>Pizza</li>
                                    <li className="category_name" onClick={() => setSelectedCategory("sandwich")}>sandwich</li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="show_respective_products row">
                                {filteredProducts.map((item) => (                                
                                        <Item  key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        image={item.image}
                                        new_price = {item.new_price}
                                        old_price = {item.old_price}
                                        /> 
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Allproducts
