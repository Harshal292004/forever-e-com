
const throwError=(status:number,message:string)=>{
    const error= new Error(message)
    error.status=status
    throw error
}

export default throwError