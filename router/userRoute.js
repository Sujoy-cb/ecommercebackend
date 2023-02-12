const express = require('express')
const _ = express.Router()


_.get('/', function(req,res){
    res.send("Router set is ok")
})


module.exports = _