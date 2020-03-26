import React, {useState} from 'react'

const Signup = props => {
   
    let [email, setEmail] = useState('')
    
    let [password, setPassword] = useState('')
    let [message, setMessage] = useState('')
    
    const handleSubmit = e => {
        
        e.preventDefault()

        //post to signup
    }


    if(!props.showSignup) {
        return null
    }
    else {
        return (
            //FORM NEEDS VALIDATION MESSAGES ON FRONT END
            <div className='modal'>
                <p className='close-x' onClick={() => props.closeModal()}>X</p>
                <div className='modal-content'>
                    <p className='body-one modal-header'>Sign Up</p>
                    <form className='modal-form' onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input type="text" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                    
                        <label>Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
                        <small>Password field is case sensitive.</small>

                        <label>Display name</label>
                        <input type="text" value={username} onChange={e => setUsername(e.currentTarget.value)}/>
                        <small>This will be the name displayed to others with access to the site.</small>


                    
                        <input type="submit" value="Sign Up"/>

                        {/* error messages show here */}
                        {message}

                    </form>
                </div>
                
            </div>
        )
    }
}

export default Signup