// dependencies
import React from 'react';
// component imports
import { AuthLink } from '../components'

export const Header = props => {
    return (
        <div className='header'>
            <h1 className='header header-logo'>Logo</h1>
            <div className='header header-nav'>
                <a href='' className='body-one'>Home</a>
                <a href='' className='body-one'>Volunteer</a>
                <a href='' className='body-one'>Donate</a>
                <a href='' className='body-one'>Resources</a>
            </div>
            <div className='header header-links'>
                <AuthLink text='SIGN UP' setShowSignup={props.setShowSignup} />
                <AuthLink text='LOGIN' setShowLogin={props.setShowLogin} />
            </div>
        </div>
    )
};