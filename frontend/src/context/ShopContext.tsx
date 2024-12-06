import React, { createContext, ReactNode, useState } from "react";
import Product from "../interfaces/Product";
import Order from "../interfaces/Order";
import User from "../interfaces/User";
import CartItem from "../interfaces/CartItem";

interface ShopContextType {
  user?: User;
  products: Product[];
  orders: Order[];
  cart: CartItem[];
  selectedProduct?: Product;
  wishlist: string[];
  filters: { category?: string; priceRange?: [number, number]; size?: string } | null;
  sortOption: string | null;
  searchQuery: string;
  notification: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Setters
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | undefined>>;
  setWishlist: React.Dispatch<React.SetStateAction<string[]>>;
  setFilters: React.Dispatch<React.SetStateAction<{ category?: string; priceRange?: [number, number]; size?: string } | null>>;
  setSortOption: React.Dispatch<React.SetStateAction<string | null>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setNotification: React.Dispatch<React.SetStateAction<string | null>>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}


export const ShopContext = createContext<ShopContextType | null>(null);

interface ShopContextProviderProps {
  children: ReactNode;
}

const ShopContextProvider: React.FC<ShopContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [filters, setFilters] = useState<{ category?: string; priceRange?: [number, number]; size?: string } | null>(null);
  const [sortOption, setSortOption] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [notification, setNotification] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  const loadProducts=()=>{

  }

  const loadUser=(
    
  )=>{

  }

  const loadOrders=()=>{

  }

  const loadFilteredProducts=()=>{
    
  }


  const loadSearchQueryProduct=()=>{

  }





  const value = {
    user,
    products,
    orders,
    cart,
    selectedProduct,
    wishlist,
    filters,
    sortOption,
    searchQuery,
    notification,
    isAuthenticated,
    isLoading,
    error,
    setUser,
    setProducts,
    setOrders,
    setCart,
    setSelectedProduct,
    setWishlist,
    setFilters,
    setSortOption,
    setSearchQuery,
    setNotification,
    setIsAuthenticated,
    setIsLoading,
    setError,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
