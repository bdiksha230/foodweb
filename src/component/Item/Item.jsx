import React from 'react'
import './Item.css'
import { NavLink } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className="col-md-4">
            <div className="item">
                <div className="card"  >
                    <NavLink to={`/product/${props.id}`}>
                        <img src={props.image} onClick={window.scrollTo(0, 0)} className="card-img-top" alt="..." />
                    </NavLink>

                    <div className="card-body">
                        <div className="d-flex">
                            <div className="item_detail">
                                <h3 className="card-title">{props.name}</h3>
                                <span className="card-text"> ${props.new_price}</span>
                                <span className="card-text old_price"> ${props.old_price}</span>
                            </div>
                            <div className="addtocart_buton">
                                <button className='btn btn-danger' type="button">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Item
