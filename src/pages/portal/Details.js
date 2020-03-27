import React from './node_modules/react'
import {Redirect} from './node_modules/react-router-dom'

const Details = props => {
    
    if(!props.showDetails) {
        return null
    }

    if(!props.user){
        return <Redirect to="/"/>
    }

    let details
    if(props.showDetails.name && props.showDetails.address) {
        details = (
            <div>
                <p className='body-one'>{`Clinic: ${props.showDetails.name}`}</p>
                <p>{props.showDetails.address[0]}</p>
                <p>{props.showDetails.city}, {props.showDetails.state} {props.showDetails.zipcode}</p>
                <p>Assigned Region: {props.showDetails.region}</p>
                <p>Assigned Lead: {props.showDetails.assignedUser.firstName} {props.showDetails.assignedUser.lastName}</p>
                <p>Number of Employees: {props.showDetails.numberOfEmployees}</p>
                {/* <p>Active orders: {props.showDetails.orders.length}</p> */}
            </div>
        )
    }
    else if(props.showDetails.firstName) {
        // let inventory = props.showDetails.inventory.map(inv => `Product: ${inv.product} Quantity: ${inv.quantity}`)
        details = (
            <div>
                <p className="body-one">{`Volunteer: ${props.showDetails.firstName} ${props.showDetails.lastName}`}</p>
                {/* <p>Current Inventory: {props.showDetails.inventory}</p> */}
                <p>{props.showDetails.address[0]}</p>
                <p>{props.showDetails.city}, {props.showDetails.state} {props.showDetails.zipcode}</p>
                <p>Assigned Region: {props.showDetails.region}</p>
            </div>
        )
    }
    else {
        details = (
            <div>
                <p className='body-one'>{`Order #: ${props.showDetails._id}`} </p>
                <p>Collected? {props.showDetails.collected ? 'Yes' : 'No'}</p>
                <p>Delivered? {props.showDetails.delivered ? 'Yes' : 'No'}</p>
            </div>
        )
    }

    return (
        <div>
            
            {details}
            
        </div>
    )
}

export default Details