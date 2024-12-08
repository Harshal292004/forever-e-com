import "dotenv/config"
import mongoose from "mongoose"
import express from "express"
import path from "path"
import errorHandler from "./shared/middleware/errorHandler"
const app= express()
const port=process.env.PORT

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Hello world')
})

















app.use(errorHandler)

app.listen(port,()=>{
    console.log("Server running ");
    
})