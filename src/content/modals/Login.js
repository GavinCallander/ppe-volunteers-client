// dependencies
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from '../components/LoginForm'

export const Login = props => {
    
    if (!props.showLogin) {
        return null
    } else {
        return (
            <div className='modal'>
                <div className='close-x'onClick={props.closeModal}>X</div>
                <div className='modal-content'>
                    <p className='body-one modal-header'>Login</p>
                    <LoginForm updateUser={props.updateUser} closeModal={props.closeModal} />
                
                </div>
            </div>
        )
    }
};