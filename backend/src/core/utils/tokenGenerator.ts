import jwt from 'jsonwebtoken'
import "dotenv/config"
import Actor from '../../../interfaces/IActor'


const generateToken=(actor:Actor)=>{
    return jwt.sign({email:actor.email,_id:actor._id,password:actor.password},process.env.JWT_KEY!)
}

export default generateToken