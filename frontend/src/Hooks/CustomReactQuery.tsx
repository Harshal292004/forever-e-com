import axios from "axios";
import { useEffect, useState } from "react";


const useCustomReactQuery=<T,>()=>{
    const [item,setItems]=useState([])
    const [error,setError]=useState(false)
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
        (async()=>{
            try{
                setIsLoading(true)
                setError(false)
                const response=await axios.get('/api/product')
                console.log(response.data);
                setItems(response.data)
                setIsLoading(false)
                
            }catch(error){
                setError(true)
                setIsLoading(false)
            }
        })()
    },[])

    return {item,error,isLoading}

}


export default useCustomReactQuery