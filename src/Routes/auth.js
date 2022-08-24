
const router = require('express').Router();
const global = require('../../global')
const users_db_path = global.users_database;
const auth_api = global.auth_api ;

router.route('/login')
    .post((req,res)=>{
        auth_api.login(req,res,users_db_path);
    })

module.exports = router;