

/* Import
================ */

const express = require('express');
const path = require('path');
const body_parser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');
const apiAuthRoute = require('./src/Controllers/auth');
const users_database = './src/Models/users.json'

/*import express from 'express'
import path from 'path';
import bcrypt from 'bcrypt'
import fs, { unwatchFile } from 'fs'
import body_parser from 'body-parser';
import cookie_parser from 'cookie-parser';
import { fileURLToPath } from 'url';
import cookie from 'cookie';
import {hello} from './hello.js'
import cors from 'cors'

const users_data_filepath = './src/databases/users.json'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);*/

/* Parsers 
=============== */

const app = express();
app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs'); 
app.use(express.static(__dirname));
app.use(express.json());
app.use(body_parser.urlencoded({extended:false}));

/* Routes
================ */

app.get('/Auth',(req,res)=>{
  res.send('asa')
})

app.post('/Auth',async (req,res)=>{
  console.log('here')
  // Check if user exists 
  let uid = req.body.uid;
  fs.readFile(users_database,'utf-8',(err,data)=>{
      if(err) throw err;

      // Check if user exists
      const users = JSON.parse(data);
      let user_exist = false;
      for(let user of users){
          if(user.uid === uid){user_exist=true}
      }

      // If user exists
      if (user_exist) console.log('user already exists');

      // Create user if it doesnt exists
      if (!user_exist){
          let user = {
              uid:req.body.uid,
              username:req.body.username,
              mail:req.body.mail,
              data : {
                  messages:[],
                  relations: {
                      groups:[],
                      friends:[],
                      blocked:[]
                  },
                  profile: {
                      img:req.body.profile,
                      role:'user'
                  }
              }
          }
          users.push(user);
      }

      // Update database
      fs.writeFile(users_database,JSON.stringify(users),(err)=>{
          if(err) throw err;
      })
  })

})
app.listen(5000);