import React, { createContext, useState, } from "react";
import useCustomReactQuery from "../Hooks/useCustomReactQuery";
import IUserContextProviderProps from "../interfaces/contextInterface/IUserContextProviderProps";
import IUser from "../interfaces/user/IUser";
import IOrder from "../interfaces/user/IOrder";
import ICart from "../interfaces/user/ICart";
import IProduct from "../interfaces/product/IProduct";
import mapBackendUserToFrontendUser from "../transformation/mapBackendUserToFrontendUser";

export const UserContext = createContext<any>(null);

const UserContextProvider: React.FC<IUserContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [cart, setCart] = useState<ICart[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string|undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState<string>("")

  const signUpUser = (userData: { name: string; email: string; password: string }) => {
    
    const state = useCustomReactQuery<any, IUser>(
      "http://localhost:5000/users/signUpUser",
      mapBackendUserToFrontendUser, 
      {
        method: 'POST',
        data: userData,
      },
    );

    if (state.data) {
      const signedUpUser = state.data;
      setUser(signedUpUser);
    } else {
      setError(state.error||""); 
    }
  };
  
  const logInUser = (credentials: { email: string; password: string }) => {
    const state = useCustomReactQuery<any, IUser>(
      "http://localhost:5000/user/logInUser", 
      mapBackendUserToFrontendUser, 
      {
        method: 'POST',
        data: credentials,
      }
    );

    if (state.data) {
      const loggedInUser = state.data;
      setUser(loggedInUser); 
    } else {
      setError(state.error || "");
    }
  };
  
  const logOutUser = () => {
    const state = useCustomReactQuery<any, null>(
      "http://localhost:5000/user/logOutUser",
      (data) => null, 
      {
        method: 'POST',
      }
    );

    if (state.data) {
      setUser(undefined); // Clear the user state on successful logout
    } else {
      setError(state.error || ""); // Handle errors
    }
  };
  const deleteUserAccount = (password: string) => {
    const state = useCustomReactQuery<any, null>(
      "http://localhost:5000/user/authenticate/deleteUserAccount", // API endpoint
      (data) => null, // No need to transform data
      {
        method: 'DELETE',
        data: { password },
      }
    );

    if (state.data) {
      setUser(undefined); // Clear user data after account deletion
    } else {
      setError(state.error || ""); // Set error message if failed
    }
  };

  const addToCart = (product: IProduct) => {
    console.log(product);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.productId !== productId));
  };

  const placeOrder = () => {
  };

  const addToWishlist = () => {
  };

  const removeFromWishlist = () => {
  };

  return (
    <UserContext.Provider
      value={{
        user,
        orders,
        cart,
        wishlist,
        isLoading,
        error,
        signUpUser,
        logInUser,
        logOutUser,
        deleteUserAccount,
        addToCart,
        removeFromCart,
        placeOrder,
        addToWishlist,
        removeFromWishlist,
        searchQuery, 
        setSearchQuery
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
