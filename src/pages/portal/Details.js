import React from 'react'

const Details = props => {
    
    if(!props.showDetails) {
        return null
    }
    return (
        <div>SHOW DETAILS for {props.showDetails}</div>
    )
}

export default Details