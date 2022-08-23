
const router = require('express').Router();

router.post('/api/user',(req,res)=>{
    res.send('users')
})

module.exports = router;
