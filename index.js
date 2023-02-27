require('dotenv').config()
const express = require('express')
const chalk = require('chalk')
const cors = require('cors')
// const userRouter = require('./router/userRoute')
const setupDB = require("./config/dbConfig")
const router = require('./router')
const app = express()


console.log(process.env.BASE_URL)

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

setupDB()
app.use(router)




app.listen(3000, ()=>{
    console.log(chalk.red.bgGreenBright("Port Running on 3000 Now"))
})