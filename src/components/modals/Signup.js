import React from 'react'

const Signup = props => {
    if(!props.showSignup) {
        return null
    }
    else {
        return (
            <div className='modal'>
                <p className='close-x' onClick={() => props.closeModal()}>X</p>
                
                SIGNUP MODAL
                
            </div>
        )
    }
}

export default Signup