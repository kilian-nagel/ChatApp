
const express = require('express');
const router = express.Router();
const database = require('./../Controllers/database');

router.route('/fetchUserData')
    .post(
        async (req,res)=>{
            let response = await database.fetchUserData(req,res);
            res.send(response);
        })

module.exports = router;