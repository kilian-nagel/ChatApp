
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

function Header(props) {
    const [user,setUser] = useState({
        username:'',
        data:{
            profile:{
                img:'',
            }
        }
    });
    const profile_style = {

    }

    useEffect(()=>{
        axios.post('http://localhost:5000/database/fetchUserData',{
            uid:props.uid,
            /*'Access-Control-Allow-Origin':'allow'*/
        })
        .then(data=>setUser(data.data))
        .then(data=>console.log(user))
    },[])

    return ( 
        <header id="header" className="header">
            <div className="left">
                <button className="btn-back"></button>
                <button className="btn-forward"></button>
            </div>
            <div className="right">
                <button className="btn-subscribe">S'abonner</button>
                <div className="profile">
                    <div className="profile__img" style={profile_style}></div>
                    <p className="profile__username">{user.username}</p>
                    <button className="btn-dropdown"></button>
                </div>
                <i className="fa-solid fa-gear btn-gear"></i>
            </div>
        </header>
    );
}

export default Header;