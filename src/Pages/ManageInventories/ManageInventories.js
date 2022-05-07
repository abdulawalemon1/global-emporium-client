import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const ManageInventories = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);

                })
        }
    }
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
                        products.map(product =>
                            <div key={product._id} className='single-card'>
                                <div>
                                    <img src={product.img} alt="" />
                                </div>
                                <div className='px-2'>
                                    <h2> {product.name}</h2>
                                    <h3>Price: {product.price}</h3>
                                    <p>Quantity: {product.quantity}</p>
                                    <p>Supplier: {product.supplierName}</p>
                                    <p>{product.description}</p>
                                </div>
                                <button onClick={() => handleDelete(product._id)} className='button-custom'>Delete</button>

                            </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ManageInventories;