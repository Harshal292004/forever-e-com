import "dotenv/config"
import express from "express"
import path from "path"
import cookieParser from "cookie-parser"
import db from "./config/mongoose-connection"
import errorHandler from "./shared/middleware/errorHandler"
import userServiceRouter from "./domains/user/routes/userServiceRoutes"
import userAuthenticationRoutes from "./domains/user/routes/userAuthenticationRouter"

const app= express()
const port=process.env.PORT

app.use(express.json())


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use('/users',userServiceRouter)
app.use('/user/authenticate',userAuthenticationRoutes)

app.use(errorHandler)

app.listen(port,()=>{
    console.log("Server running ");
    
})