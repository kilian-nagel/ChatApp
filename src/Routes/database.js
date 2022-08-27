
const express = require('express');
const router = express.Router();
const database = require('./../Controllers/database');

router.route('/fetchUserData')
    .post(
        async (req,res)=>{
            database.fetchUserData(req,res)
            .then(data=>console.log(data))
            
        })

module.exports = router;