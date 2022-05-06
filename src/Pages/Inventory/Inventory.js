import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProducts from '../../Hooks/UseProducts';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [reload, setIsReload] = useState(true);

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [reload])

    const handleDeliver = event => {


        const quantity = product.quantity - 1;
        const updatedQuantity = { quantity };
        console.log(updatedQuantity);
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Delivered!!!');
                setIsReload(!reload)
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
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicRestock">
                            <Form.Label className="d-flex justify-content-center text-success">Restock the Item</Form.Label>
                            <Form.Control type="number" placeholder="Restock amount" />

                        </Form.Group>
                        <Button className='w-100' variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Inventory;