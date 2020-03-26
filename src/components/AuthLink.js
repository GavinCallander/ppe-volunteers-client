// dependencies
import React from 'react';

export const AuthLink = props => { 
    const showModal = () => {
        if(props.text === 'SIGN UP') {
            props.setShowSignup(true)
        }
        else if(props.text === 'LOGIN') {
            props.setShowLogin(true)
        }  
    }
    return (
        <div className='auth-link' onClick={showModal}>
            <p className='body-two'>{props.text}</p>
        </div>
    )
};