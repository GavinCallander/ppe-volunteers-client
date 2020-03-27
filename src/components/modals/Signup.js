import React, {useState, useEffect} from 'react'
import {CallToAction} from '../CallToAction'
import SignupForm from './SignupForm'


const Signup = props => {

    let callToActionButtons = ''
    if(!props.signupType) {
        callToActionButtons = (
            <div>
                <CallToAction text="VOLUNTEER" setShowSignup={props.setShowSignup} setSignupType={props.setSignupType} /> 
                <CallToAction text="REQUEST SUPPLIES" setShowSignup={props.setShowSignup} setSignupType={props.setSignupType} />
            </div>
        )
    }

    if(!props.showSignup || (!props.showSignup && !props.signupType)) {
        return null
    }
    else if(props.showSignup) {
     
        return (
            <div className='modal'>
                <p className='close-x' onClick={() => props.closeModal()}>X</p>
                <div className='modal-content'>
                    <p className='body-one modal-header'>Sign Up</p>
                    {callToActionButtons}
                    <SignupForm signupType={props.signupType} updateUser={props.updateUser} closeModal={props.closeModal}/>
                </div>
                
            </div>
        )
    }
}

export default Signup