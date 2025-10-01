import React from 'react'

const Breadcrump = (props) => {
    const { product } = props;

    return (
        <div className='breadcrump'>
            <p>Home<i className="bi bi-chevron-right"></i>SHOP<i className="bi bi-chevron-right"></i>
            {product.category}<i className="bi bi-chevron-right"></i>{product.name}</p>
           
        </div>
    )
}

export default Breadcrump
