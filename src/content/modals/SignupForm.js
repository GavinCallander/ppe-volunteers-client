// dependencies
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export const SignupForm = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [verifyPasswordMessage, setVerifyPasswordMessage] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [region, setRegion] = useState('');
    const [isProducer, setIsProducer] = useState(false);
    const [willSewMasks, setWillSewMasks] = useState([]);
    const [willSewGowns, setWillSewGowns] = useState([]);
    const [willCreateShields, setWillCreateShields] = useState([]);
    const [isClinic, setIsClinic] = useState(false);
    const [isDriver, setIsDriver] = useState(false);
    const [message, setMessage] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    const handleSubmit = e => {
        e.preventDefault();
        let inventory = [...willSewMasks, ...willSewGowns, ...willCreateShields];
        props.signupType === 'CLINIC' ? setIsClinic(true) : setIsClinic(false)
        let data = {
            firstName,
            lastName,
            email,
            password,
            username,
            address: address ? address : 'na',
            city: city ? city : 'na',
            state: state ? state : 'na',
            zipcode: zipcode ? zipcode : 'na',
            region,
            isProducer,
            isClinic,
            isDriver,
            inventory
        }
        if (!password === verifyPassword) {
            setVerifyPasswordMessage('Passwords do not match');
        } else {
            fetch(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, {
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
                        setMessage(`${response.status} ${response.statusText}: ${result.message}`)
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
        };
    };
    if (redirect) {
        if (props.user.isClinic) {
            props.closeModal()
            return <Redirect to='/clinic' />
        }
        props.closeModal()
        return <Redirect to='/admin' />
    };
    let volunteerOnlyInputs;
    let header = 'Sign in here to request supplies for your clinic';
    if (props.signupType === 'VOLUNTEER') {
        header = 'Sign up here to volunteer'
        volunteerOnlyInputs = (
            <div>
                <div className="form-row">
                    <label>Street Address</label>
                    <input type="text" value={address} onChange={e => setAddress(e.currentTarget.value)} />
                </div>
                <div className="form-row">
                    <label className="form-element">City
                        <input type="text" value={city} onChange={e => setCity(e.currentTarget.value)} />
                    </label>
                    <label className="form-element">State
                        <input type="text" value={state} onChange={e => setState(e.currentTarget.value)} />
                    </label>
                </div>
                <div className="form-row">
                    <label>Zipcode</label>
                    <input type="text" value={zipcode} onChange={e => setZipcode(e.currentTarget.value)} />
                </div>
                <p>What would you like to volunteer for?</p>
                <div>
                    <input type='checkbox' name='isProducer' onChange={e => {setIsProducer(e.target.checked); e.target.checked ? setWillSewMasks([{product: "5e791f4a0474cea058c814b6", quantity: 0 }]) : setWillSewMasks([])}} />
                    <label>Sew Masks</label>
                </div>
                <div>
                    <input type="checkbox" name='isProducer' onChange={e => {setIsProducer(e.target.checked); e.target.checked ? setWillSewGowns([{product: "5e791f4a0474cea058c814b7", quantity: 0 }]) : setWillSewGowns([])}} />
                    <label>Sew Gowns</label>
                </div>
                <div>
                    <input type="checkbox" name='isProducer' onChange={e => {setIsProducer(e.target.checked); e.target.checked ? setWillCreateShields([{product: "5e791f4a0474cea058c814b8", quantity: 0 }]) : setWillCreateShields([])}} />
                    <label>Create Face Shields (no sewing or special tools required)</label>
                </div>
                <div>
                    <input type='checkbox' name='isDriver'  onChange={e => setIsDriver(e.target.checked)} />
                    <label>Pick up and Deliver Materials</label>
                </div>
            </div>
        )
    }
    if (!props.signupType) {
        return null
    }
    return (
        <form className='modal-form-signup' onSubmit={handleSubmit}>
            <p>{header}</p>
            <div className="form-row">
                <label className="form-element">First Name
                    <input type="text" value={firstName} onChange={e => setFirstName(e.currentTarget.value)} />
                </label>
            
                <label className="form-element">Last Name
                    <input type="text" value={lastName} onChange={e => setLastName(e.currentTarget.value)} />
                </label>
            </div>
            <div className="form-row">
                <label className="form-element">Email
                        <input type="text" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                </label> 
            </div>
            <div className="form-row">
                <label className="form-element">Password
                    <input type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />     
                </label>
            </div>
            <div className="form-row">
                <label className="form-element">Verify Password
                    <input type="password" value={verifyPassword} onChange={e => {setVerifyPassword(e.currentTarget.value); 
                        // checkPasswords()
                    }} />
                    <p>{verifyPasswordMessage}</p>
                </label>
            </div>
            <div className="form-row">
                <label>Display name
                    <input type="text" value={username} onChange={e => setUsername(e.currentTarget.value)}/>
                    <small>This will be the name displayed to others with access to the site.</small>
                </label>
            </div>
            {volunteerOnlyInputs}
            <input type="submit" value="Sign Up"/>
            {message}
        </form>
    )
};