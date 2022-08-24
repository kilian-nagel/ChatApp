
const fs = require('fs');
const users_db_path = require('../../global').users_database;

async function fetchUserData(req,res){
    fs.readFile(users_db_path,'utf-8',(err,data)=>{
        if(err) throw err;

        const users = JSON.parse(data);
        users.map(user=>{
            if(user.uid === req.body.uid){return user}
        })

        return 'user not found';
    })
}

module.exports = {
    fetchUserData,
}