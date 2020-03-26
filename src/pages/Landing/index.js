// dependencies

import React, {useState} from 'react';
// component imports
import { CallToAction, InfoLarge, InfoSmall } from '../../components';

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
                <Header setShowLogin={setShowLogin} setShowSignup={setShowSignup} user={props.user} updateUser={props.updateUser}/>
                <Signup showSignup={showSignup} closeModal={closeModal} updateUser={props.updateUser} />
                <Login showLogin={showLogin} closeModal={closeModal} updateUser={props.updateUser}/>
                <div className='landing-banner-message'>
                    <p className='heading heading-one'>
                        Health clinics are in dire need of masks and other supplies
                    </p>
                    <p className='body-font body-two landing-banner-text'>
                        Help fight the spread and protect healthcare workers by sewing or delivering supplies for your community clinics
                    </p>
                </div>
            </div>
            <div className='landing landing-main'>
                <div className='landing-main landing-main-box'>
                    <InfoSmall text='Be a producer' />
                    <InfoSmall text='Help deliver' />
                </div>
                <p className='body-two'>We connect our volunteers with their local clinics</p>
                <CallToAction text='VOLUNTEER' />
                <p className='heading heading-two'>Are you a small clinic with a large need?</p>
                <div className='landing-main landing-main-box'>
                    <InfoLarge text='Masks' />
                    <InfoLarge text='Face Shields' />
                    <InfoLarge text='Gowns' />
                </div>
                <br />
                <CallToAction text='REQUEST SUPPLIES' />
                <br />
            </div>
            <div className='landing landing-donate' name='donate'>
                <div className='landing-donate-message'>
                    <p className='heading heading-one'>Donate</p>
                    <p className='body-font body-two landing-donate-text'>
                        Your contributions cover the cost to volunteers for materials and delivery
                    </p>
                    <CallToAction text='DONATE MONEY' />
                    <br />
                    <CallToAction text='DONATE SUPPLIES' />
                </div>
            </div>

            <Footer />
        </div>
    )
};