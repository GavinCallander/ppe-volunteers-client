import React from 'react';
import { CallToAction } from '../components';
import { SignupForm } from '../components/SignupForm';

export const Signup = props => {
    let callToActionButtons;
    if (!props.signupType) {
        callToActionButtons = (
            <div className='modal-cta-btns'>
                <p className='body-one modal-header'> Sign up </p> 
                <CallToAction
                    class='c2a-donate c2a-ong'
                    setShowSignup={props.setShowSignup}
                    setSignupType={props.setSignupType}
                    text='VOLUNTEER'
                />
                <CallToAction
                    class='c2a-donate c2a-ong'
                    setShowSignup={props.setShowSignup}
                    setSignupType={props.setSignupType}
                    text='REQUEST SUPPLIES'
                />
            </div>
        )
    }
    if (!props.showSignup || (!props.showSignup && !props.signupType)) {
        return null
    } else if (props.showSignup) {
        return (
            <div className='modal'>
                <p className='close-x' onClick={props.closeModal}>X</p>
                <div className='modal-content'>
                    {callToActionButtons}
                    <SignupForm
                        closeModal={props.closeModal}
                        signupType={props.signupType}
                        updateUser={props.updateUser}
                    />
                </div>
            </div>
        )
    }
};