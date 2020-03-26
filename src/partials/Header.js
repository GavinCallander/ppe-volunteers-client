// dependencies
import React from 'react';
// component imports
import { AuthLink } from '../components'

export const Header = props => {
    return (
        <div className='header'>
            <h1 className='header header-logo'>Logo</h1>
            <div className='header header-nav'>
                <a href='' className='body-two'>Home</a>
                <a href='' className='body-two'>Volunteer</a>
                <a href='' className='body-two'>Donate</a>
                <a href='' className='body-two'>Resources</a>
            </div>
            <div className='header header-links'>
                <AuthLink text='SIGN UP' />
                <AuthLink text='LOGIN' />
            </div>
        </div>
    )
};