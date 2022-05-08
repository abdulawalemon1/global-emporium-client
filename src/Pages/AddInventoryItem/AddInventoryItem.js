import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../.firebase.init';
import axios from 'axios';

const AddInventoryItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = user.email;
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Add New Items</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2' type="text" placeholder='Name' {...register("name", { required: true })} />
                <input className='mb-2' value={user.email} type="text" placeholder='Email' {...register("email", { required: true })} />
                <input className='mb-2' type="number" placeholder='Price' {...register("price", { required: true })} />
                <input className='mb-2' type="number" placeholder='Quantity' {...register("quantity", { required: true })} />
                <input className='mb-2' type="text" placeholder='Supplier' {...register("supplierName", { required: true })} />
                <input className='mb-2' type="text" placeholder='Photo URL' {...register("img", { required: true })} />

                <textarea className='mb-2 w-100 text-dark' type="text" placeholder='Description' {...register("description", { required: true })} />

                <input className='btn btn-outline-dark' type="submit" value="Add Item" />

            </form>
        </div>
    );
};

export default AddInventoryItem;