
import React, { Component , useState , useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import spotifyWebApi from 'spotify-web-api-node';
import LoginButton from './components/loginButton.jsx';
import Header from './components/header';
import Section from './components/section';
import {sections} from './data/sections'
import './style.css';
import { URLSearchParams } from 'url';

let spotifyApi = new spotifyWebApi({
  clientId: '52c7d5e6ef174f6d9461e654aacc2d45',
  clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri: 'http://www.example.com/callback'
});

const code = new URLSearchParams(window.location.search).get('code');

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=52c7d5e6ef174f6d9461e654aacc2d45&response_type=code&redirect_uri=http://localhost:3000&scope=streaming&20user-read-email&20user-read-private&user-library-read&20user-library-modify&20user-read-playback-state&20user-modify-playback-state";

function App() {
  const {loginWithPopup,loginWithRedirect,logout,} = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const CLIENT_ID = '52c7d5e6ef174f6d9461e654aacc2d45'

  useEffect(()=>{
    if(user!== undefined && isAuthenticated){callAuthEndpoint(user)}
    if(user!== undefined && isAuthenticated){callSpotifyEndpoint()}
  })

  return (
    <div className="App">
      {
        isAuthenticated ?      
        <React.Fragment>
          <Header uid={user.sub}></Header>
          <a href={AUTH_URL}>authorize</a>
          <div className="sections">
            {sections.map((section,i)=>{
              return <Section key={i}section={section}>aaa</Section>
            })}
          </div>
        </React.Fragment>
        :
        <React.Fragment>
          <button onClick={loginWithPopup}>loginWithPopup</button>
          <button onClick={loginWithRedirect}>loginWithRedirect</button>
          <button onClick={logout}>Logout</button>
          <LoginButton></LoginButton>
        </React.Fragment> 
      }
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

function callSpotifyEndpoint(){
  /**/
}

export default App;
