import React, {useState} from 'react'

const Login = props => {
    
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')


    const handleSubmit = e => {
        
        e.preventDefault()

        //set data for posting
        let data = {
            email,
            password
        }

        //post to login route
        // fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {

        // })
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
                    
                        <input type="submit" value="Login"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login