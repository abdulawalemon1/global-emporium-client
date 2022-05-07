import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryProduct from '../Home/Product/InventoryProduct/InventoryProduct';


const ManageInventories = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h2 className='text-center'>Manage Inventory</h2>
            <div className='d-flex'>
                <div className='container text-center'>
                    <Link to={'/manageInventory'} className='w-75 btn btn-outline-primary'>See All Items</Link>
                    <br />
                    <Link to={"/additem"} className=' w-75 btn btn-outline-success'>Add New Item</Link>
                </div>
                <div className="products-container">

                    {
                        products.map(product => <InventoryProduct
                            key={product._id}
                            product={product}
                        >
                        </InventoryProduct>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ManageInventories;