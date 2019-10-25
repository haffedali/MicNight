const router = require('express').Router();
const Event = require('../../models/Event');


router.get('/', (req,res)=>{
    Event.find((err,result)=>{
        if (err){
            console.log(err)
        }
        res.send(result)
    })  
})

router.post('/', (req,res)=>{
    const event = new Event(req.body);
    event.save((err)=>{
        if (err){
            console.log(err)
        }
    });
    res.send(event)
})







module.exports = router;