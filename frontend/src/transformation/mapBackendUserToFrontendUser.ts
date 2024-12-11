import mongoose from "mongoose";
import User from "../interfaces/user/IUser";

const mapBackendUserToFrontendUser = (backendUser: any): User => {
    const mapIdsToString = (idArray?: Array<mongoose.Schema.Types.ObjectId>): string[] => {
        if (!idArray) return [];
        return idArray.map(id => id.toString());
    }

    return {
        id: backendUser._id.toString(),
        name: backendUser.name,
        email: backendUser.email,
        phoneNumber: backendUser.phoneNumber,
        addressIds: mapIdsToString(backendUser.address),
        wishlistIds: mapIdsToString(backendUser.wishlist),
        cartIds: mapIdsToString(backendUser.cart),
        orderIds: mapIdsToString(backendUser.orderHistory),
        paymentMethodsIds: mapIdsToString(backendUser.paymentMethods),
        createdAt: backendUser.createdAt,
        updatedAt: backendUser.updatedAt
    };
};

export default mapBackendUserToFrontendUser