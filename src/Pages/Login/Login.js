import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../.firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import './Login.css';
import Loading from '../Shared/Loading/Loading';
import axios from 'axios';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );
    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger text-center'> {error?.message}{error1?.message}</p>
    }
    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/login', { email })
        localStorage.setItem('accessToken', data.accessToken)
    }
    const navigateToRegister = event => {
        navigate('/signup');
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Sent email');
        } else {
            toast('Please enter your email!')
        }
    }
    return (
        <div className='row '>
            <div className='col-md-7'>
                <img className='w-100 h-100' src="https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2022/collections/dm/22_FRD_MST_55086_DSC09482_2.tif?croppathe=1_3x2&wid=900" alt="" />
            </div>
            <div className='col-md-5 '>
                <h2 className=''>Please Login</h2>
                <Form className='' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className='' variant="dark" type="submit">
                        Login
                    </Button>
                </Form>
                <p>New user? <Link to={"/signup"} className='text-primary text-decoration-none' onClick={navigateToRegister}>Sign Up</Link></p>
                <p className='text-center mt-2'>Forget Password? <button to={"/register"} className='bg-light text-decoration-none border-0' onClick={resetPassword}>Reset Password</button></p>
                {errorElement}
                <SocialLogin></SocialLogin>
                <ToastContainer></ToastContainer>
            </div>


        </div>
    );
};

export default Login;