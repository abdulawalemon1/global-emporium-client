import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {

    const { _id, name, img, description, price, quantity, supplierName } = product;
    const navigate = useNavigate();
    const navigateToInventory = id => {
        navigate(`/inventory/${_id}`);
    }
    return (
        <div className='single-card'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='px-2'>
                <h2> {name}</h2>
                <h3>Price: {price}</h3>
                <p>Quantity: {quantity}</p>
                <p>Supplier: {supplierName}</p>
                <p>{description}</p>
            </div>
            <button onClick={() => navigateToInventory(_id)} className='button-custom'>Update</button>

        </div>
    );
};

export default Product;