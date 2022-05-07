import React from 'react';
import { useForm } from "react-hook-form";

const AddInventoryItem = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
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
            <h2>Add New Items</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2' type="text" placeholder='Name' {...register("name", { required: true })} />
                <input className='mb-2' type="number" placeholder='Price' {...register("price", { required: true })} />
                <input className='mb-2' type="number" placeholder='Quantity' {...register("quantity", { required: true })} />
                <input className='mb-2' type="text" placeholder='Supplier' {...register("supplierName", { required: true })} />
                <input className='mb-2' type="text" placeholder='Photo URL' {...register("img", { required: true })} />

                <textarea className='mb-2' type="text" placeholder='Description' {...register("description", { required: true })} />

                <input type="submit" value="Add Item" />

            </form>
        </div>
    );
};

export default AddInventoryItem;