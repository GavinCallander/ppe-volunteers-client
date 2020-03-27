// dependencies
import React, { useEffect, useState } from 'react';

export const PortalDataView = props => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = () => {
        let token = localStorage.getItem('userToken');
        fetch(`${process.env.REACT_APP_SERVER_URL}/${props.get}`, {
            header: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'isadmin': props.user.isAdmin,
                'isclinic': props.user.isClinic,
                'isdriver': props.user.isDriver,
                'isproducer': props.user.isProducer,
                'isprodlead': props.user.isProdLead,
                'id': props.user.id,
                'region': props.user.region
            }
        })
        .then(response => {
            response.json()
            .then(results => {
                if (response.ok) {
                    setData(results);
                } else {
                    console.log(results.message);
                }
            })
        })
        .catch(err => {
            console.log(err);
        })
    };
    const showDetails = id => {
        props.setShowDetails(id)
    };

    let dataList = data.map(d => (
        <div>
            <p>
                {d.name ? d.name: (d.firstName ? d.firstName : d._id) }
            </p>
            <a href='#' onClick={showDetails(d)}>
                View Details
            </a>
        </div>
    ));
    return (
        <div>
            <p className='body-one'>
                {props.text}
            </p>
            {dataList}
        </div>
    )
};