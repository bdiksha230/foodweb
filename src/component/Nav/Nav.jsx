import React, { useContext, useState, useEffect } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';


const Nav = () => {

    const [menu, setMenu] = useState();
    const [cartTotalItem, setCartTotalItem] = useState(0);
    const {cartCount} = useContext(ShopContext);


    // run when cart item changes (similart to component did mount);
    useEffect(() => {
        let total = 0;
       if (cartCount && typeof cartCount === "object") {
      Object.values(cartCount).forEach((qty) => {
        if (typeof qty === "number" && qty > 0) {
          total += qty;
        }
      });
    }

        setCartTotalItem(total);
        console.log("total two = ", total);
        console.log("total three = ", setCartTotalItem);
    }, [cartCount]);
    // depency array runn only when art item changes

    useEffect(() => {
        // similart to component didmount
        console.log("navbar mounted");
        return () => {
            // similart to componentwillmount
            console.log("navbar unmount")
        };
    }, []);
    console.log("tooooo",cartCount);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">foodweb</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="delete-collapse delete-navbar-collapse d-flex" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"    onClick={() => {setMenu("shop")}} >
                                <NavLink className="nav-link active"
                              to="/foodweb">Shop{menu==="shop" ? <hr/>: <></>}</NavLink>
                            </li>
                            <li className="nav-item" onClick={() => {setMenu("allproduct")}}>
                                <NavLink className="nav-link"
                                 to="/foodweb/allproduct">All Products{menu==="allproduct" ? <hr/>: <></>}</NavLink>
                            </li>
                          
                            <li className="nav-item"   onClick={() => {setMenu("contact")}}>
                                <NavLink className="nav-link"
                               to="/foodweb/contact">Contact{menu==="contact" ? <hr/>: <></>}</NavLink>
                            </li>



                        </ul>
                        {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
                        <div className="login">
                          <NavLink to="/foodweb/login">  <button className="btn btn-danger">Login</button></NavLink>
                        </div>

                        <div className="cart">
                           <NavLink to="/foodweb/cart"> <button className='btn'>Cart</button>
                            <div className="nav_cart_count">{cartTotalItem}</div></NavLink>
                            
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Nav
