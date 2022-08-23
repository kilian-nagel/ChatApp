
const router = require('express').Router();
const fs = require('fs');
const users_database = require('../Models/users.json');

router.get('/auth',(req,res)=>{
    res.render('asa')
})

router.post('/auth',async (req,res)=>{
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

module.exports = router;
