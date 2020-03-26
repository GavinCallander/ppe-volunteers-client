// dependencies
import React from 'react';
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
                    <p className='body-one landing-banner-text'>
                        Help fight the spread and protect healthcare workers by sewing or delivering supplies for your community clinics
                    </p>
                </div>
            </div>
            <div className='landing landing-donate'></div>
            <Footer />
        </div>
    )
};