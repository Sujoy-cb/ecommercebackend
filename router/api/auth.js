const express = require('express')
const _ = express.Router()
const User = require("../../models/user.js")


_.post('/registration',(req,res)=>{
    let {email, phoneNumber, firstName, lastName, password} = req.body

    if(!email){
        return res.json({error: "Please enter your email"})
    }
    if(!fullname){
        return res.json({error: "Please enter your fullname"})
    }
    if(!password){
        return res.json({error: "Please enter password"})
    }

    const user = new User({
        email, 
        phoneNumber, 
        firstName, 
        lastName, 
        password
    });

    user.save();

    res.json(user);
})


module.exports = _;