import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2 className='products-title'>Products: {products.length}</h2>
            <div className="products-container">

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    >
                    </Product>)
                }

            </div>

        </div>
    );
};

export default Products;