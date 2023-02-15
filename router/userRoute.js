const express = require('express')
const _ = express.Router()


_.post('/', function(req,res){
    let {email, fullname, password, isSubscribe} = req.body

    if(!email){
        res.json({error: "Please enter your email"})
    }
    if(!fullname){
        res.json({error: "Please enter your fullname"})
    }
    if(!password){
        res.json({error: "Please enter password"})
    }

    res.json({email, fullname, password, isSubscribe})
})


module.exports = _