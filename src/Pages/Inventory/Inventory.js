import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useProducts from '../../Hooks/UseProducts';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [reload, setIsReload] = useState(true);

    useEffect(() => {
        const url = `https://boiling-meadow-89071.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [reload])

    const handleDeliver = event => {

        const quantity = product.quantity - 1;
        if (quantity < 0) {
            return toast('Sorry, The product is out of stock!')
        }
        const updatedQuantity = { quantity };

        const url = `https://boiling-meadow-89071.herokuapp.com/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {

                toast('Product Delivered!');
                setIsReload(!reload)
            })
    }
    const handleRestock = event => {
        event.preventDefault();
        const value = event.target.restock.value;
        if (value < 0) {
            return toast('Please enter a positive number!')
        }
        const quantity = product.quantity + parseInt(value);
        const updatedQuantity = { quantity };
        console.log(updatedQuantity);
        const url = `https://boiling-meadow-89071.herokuapp.com/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {

                toast('Stock Updated!!');
                setIsReload(!reload)
                event.target.reset();
            })
    }

    return (
        <div className=''>
            <h2 className='text-center'>Welcome To Inventory</h2>
            <div className='d-flex justify-content-around'>
                <div className='text-center'>
                    <img src={product.img} alt="" />
                    <h3> ID:{product._id}</h3>
                    <h3>Name:{product.name}</h3>
                    <h4>Price: ${product.price}</h4>
                    <h4>Supplier: {product.supplierName}</h4>
                    <h4>Quantity: {product.quantity}</h4>
                    <h4>Description: {product.description}</h4>
                    <button onClick={handleDeliver} className='btn btn-success'>Delivered</button>

                </div>
                <div>
                    <Form onSubmit={handleRestock}>
                        <Form.Group className="mb-3" controlId="formBasicRestock">
                            <Form.Label className="d-flex justify-content-center text-success">Restock the Item</Form.Label>
                            <Form.Control type="number" name="restock" placeholder="Restock amount" />

                        </Form.Group>
                        <Button className='w-100' variant="success" type="submit">
                            Submit
                        </Button>
                        <div className='my-4 text-end'>
                            <Link to='/manageInventory' className='btn btn-outline-danger w-100'>Manage Inventories</Link>
                        </div>
                    </Form>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Inventory;