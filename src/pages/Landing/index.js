// dependencies
import React from 'react';
// component imports
import { CallToAction, InfoLarge, InfoSmall } from '../../components';
// partials imports
import { Footer, Header } from '../../partials';

export const Landing = props => {
    return (
        <div className='landing'>
            <div className='landing landing-banner'>
                <Header />
                <div className='landing-banner-message'>
                    <p className='heading-one'>
                        Health clinics are in dire need of masks and other supplies
                    </p>
                    <p className='body-two landing-banner-text'>
                        Help fight the spread and protect healthcare workers by sewing or delivering supplies for your community clinics
                    </p>
                </div>
            </div>
            <div className='landing landing-main'>
                <div className='landing-main landing-main-box'>
                    <InfoSmall text='Be a producer' />
                    <InfoSmall text='Help deliver' />
                </div>
                <p className='body-two'>We connect local clinics with our producers</p>
                <CallToAction text='VOLUNTEER' />
                <p className='heading-two'>Are you a small clinic with a large need?</p>
                <div className='landing-main landing-main-box'>
                    <InfoLarge text='Masks' />
                    <InfoLarge text='Face Shields' />
                    <InfoLarge text='Gowns' />
                </div>
                <CallToAction text='REQUEST SUPPLIES' />
                <br />
            </div>
            <div className='landing landing-donate'>
                <div className='landing-donate-message'>
                    <p className='heading-one'>Donate</p>
                    <p className='body-two landing-donate-text'>
                        Your contributions cover the cost to volunteers for materials and delivery
                    </p>
                    <CallToAction text='DONATE MONEY' />
                    <CallToAction text='DONATE SUPPLIES' />
                </div>
            </div>
            {/* <div className='landing landing-final'>
                <div className='landing-final-message'>
                    <p className='heading-one'>Resources</p>
                    <p className='body-two'>
                        Use our patterns to sew for loved ones and friends. Then pay it forward by helping out your local community clinics.
                    </p>
                    <CallToAction text='DWNLD PATTERNS' />
                    <CallToAction text='PAY IT FORWARD' />
                    <CallToAction text='SEWING INFO' />
                </div> */}
            {/* </div> */}
            <Footer />
        </div>
    )
};