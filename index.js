

/* Import
================ */

const express = require('express');
const path = require('path');
const body_parser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');
const apiAuthRoute = require('./src/Controllers/auth');
const users_database = './src/Models/users.json';
const auth_route = require('./src/Routes/auth');
const { env } = require('process');

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

app.use('/auth',auth_route);
app.listen(5000);