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
                <div>ADMIN TEST</div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}