// dependencies
import React from 'react';

export const AuthLink = props => {
    const handleClick = () => {
        if (props.text === 'SIGN UP') {
            props.setShowSignup(true)
        } else if (props.text === 'LOGIN') {
            props.setShowLogin(true)
        } else {
            return
            // needs updated
        }
    };
    return (
        <div className={`auth-link ${props.class}`} onClick={handleClick}>
            <p className='body-font body-two'>
                {props.text}
            </p>
        </div>
    )
};