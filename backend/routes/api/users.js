const mongoose = require('mongoose');
const router = require('express').Router();
const User = require('../../models/User');


router.get('/', (req,res)=>{
    User.find((err,result)=>{
        if (err){
            console.log(err)
        }
        res.send(result)
    })
        
})

router.post('/signup', function(req,res){
    
    const user = new User(req.body)
    user.save((err) => {
        if (err){
            console.log(err)
        }
    });
    res.send(user)
})

module.exports = router;