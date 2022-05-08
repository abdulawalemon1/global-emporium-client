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

    return (
        <div>
            <h2>My items:{item.length}</h2>
        </div>
    );
};

export default Myitem;