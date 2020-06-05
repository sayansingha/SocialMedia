import React,{useEffect, createContext,useReducer} from 'react';
import NavBar from './components/Navbar'
import './App.css'
import Home from './components/screens/Home'
import Signin from './components/screens/Signin'
import Signup from './components/screens/Signup'
import Profile from './components/screens/Profile'
import CreatePost from './components/screens/CreatePost'

import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'


function App() {

  return (
  
      <BrowserRouter>
        <NavBar />
        <Route exact path='/'>
          <Home/>
          </Route>
          <Route path='/signin'>
            <Signin/>
          </Route>
          <Route path = '/signup'>
            <Signup/>
          </Route>
          <Route path = '/profile'>
            <Profile />
          </Route>
          <Route path = '/create'>
            <CreatePost />
          </Route>
      </BrowserRouter>
      
    
  );
}

export default App;
