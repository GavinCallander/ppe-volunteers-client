import React from 'react'
import {Redirect} from 'react-router-dom'

// partials imports
import { Footer, Header } from '../../partials';
import {PortalDataView} from '../../components'

export const Admin = props => {


    if(!props.user) {
        return <Redirect to="/" />
    } 
  
    return (
        <div className="portal">
            <Header user={props.user} updateUser={props.updateUser}/>
            <div className='portal-content'>
                
                <PortalDataView 
                    text="View All Orders" 
                    get='orders'
                    user = {props.user}
                />
                <PortalDataView 
                    text="View All Clinics" 
                    get='clinics' 
                    user = {props.user}
                />
                <PortalDataView 
                    text="View All Producers" 
                    get='producers' 
                    user = {props.user}
                />
                <PortalDataView 
                    text="View All Products" 
                    get='products' 
                    user = {props.user}
                />
            </div>
            {/* <Footer /> */}
        </div>
    )
}