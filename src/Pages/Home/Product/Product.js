import React from 'react';

const Product = ({ product }) => {

    const { name, img, description, price, quantity, supplierName } = product;

    return (
        <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Product;