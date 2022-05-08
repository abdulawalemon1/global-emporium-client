import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../.firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';


const SignUp = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const nameRef = useRef('');
    const numberRef = useRef('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleRegister = event => {
        event.preventDefault();
        const number = numberRef.current.value;
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;
        createUserWithEmailAndPassword(email, password);


    }
    const navigateToLogin = event => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }
    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div className='d-flex '>
            <div>
                <img className='w-75 h-100' src="https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2022/collections/dm/22_FRD_MST_55086_DSC09482_2.tif?croppathe=1_3x2&wid=900" alt="" />
            </div>
            <div>
                <h2 className='text-center'>Sign Up</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control ref={numberRef} type="number" placeholder="Phone number" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className='w-100' variant="dark" type="submit">
                        SignUp
                    </Button>
                </Form>
                <p>Already a user? <Link to={"/login"} className='text-primary text-decoration-none' onClick={navigateToLogin}>Please Login</Link></p>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default SignUp;