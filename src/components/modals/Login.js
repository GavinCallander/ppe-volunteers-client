import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'

const Login = props => {
    
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [redirect, setRedirect] = useState(false)
    let [message, setMessage] = useState('')


    const handleSubmit = e => {
        
        e.preventDefault()

        //set data for posting
        let data = {
            email,
            password
        }

        //post to login route
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
                //if response.ok = true, update the user stored in app level state to the token sent back from the post route
                if(response.ok) {
                    props.updateUser(result.token)
                    setRedirect(true)
                } else {
                    //else show the error in a message on the page
                    setMessage(`${response.status} ${response.statusText}: ${result.message}`)
                }
            })
        })
        .catch(err => {
            console.log(err)
            setMessage(`Error reaching server, please try again later`)
        })
    }

    if(redirect){
        if(props.user && props.user.isclinic) {
            props.closeModal()
            return <Redirect to="/clinic"/>
        }
        props.closeModal()
        return <Redirect to="/admin"/>
    }
    
    if(!props.showLogin) {
        return null
    }
    else {
        return (
            <div className='modal'>
                <div className='close-x' onClick={() => props.closeModal()}>X</div>
                <div className='modal-content'>
                    <p className='body-one modal-header'>Login</p>
                    <form className='modal-form' onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input type="text" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                    
                        <label>Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
                        <small>Password field is case sensitive.</small>
                    
                        <input type="submit" value="Login"/>

                        {/* error messages show here */}
                        {message}

                    </form>
                </div>
            </div>
        )
    }
}

export default Login