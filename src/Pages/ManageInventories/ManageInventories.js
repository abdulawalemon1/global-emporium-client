import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const ManageInventories = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://boiling-meadow-89071.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://boiling-meadow-89071.herokuapp.com/product/${id}`;
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

                    <br />
                    <Link to={"/additem"} className=' w-75 btn btn-outline-dark'>Add New Item</Link>
                </div>
                <div className="products-container">

                    {
                        products.map(product =>
                            <div key={product._id} className='single-card'>
                                <div>
                                    <img src={product.img} alt="" />
                                </div>
                                <div className='px-2'>
                                    <h4> {product.name}</h4>
                                    <p>Price: {product.price}</p>
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