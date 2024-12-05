import "dotenv/config"
import mongoose from "mongoose"
import express from "express"

const app= express()
app.get("/",(req,res)=>{
    res.send("Hello WOrld!")
})
const port=process.env.PORT
mongoose.connect(process.env.MONGODB_URI!)
.then(()=>{
    console.log("MongoDb Connected ");
    
})
.catch(console.error)

app.listen(port,()=>{
    console.log("Server running ");
    
})