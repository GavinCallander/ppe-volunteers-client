// dependencies
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

// page components
import { Landing } from '../content/pages/landing';
import { Admin as AdminHome } from '../content/pages/landing/Admin'
import { Admin as AdminPortal, Clinic } from '../content/pages/portal';

// styling
import './App.css';

export const App = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        decodeToken()
    }, []);

    const decodeToken = existingToken => {
        let token = existingToken || localStorage.getItem('userToken');
        let decoded;
        if (token) {
            decoded = jwtDecode(token)
            if (!decoded || (Date.now() > decoded.exp * 1000)) {
                setUser(null);
            } else {
                setUser(decoded);
            }
        } else {
            setUser(null);
        }
    };

    const updateUser = newToken => {
        if (newToken) {
            localStorage.setItem('userToken', newToken);
            decodeToken(newToken)
        } else {
            setUser(null);
            return
        }
    };

    return (
        <Router>
            <div className='app'>
                <Route exact path='/'
                    render={() => 
                    <Landing user={user} updateUser={updateUser} />
                } />
                <Route path='/clinic'
                    render={() =>
                    <Clinic user={user} updateUser={updateUser} />
                } />
                <Route path='/dak394cl9k'
                    render={() =>
                    <AdminHome user={user} updateUser={updateUser} />
                } />
                <Route path='/admin'
                    render={() => 
                    <AdminPortal user={user} updateUser={updateUser} />
                } />
            </div>
        </Router>
    )
};