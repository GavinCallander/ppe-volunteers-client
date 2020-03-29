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
    const [clinicName, setClinicName] = useState('')
    const [numberOfEmployees, setNumberOfEmployees] = useState(0)
    const [isDriver, setIsDriver] = useState(false);
    const [message, setMessage] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [maskRq, setMaskRq] = useState(0);
    const [gownRq, setGownRq] = useState(0);
    const [shieldRq, setShieldRq] = useState(0);
 
    
    const handleSubmit = e => {
        e.preventDefault();
        props.signupType === 'CLINIC' ? setIsClinic(true) : setIsClinic(false)
        

        //if clinic, post clinic info to clinic & create order request
        // const postClinic = () => {
        //     let clinicData = {
        //         name: clinicName,
        //         address,
        //         city,
        //         state,
        //         zipcode,
        //         region,
        //         numberOfEmployees,
        //         // assignedUser: 
        //     }
        // }
        
        //POST USER
        let inventory = [...willSewMasks, ...willSewGowns, ...willCreateShields];
        
        let data = {
            firstName,
            lastName,
            email,
            password,
            username,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode,
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
    let volunteerAddressInputs;
    let clinicAddressInputs;
    let clinicOnlyInputs;
    let header = 'Sign up here to request supplies for your clinic';
    if (props.signupType === 'VOLUNTEER') {
        header = 'Volunteer Signup'
        volunteerAddressInputs = (
           
            <div className="form-col">
                <label>Street Address</label>
                <input type="text" value={address} onChange={e => setAddress(e.currentTarget.value)} />
                <label>City </label>
                <input type="text" value={city} onChange={e => setCity(e.currentTarget.value)} />
                
                <label>State </label>
                <input type="text" value={state} onChange={e => setState(e.currentTarget.value)} />
                
                <label>Zipcode</label>
                <input type="text" value={zipcode} onChange={e => setZipcode(e.currentTarget.value)} />
            </div>
        )
        
        volunteerOnlyInputs = (
            <div className="form-row">
                
                <div className="form-col">
                <p>I would like to:</p>
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
                        <label>Create Face Shields </label>
                    </div>
                    <div>
                        <input type='checkbox' name='isDriver'  onChange={e => setIsDriver(e.target.checked)} />
                        <label>Pick up and Deliver Materials</label>
                    </div>
                </div>
                <div className="form-col"></div>
            </div>
        )
    } else if(props.signupType === 'CLINIC') {
        clinicAddressInputs = (
            <div className="form-col">
                <label>Clinic Name</label>
                <input type="text" value={clinicName} onChange={e=>setClinicName(e.currentTarget.value)}/>
                <label>Street Address</label>
                <input type="text" value={address} onChange={e => setAddress(e.currentTarget.value)} />
                <label>City </label>
                <input type="text" value={city} onChange={e => setCity(e.currentTarget.value)} />
                
                <label>State </label>
                <input type="text" value={state} onChange={e => setState(e.currentTarget.value)} />
                
                <label>Zipcode</label>
                <input type="text" value={zipcode} onChange={e => setZipcode(e.currentTarget.value)} />
                
                <label>How many employees does your clinic have?</label>
                <input type="number" value={numberOfEmployees} onChange={e => setNumberOfEmployees(e.currentTarget.value)}></input>
            </div>
        )
        
        clinicOnlyInputs = (
            <div className="form-row"> 
                <div className="form-col">
                    <p>Please input the quantities you are requesting.</p>
                    <label>Masks</label>
                    <input type="number" value={maskRq} onChange={e => setMaskRq(e.currentTarget.value) } />
                    <label>Gowns</label>
                    <input type="number" value={gownRq} onChange={e => setGownRq(e.currentTarget.value) } />
                    <label>Face Shields</label>
                    <input type="number" value={shieldRq} onChange={e => setShieldRq(e.currentTarget.value) } />
                </div>
                <div className="form-col">
                    
                </div>
            </div>
        )
    }
    if (!props.signupType) {
        return null
    }
    return (
        <div className="form-content">
            <p className="body-one">Sign up</p>
            <p>{header}</p>
            <form className='modal-form-signup' onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-col">
                        <label>First Name</label>
                        <input type="text" value={firstName} onChange={e => setFirstName(e.currentTarget.value)} />
                        <label>Last Name</label>
                        <input type="text" value={lastName} onChange={e => setLastName(e.currentTarget.value)} />

                        <label>Email</label> 
                        <input type="text" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                        
                        <label>Password  </label>
                        <input type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />     
                    
                        <label>Verify Password   </label>
                        <input type="password" value={verifyPassword} onChange={e => {setVerifyPassword(e.currentTarget.value); 
                            // checkPasswords()
                        }} />
                        <small>{verifyPasswordMessage}</small>
                    
                    

                        <label>Display name</label>
                        <input type="text" value={username} onChange={e => setUsername(e.currentTarget.value)}/>
                        <small>This will be the name displayed to others with access to the site.</small>
                        
                    </div>
           
                        {clinicAddressInputs}
                        {volunteerAddressInputs}
        
                </div>

                {volunteerOnlyInputs}
                {clinicOnlyInputs}
                <input className='form-submit-btn' type="submit" value={props.signupType === 'VOLUNTEER' ? "Sign Up" : "Request Supplies"}/>
  
                {message}
            </form>
        </div>
    )
};