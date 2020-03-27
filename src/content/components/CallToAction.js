// dependencies
import React from 'react';

export const CallToAction = props => {
    const handleClick = () => {
        props.setShowSignup(true)
        if (props.text === 'VOLUNTEER') {
            props.setSignupType('VOLUNTEER')
        } else if (props.text === 'REQUEST SUPPLIES') {
            props.setSignupType('CLINIC')
        } else {
            props.setShowSignup(false)
        }
    };
    return (
        <div className={`c2a ${props.class}`} onClick={handleClick}>
            <p className='body-one'>
                {props.text}
            </p>
        </div>
    )
};