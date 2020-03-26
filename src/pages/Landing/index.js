// dependencies
import React, {useState} from 'react';
// partials imports
import { Footer, Header } from '../../partials';
import Login from '../../components/modals/Login'
import Signup from '../../components/modals/Signup'

export const Landing = props => {
    
    let [showSignup, setShowSignup] = useState(false)
    let [showLogin, setShowLogin] = useState(false)
    
    const closeModal = () => {
        if(showSignup) { setShowSignup(false) }  
        if(showLogin) { setShowLogin(false) } 
    }
    
    return (
        <div className='landing'>
            <div className='landing landing-banner'>
                <Header setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
            </div>
            <Signup showSignup={showSignup} closeModal={closeModal} />
            <Login showLogin={showLogin} closeModal={closeModal}/>
            <div className='landing landing-donate'></div>
            <Footer />
        </div>
    )
};