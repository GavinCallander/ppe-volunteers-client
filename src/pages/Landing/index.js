// dependencies
import React from 'react';
// partials imports
import { Footer, Header } from '../../partials';

export const Landing = props => {
    return (
        <div className='landing'>
            <div className='landing landing-banner'>
                <Header />
            </div>
            <div className='landing landing-donate'></div>
            <Footer />
        </div>
    )
};