import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className=''>
            <nav className='fw-bold my-3 d-flex justify-content-center'>
                <CustomLink className='p-3 custom-link' to='/'>HOME</CustomLink>
                <CustomLink className='p-3 custom-link' to='/reviews'>REVIEWS</CustomLink>
                <CustomLink className='p-3 custom-link' to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink className='p-3 custom-link' to='/blogs'>BLOGS</CustomLink>
                <CustomLink className='p-3 custom-link' to='/about'>ABOUT</CustomLink>
            </nav>
        </div>
    );
};

export default Header;