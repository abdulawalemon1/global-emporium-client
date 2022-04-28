import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2>Products: {products.length}</h2>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                >
                </Product>)
            }
        </div>
    );
};

export default Products;