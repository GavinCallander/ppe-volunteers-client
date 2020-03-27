// dependencies
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode'
// page components
import { Landing } from './pages/landing';
import { PortalHome } from './pages/portal'
// styling
import './App.css';

export const App = () => {

  // const [token, setToken] = useState('');
  const [user, setUser] = useState(null);

  //Check for token on load
  useEffect(() => {
    decodeToken()
  }, [])

  //Decode token
  const decodeToken = (existingToken) => {
    //token is either an existing token of current user, or need to grab from localstorage
    let token = existingToken || localStorage.getItem('userToken')
    let decoded


    
    //if a token exists, decode it 
    //then check if expired or invalid - if so, set user null
    //if both valid & not expired, set user to decoded token object
    if(token) {
      decoded = jwtDecode(token)
      if (!decoded || (Date.now() > decoded.exp * 1000 )) {
        setUser(null)
      } else {
        setUser(decoded)
        console.log('setting user', decoded)
      }
    //if token does not exist, set user to null
    } else {
        setUser(null)
    }
  }

  //Update the user state at the app level from other components when a user logs in, signs up or logs out
  const updateUser = (newToken) => {
    //if there is a new token, store it and decode it (which will set the user to this new info)
    if(newToken) {
      localStorage.setItem('userToken', newToken)
      decodeToken(newToken)
    } else {
      //if no token, user is null
      setUser(null)
    }
  }

  return (
    <Router>
      <div className='app'>
        
        <Route exact path='/'
          render={() => 
          <Landing user={user} updateUser={updateUser}/>
        } />

        <Route path='/portal'
          render={() =>
            <PortalHome user={user} updateUser={updateUser}/>
          }/>

      </div>
    </Router>
  )
};