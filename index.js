const express = require('express')
const chalk = require('chalk')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, ()=>{
    console.log(chalk.red.bgGreenBright("Port Running on 3000 Now"))
})