import React from 'react'
import {Link} from 'react-router-dom'
import LoginForm from '../../components/LoginForm'

export const Admin = props => {
    return (
        <div>
            <p className="body-one">Sew Strong Admin Login</p>
            
            <LoginForm updateUser={props.updateUser} />

            <p>Not an admin? <Link to="/">Please log in on our home page.</Link></p>
        </div>
    )
}