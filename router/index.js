const express = require('express')
const apiRoutes = require('./api')
const _ = express.Router()


const api = process.env.BASE_URL

_.use(api,apiRoutes)

_.use(api, (req,res)=> {
    res.json("No Api found in this Route")
})


module.exports = _;