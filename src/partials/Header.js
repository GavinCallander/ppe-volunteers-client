// dependencies
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// component imports
import { AuthLink } from '../components'

export const Header = props => {
    return (
        <div className='header'>
            <h1 className='header header-logo'>Logo</h1>
            <div className='header header-nav'>
                <Link to='/#donate' className='body-two'>Donate</Link>
            </div>
            <div className='header header-links'>
                <AuthLink text='SIGN UP' />
                <AuthLink text='LOGIN' />
            </div>
        </div>
    )
};