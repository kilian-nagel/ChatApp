
const fs = require('fs');

async function fetchUserData(req,res){  
    const users_db_path = './src/Models/users.json'
    fs.readFile(users_db_path,'utf-8',(err,data)=>{
        if(err) throw err;

        const users = JSON.parse(data);
        users.map(user=>{
            if(user.uid === req.body.uid){
                res.send(user);
            }
        })

        return 'user not found';
    })
}

module.exports = {
    fetchUserData,
}