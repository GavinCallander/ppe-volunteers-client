// dependencies
import React from 'react';


export const CallToAction = props => {
    const handleClick = () => {
        props.setShowSignup(true)

        //if text = volunteer, direct to volunteer sign up
        if(props.text === 'VOLUNTEER') {
            props.setSignupType('VOLUNTEER')
        }  
        //if text = request supplies, direct to clinic sign up
        else if(props.text === 'REQUEST SUPPLIES') {
            props.setSignupType('CLINIC')
        }
        else {
            props.setShowSignup('false')
        }
    }

    return(
        <div className='c2a c2a-donate' onClick={handleClick}>
            <p className='component body-one'>{props.text}</p>
         </div>

    )
   
};
