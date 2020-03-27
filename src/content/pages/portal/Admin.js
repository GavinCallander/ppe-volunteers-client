// dependencies
import React, { useState } from 'react';
// pages
import { Details } from './Details';
// partials
import { Footer, Header } from '../../partials';
import { PortalDataView } from '../../../components';


export const Admin = props => {
    const [showDetails, setShowDetails] = useState('');
    return (
        <div className='portal'>
            <Header
                updateUser={props.updateUser}
                user={props.user}
            />
            <div className='portal-content'>
                <div className='portal-all-data'>
                    <PortalDataView
                        get='orders'
                        setShowDetails={setShowDetails}
                        text='View all orders'
                        user={props.user}
                    />
                    <PortalDataView
                        get='clinics'
                        setShowDetails={setShowDetails}
                        text='View all clinics'
                        user={props.user}
                    />
                    <PortalDataView
                        get='producers'
                        setShowDetails={setShowDetails}
                        text='View all producers'
                        user={props.user}
                    />
                    <PortalDataView
                        get='products'
                        setShowDetails={setShowDetails}
                        text='View all products'
                        user={props.user}
                    />
                </div>
                <div className='portal-view-details'>
                    <Details
                        showDetails={showDetails}
                        user={props.user}
                    />
                </div>
            </div>
        </div>
    )
};