//imports
import {Admin} from './Admin'
import {Clinic} from './Clinic'

//exports
export {Admin, Clinic};
// partials imports
import { Footer, Header } from '../../partials';
import {PortalDataView} from '../../components'

export const PortalHome = props => {


    if(!props.user) {
        return <Redirect to="/" />
    } 

    if(props.user.isClinic){

  
    return (
        <div className="portal">
            <Header user={props.user} updateUser={props.updateUser}/>
            <div className='portal-content'>
                <PortalDataView 
                    text="View All Clinics" 
                    get='clinics' 
                    user = {props.user}
                    />
                <PortalDataView 
                    text="View All Orders" 
                    get='orders'
                    user = {props.user}
                />
                <p className='body-one'>Place Order</p>
            </div>
            {/* <Footer /> */}
        </div>
    )
}  
else {
    return (
        <div className="portal">
            <Header user={props.user} updateUser={props.updateUser} />
            <div className='portal-content'>
                <p className='body-one'>TBC</p>
            </div>
            {/* <Footer /> */}
        </div>
    )
} 
}

