import React, { useState } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';


const Nav = () => {

    const [menu, setMenu] = useState();

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
                              to="/">Shop{menu==="shop" ? <hr/>: <></>}</NavLink>
                            </li>
                            <li className="nav-item" onClick={() => {setMenu("allproduct")}}>
                                <NavLink className="nav-link"
                                 to="/allproduct">All Products{menu==="allproduct" ? <hr/>: <></>}</NavLink>
                            </li>
                          
                            <li className="nav-item"   onClick={() => {setMenu("contact")}}>
                                <NavLink className="nav-link"
                               to="/contact">Contact{menu==="contact" ? <hr/>: <></>}</NavLink>
                            </li>



                        </ul>
                        {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
                        <div className="login">
                          <NavLink to="/login">  <button className="btn btn-danger">Login</button></NavLink>
                        </div>

                        <div className="cart">
                           <NavLink to="/cart"> <button className='btn'>Cart</button>
                            <div className="nav_cart_count">0</div></NavLink>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Nav
