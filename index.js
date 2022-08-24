

/* Import
================ */

const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
const auth_route = require('./src/Routes/auth');

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
app.use('/')
app.listen(5000);