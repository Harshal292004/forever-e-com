import mongoose, { Document } from "mongoose";

interface ITrackingBase  {
    orderId:mongoose.Types.ObjectId,
    currentLocation:{
        lat:number,
        lng:number
    } | null,
    orderState:'Placed'
    | 'Ready to Ship'
    | 'Shipped'
    | 'Reached Nearest Hub'
    | 'Out for Delivery'
    | 'Delivered'
    | 'Cancelled'
    | 'Returned',
    events:Array<{
        status:string;
        timeStamps:Date;
        location:{
            lat:number;
            lng:number;
        }|null;
        message:string 
    }>
}

export default interface ITracking extends ITrackingBase,Document{
    _id:mongoose.Types.ObjectId
}
