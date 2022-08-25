
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
    console.log(user);
    const profile_style = {
        background:`url(${1 && user.data.profile.img}) center/cover`
    }

    useEffect(()=>{
        axios.post('http://localhost:5000/database/fetchUserData',{
            uid:props.uid,
            'Access-Control-Allow-Origin':'allow'
        })
        .then(data=>setUser(data))
        console.log(user);
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
                    <p className="profile__username">{1 && user.username}</p>
                    <button className="btn-dropdown">{'>'}</button>
                </div>
            </div>
        </header>
    );
}

export default Header;