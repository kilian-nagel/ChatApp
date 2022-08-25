
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

function header() {
    const {user,setUser} = useState('');
    const profile_style = {
        background:`url(${user.data.profile.img}) center/cover`
    }

    useEffect(()=>{
        axios.post('https://localhost:5000/database/fetchUserData')
    },[])

    return ( 
        <header id="header" class="header">
            <div className="left">
                <button className="btn-back">{'>'}</button>
                <button className="btn-forwad">{'<'}</button>
            </div>
            <div className="right">
                <button className="btn-subscribe">S'abonner</button>
                <div className="profile">
                    <div className="profile__img" style={profile_style}></div>
                    <p className="profile__username">{user.username}</p>
                    <button className="btn-dropdown">{'>'}</button>
                </div>
            </div>
        </header>
    );
}

export default header;