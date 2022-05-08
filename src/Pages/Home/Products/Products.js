import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/UseProducts';
import Loading from '../../Shared/Loading/Loading';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {
        try {
            const data = await axios
                .get('http://localhost:5000/product')
                .then(res => {

                    setProducts(res.data)
                    setLoading(true);
                })
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div id="products" className='container'>

            <div className="products-container">

                {
                    loading ?
                        products.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        >
                        </Product>)
                        : <Loading></Loading>
                }

            </div>
            <div className='my-4 text-end'>
                <Link to='/manageInventory' className='btn btn-outline-dark p-3'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Products;