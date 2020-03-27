// dependencies
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export const Login = props => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [redirect, setRedirect] = useState(false);
    let [message, setMessage] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        let data = {
            email,
            password
        }
        fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            response.json()
            .then(result => {
                if (response.ok) {
                    props.updateUser(result.token)
                    setRedirect(true)
                } else {
                    setMessage(`${response.status}`)
                }
            })
        })
        .catch(err => {
            setMessage(`Error reaching server, please try again. ${err}`);
        })
    };
    if (redirect) {
        if (props.user && props.user.isclinic) {
            props.closeModal()
            return <Redirect to='/clinic' />
        }
        props.closeModal()
        return <Redirect to='/admin' />
    }
    if (!props.showLogin) {
        return null
    } else {
        return (
            <div className='modal'>
                <div className='close-x'onClick={props.closeModal}>X</div>
                <div className='modal-content'>
                    <p className='body-one modal-header'>Login</p>
                    <form className='modal-form' onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input 
                            onChange={e => setEmail(e.currentTargetValue)} 
                            type='text' 
                            value={email} 
                        />
                        <label>Password</label>
                        <input
                            onChange={e => setPassword(e.currentTargetValue)}
                            type='password'
                            value={password}
                        />
                        <small>Password field is case sensitive</small>
                        <input
                            type='submit'
                            value='Login'
                        />
                        {message}
                    </form>
                </div>
            </div>
        )
    }
};