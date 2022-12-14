
const fs = require('fs');

function login(req,res,users_db_path){
    // Check if user exists 
    let uid = req.body.uid;
    console.log('we hERE ??')
        fs.readFile(users_db_path,'utf-8',(err,data)=>{
            if(err) throw err;
            
            // Check if user exists
            const users = JSON.parse(data);
            let user_exist = false;
            for(let user of users){
                if(user.uid === uid){user_exist=true}
            }

            // If user exists
            if (user_exist) {console.log('exists')}

            // Create user if it doesnt exists
            if (!user_exist){
                let user = {
                    uid:req.body.uid,
                    username:req.body.username,
                    mail:req.body.mail,
                    data : {
                        profile: {
                            img:req.body.profile,
                            role:'user'
                        },
                        recents_musics : [],
                        liked_musics : [],
                        published_musics : [],
                        playists : []
                    }
                }
                users.push(user);
            }

        // Update database
        updateDatabase(users_db_path,JSON.stringify(users,null,'\t'))
        
        // End request 
        res.send('ok')
    })
}

function updateDatabase(db_path,new_db){
    fs.writeFile(db_path,new_db,(err)=>{
        if(err) throw err;
    })
}

module.exports = {
    login,
}