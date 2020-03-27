// dependencies
import React from 'react';
// component imports
import { AuthLink } from '../components'

export const Header = props => {
    const handleLogout = e => {
        localStorage.removeItem('userToken')
        props.updateUser(null)
    }
    if(!props.user) {
        return (
            <div className='header'>
                <h1 className='header header-logo'>Logo</h1>
                <div className='header header-nav'>
                    <a href='' className='body-font body-two'>Home</a>
                    <a href='' className='body-font body-two'>Volunteer</a>
                    <a href='' className='body-font body-two'>Donate</a>
                    <a href='' className='body-font body-two'>Resources</a>
                </div>
                <div className='header header-links'>
                    <AuthLink text='SIGN UP' setShowSignup={props.setShowSignup} class='sign-up' />
                    <AuthLink text='LOGIN' setShowLogin={props.setShowLogin}  class='login' />
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='header'>
                <h1 className='header header-logo'>Logo</h1>
                <p>Hello {props.user.firstName}</p>
                <div className='header header-nav'>
                    <a href='' className='body-font body-two'>Home</a>
                    <a href='' className='body-font body-two'>Portal</a>
                    <a href='' className='body-font body-two'>Links</a>
                    <a href='' className='body-font body-two'>Here</a>
                </div>
                <div onClick={handleLogout}>Logout</div>
            </div>
        )
    } 
};