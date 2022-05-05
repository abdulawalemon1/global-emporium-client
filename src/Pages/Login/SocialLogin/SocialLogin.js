import React from 'react';
import google from '../../../images/google.png'
import github from '../../../images/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useLocation, useNavigate } from 'react-router-dom';
import './SocialLogin.css';
import auth from '../../../.firebase.init';
const SocialLogin = () => {


    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger text-center'> {error?.message}{error1?.message}</p>
    }
    if (loading || loading1) {
        return <p>Loading...</p>;
    }
    if (user || user1) {
        navigate(from, { replace: true });

    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-success me-3'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-dark  '>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Github Login</span>
                </button>
            </div>

            {errorElement}
        </div>
    );
};

export default SocialLogin;