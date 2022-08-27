

/* Import
================ */

const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
const auth_route = require('./src/Routes/auth');
const database_route = require('./src/Routes/database')
const spotify_route = require('./src/Routes/spotify')
const path = require('path');

/* Parsers 
=============== */

const app = express();
app.use(cors({
    origin:'*'
}));
app.use(express.json());
app.set('view engine', 'ejs'); 
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(body_parser.urlencoded({extended:false}));

/* Routes
================ */

app.use('/auth',auth_route);
app.use('/database',database_route)
app.use('/spotifyApi',spotify_route)
app.listen(5000)