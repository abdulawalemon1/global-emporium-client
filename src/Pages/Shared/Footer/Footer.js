import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center bg-dark'>
            <p className='text-light'>All rights reserved by Global Emporium</p>
            <p><small className='text-light'>copyright &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;