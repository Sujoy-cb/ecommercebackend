const mongoose = require("mongoose")
const chalk = require("chalk")

const setupDB = async ()=>{
    try{
        mongoose.set("strictQuery",false)
    await mongoose.connect(process.env.DB_URL,()=>{
        console.log(chalk.blue.bgRedBright("MongoDB is Connected"))
    })
    }catch(err){
        console.log(err)
    }
    
}

module.exports = setupDB