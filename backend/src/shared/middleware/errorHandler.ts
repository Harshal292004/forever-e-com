import { NextFunction,Request,Response } from "express"
import ErrorWithStatus from "../../interfaces/ErrorWithStatus"
const errorHandler=(err:ErrorWithStatus,req:Request,res:Response,next:NextFunction)=>{
    const status=err.status ||404
    const message = err.message || 'Internal server Error '
    console.error(`[${status}] ${message}`)

    res.status(status).json(
        {
            success:false ,
            message
        }
    )
    return;
}

export default errorHandler