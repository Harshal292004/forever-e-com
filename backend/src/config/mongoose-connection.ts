import mongoose from "mongoose";
import "dotenv/config"
const db= mongoose.connect(process.env.MONGODB_URI!).then(
    ()=>{
        console.log("DB CONNECTED")
    }
).catch(console.error)

export default db