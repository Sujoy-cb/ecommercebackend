const express = require('express')
const _ = express.Router()


_.post('/registration',(req,res)=>{
    let {email, fullname, password, isSubscribe} = req.body

    if(!email){
        return res.json({error: "Please enter your email"})
    }
    if(!fullname){
        return res.json({error: "Please enter your fullname"})
    }
    if(!password){
        return res.json({error: "Please enter password"})
    }

    res.json({email, fullname, password, isSubscribe})
})


module.exports = _;