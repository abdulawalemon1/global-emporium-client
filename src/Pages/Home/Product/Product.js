import React from 'react';
import './Product.css';

const Product = ({ product }) => {

    const { name, img, description, price, quantity, supplierName } = product;

    return (
        <div className='single-card'>
            <img src={img} alt="" />
            <h2> {name}</h2>
            <h3>Price: {price}</h3>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplierName}</p>
            <p>{description}</p>
            <button className='button-custom'>Update</button>

        </div>
    );
};

export default Product;