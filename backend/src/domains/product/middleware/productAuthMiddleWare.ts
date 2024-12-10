import { Request,Response,NextFunction } from "express";

const verifyProductExists=(req:Request,res:Response,next:NextFunction)=>{
    if(req.params.id){
        
    }
}


export{verifyProductExists}