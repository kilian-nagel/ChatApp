
import React, { Component , useState , useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import LoginButton from './loginButton.jsx';

function App() {
  const {loginWithPopup,loginWithRedirect,logout,} = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(()=>{
    if(user!== undefined && isAuthenticated){callAuthEndpoint(user)}
  })

  return (
    <div className="App">
      <button onClick={loginWithPopup}>loginWithPopup</button>
      <button onClick={loginWithRedirect}>loginWithRedirect</button>
      <button onClick={logout}>Logout</button>
      <LoginButton></LoginButton>
    </div>
  );
}

function callAuthEndpoint(user){
  if(user !== undefined){
    console.log(user)
    axios.post('http://localhost:5000/auth/login',{
      uid:user.sub,
      username:user.name,
      mail:user.email,
      profile:user.picture
    })
  }
}

export default App;
