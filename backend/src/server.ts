import "dotenv/config"
import mongoose from "mongoose"
import express from "express"
import path from "path"



const app= express()
const router=express.Router()

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