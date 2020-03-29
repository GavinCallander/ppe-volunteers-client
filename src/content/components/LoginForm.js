import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'

const LoginForm = props => {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [redirect, setRedirect] = useState(false)
    let [message, setMessage] = useState('')

    console.log('email', email)
    const handleSubmit = e => {
        
        e.preventDefault()

        console.log('email to be submitted', email)
        //set data for posting
        let data = {
            email,
            password
        }

        //post to login route
        console.log(`1) POSTING TO: ${process.env.REACT_APP_SERVER_URL}/auth/login`)
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
                console.log('RESPONSE', response, 'RESULT', result)
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

        return <Redirect to="/admin"/>
    }

    return (
       
            <form className='modal-form' onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input 
                            onChange={e => setEmail(e.currentTarget.value)} 
                            type='text' 
                            value={email} 
                        />
                        <label>Password</label>
                        <input
                            onChange={e => setPassword(e.currentTarget.value)}
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
      
    )
}

export default LoginForm