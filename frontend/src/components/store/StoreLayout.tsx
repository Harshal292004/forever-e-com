import React from "react";
import ILayoutProps from "../../interfaces/contextInterface/ILayoutProps";
import StoreNavbar from "./StoreNavbar";
import StoreFooter from "./StoreFooter";
const StoreLayout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <StoreNavbar />
      <main className="mt-12 flex-grow">{children}</main>
      <StoreFooter></StoreFooter>
    </div>
  );
};

export default StoreLayout;
