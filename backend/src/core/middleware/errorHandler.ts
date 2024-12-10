import { NextFunction,Request,Response } from "express"
import ErrorWithStatus from "../../interfaces/ErrorWithStatus"
import logger from "../utils/logger"
const errorHandler=(err:ErrorWithStatus,req:Request,res:Response,next:NextFunction)=>{
    const status=err.status ||404
    const message = err.message || 'Internal server Error '
    logger.error(`Error with status [${status}]  and message [${message}]`)
    res.status(status).json(
        {
            success:false ,
            message
        }
    )
}

export default errorHandler