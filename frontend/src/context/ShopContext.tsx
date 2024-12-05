import React, { createContext, ReactNode, useState } from "react";
import Product from "../interfaces/Product";
import Order from "../interfaces/Order";

interface ShopContextType {
  products: Product[];
  orders: Order[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}

export const ShopContext = createContext<ShopContextType | null>(null);

interface ShopContextProviderProps {
  children: ReactNode;
}

const ShopContextProvider: React.FC<ShopContextProviderProps> = ({ children }) => {
  
  const [user,setUser]=useState()
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  

  return (
    <ShopContext.Provider value={{ products, orders, setProducts, setOrders }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
