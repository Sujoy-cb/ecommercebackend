const express = require('express')
const chalk = require('chalk')
const cors = require('cors')
const userRouter = require('./router/userRoute')
const app = express()

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


app.use('/',userRouter)




app.listen(3000, ()=>{
    console.log(chalk.red.bgGreenBright("Port Running on 3000 Now"))
})