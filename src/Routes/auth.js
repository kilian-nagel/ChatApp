
const router = require('express').Router();
const fs = require('fs');
const users_db_path = require('../../global').users_database;
const auth_api_path = require('../../global').auth_api;

router.route('/login')
    .post((req,res)=>{
        console.log('HERE')
        // Check if user exists 
        let uid = req.body.uid;
        fs.readFile(users_db_path,'utf-8',(err,data)=>{
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
        fs.writeFile(users_db_path,JSON.stringify(users,null,'\t'),(err)=>{
            if(err) throw err;
        })})
})

module.exports = router;