const express = require('express')
const chalk = require('chalk')
const app = express()

app.get('/', function (req, res) {
  res.json([
    {
      "name":"Sujoy"
    },
    {
      "name":"BoB Marley"
    },
    {
      "name":"Leo"
    },
    {
      "name":"Rolex"
    },
  ])
})


app.get('/next', function(req,res){
  res.json([
    {
      "message":"We are done"
    }
  ])
})

app.listen(3000, ()=>{
    console.log(chalk.red.bgGreenBright("Port Running on 3000 Now"))
})