import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../.firebase.init';

const Myitem = () => {
    const [item, setItem] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const getItem = async () => {
            const email = user.email;
            const url = `http://localhost:5000/item?email=${email}`;
            const { data } = await axios.get(url);
            console.log(data);
            setItem(data);

        }
        getItem();

    }, [user])
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = item.filter(product => product._id !== id);
                    setItem(remaining);

                })
        }
    }
    return (
        <div>
            <h2 className='text-center '>My items: {item.length}</h2>
            <div className="products-container">

                {
                    item.map(product =>
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
    );
};

export default Myitem;