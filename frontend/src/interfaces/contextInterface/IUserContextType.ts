import ICart from "../user/ICart"
import IProduct from "../product/IProduct"
import IUser from "../user/IUser"
import IOrder from "../user/IOrder"
import React from "react"
interface  IUserContextType{
    user?:IUser
    cart?:ICart[]
    selectProduct?:IProduct
    wishlist?:string[]
    orders?:IOrder[]
    isLoading:boolean
    error?:string

    //setters
    signUpUser:React.Dispatch<React.SetStateAction<IUser|undefined>>
    setUser:React.Dispatch<React.SetStateAction<IUser>>
    setCart:React.Dispatch<React.SetStateAction<ICart[]|undefined>>
    setSelectProduct:React.Dispatch<React.SetStateAction<IProduct|undefined>>
    setWishlist:React.Dispatch<React.SetStateAction<string[]|undefined>>
    setIsLoading:React.Dispatch<React.SetStateAction<boolean>>
    setError:React.Dispatch<React.SetStateAction<string|null>>
}


export default IUserContextType