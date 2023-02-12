const express = require('express')
const _ = express.Router


_.get('/', function(req,res){
    res.send("I am Router")
})


module.exports = _