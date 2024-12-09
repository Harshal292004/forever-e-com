import { Request,Response,NextFunction } from "express";
import logger from "../utils/logger";

const requestLogger=(req:Request,res:Response, next:NextFunction)=>{
    logger.info(`Incoming request: ${req.method} ${req.originalUrl}`)
    next()
}
export default requestLogger