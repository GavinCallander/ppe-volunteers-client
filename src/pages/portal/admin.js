import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'

import Details from './Details'

// partials imports
import { Footer, Header } from '../../partials';
import {PortalDataView} from '../../components'

export const Admin = props => {

    let [showDetails, setShowDetails] = useState('')

    if(!props.user) {
        return <Redirect to="/" />
    } 
  
    return (
        <div className="portal">
            <Header user={props.user} updateUser={props.updateUser}/>
            <div className="portal-content">
                <div className='portal-all-data'>
                    
                    <PortalDataView 
                        text="View All Orders" 
                        get='orders'
                        user = {props.user}
                        setShowDetails = {setShowDetails}
                    />
                    <PortalDataView 
                        text="View All Clinics" 
                        get='clinics' 
                        user = {props.user}
                        setShowDetails = {setShowDetails}
                    />
                    <PortalDataView 
                        text="View All Producers" 
                        get='producers' 
                        user = {props.user}
                        setShowDetails = {setShowDetails}
                    />
                    <PortalDataView 
                        text="View All Products" 
                        get='products' 
                        user = {props.user}
                        setShowDetails = {setShowDetails}
                    />
                </div>
                <div className='portal-view-details'>
                    <Details showDetails={showDetails} />

                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}