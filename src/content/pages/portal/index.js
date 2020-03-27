// dependencies
import React from 'react';
import { Redirect } from 'react-router-dom';
// pages
import { Admin } from './Admin';
import { Clinic } from './Clinic';
// partials
import { Footer, Header } from '../../partials';
import { PortalDataView } from '../../components';

export const Portal = props => {
    
    if (!props.user) {
        return <Redirect to='/' />
    };
    if (props.user.isAdmin) {
        return <Admin
                updateUser={props.updateUser}
                user={props.user}
               />
    };
    if (props.user.isClinic) {
        return <Clinic 
                updateUser={props.updateUser}
                user={props.user}
               />
    };
    if (props.user.isProducer) {
        return
    }
};

export { Admin, Clinic };