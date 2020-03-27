import React, {useState, useEffect} from 'react'

const PortalDataView = props => {

    let [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        let token = localStorage.getItem('userToken')
        console.log(`${process.env.REACT_APP_SERVER_URL}/${props.get}`)
        console.log({
            headers: {
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
        fetch(`${process.env.REACT_APP_SERVER_URL}/${props.get}`, {
            headers: {
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
                if(response.ok) {
                    console.log('🌈🌈results RECEIVED🌈🌈', results)
                    setData(results)
                }
                else {
                    console.log(results.message)
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    //show details component for specific data clicked on
    const showDetails = id => {
        //function to lift up state to tell parent page to show details
        props.setShowDetails(id)
    }
    

    let dataList = data.map(d => {
        return(
            <div>
                <p>{d.name ? d.name : (d.firstName ? d.firstName : d._id)}</p>
                <a href="#" onClick={() => showDetails(d)}>View details</a>
            </div>
        )

    })

   
    return (
        <div>
            <p className='body-one'>{props.text}</p>
            {dataList}
        </div>
    )
}

export default PortalDataView