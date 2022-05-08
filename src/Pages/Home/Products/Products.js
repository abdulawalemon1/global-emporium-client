import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/UseProducts';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div id="products" className='container'>
            <h2 className='products-title'>Products: {products.length}</h2>
            <div className="products-container">

                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    >
                    </Product>)
                }

            </div>
            <div className='my-4 text-end'>
                <Link to='/manageInventory' className='btn btn-outline-dark p-3'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Products;