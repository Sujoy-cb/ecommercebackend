const express = require('express')
const _ = express.Router()
const User = require('../../models/user.js')
var jwt = require('jsonwebtoken');
const { sendEmailverification } = require('../../utils/emailSender.js');


_.post('/registration',(req,res)=>{
    let {email, phoneNumber, firstName, lastName, password} = req.body

    if(!email){
        return res.json({error: "Please enter your email"})
    }
    if(!firstName){
        return res.json({error: "Please enter your firstName"})
    }
    if(!lastName){
        return res.json({error: "Please enter your lastName"})
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

    let username = firstName+lastName

    let token = jwt.sign({email:user.email}, "{j&OXqQA&(Itt)j", { expiresIn: "1h"});

    sendEmailverification(user.email, username, token)

    res.json(user);
})


module.exports = _;