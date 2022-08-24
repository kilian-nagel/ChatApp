
const express = require('express');
const router = express.Router();
const database = require('./../Controllers/database');

router.route('/fetchUserData')
    .post((req,res)=>{
        database.FetchUserData(req,res);
    })

module.exports = {router};