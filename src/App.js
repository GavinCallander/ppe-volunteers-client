// dependencies
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// page components
import { Landing } from './pages/landing';
// styling
import './App.css';

export const App = () => {

  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className='app'>
        
        <Route exact path='/'
          render={() => 
          <Landing />
        } />

      </div>
    </Router>
  )
};