// dependencies
import React from 'react';
import { Redirect } from 'react-router-dom';
// partials
import { Footer, Header } from '../../partials';
import { PortalDataView } from '../../components';

export const Clinic = props => {

    if(!props.user) {
        return <Redirect to="/"/>
    }

    return (
        <div className='portal'>
            <Header
                updateUser={props.updateUser}
                user={props.user}
            />
            <div className='portal-all-data'>
                <PortalDataView
                    get='clinics'
                    text='View all clinics'
                    user={props.user}
                />
                <PortalDataView
                    get='orders'
                    text='View all orders'
                    user={props.user}
                />
                <p className='body-one'>Place Order</p>
            </div>
            <Footer />
        </div>
    )
};