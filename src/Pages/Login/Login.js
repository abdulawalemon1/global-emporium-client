import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

    }
    const navigateToRegister = event => {
        navigate('/signup');
    }
    return (
        <div className='d-flex '>
            <div>
                <img className='w-75 h-100' src="https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2022/collections/dm/22_FRD_MST_55086_DSC09482_2.tif?croppathe=1_3x2&wid=900" alt="" />
            </div>
            <div>
                <h2 className='text-center'>Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className='w-100' variant="dark" type="submit">
                        Login
                    </Button>
                </Form>
                <p>New user? <Link to={"/signup"} className='text-primary text-decoration-none' onClick={navigateToRegister}>Sign Up</Link></p>
            </div>

        </div>
    );
};

export default Login;