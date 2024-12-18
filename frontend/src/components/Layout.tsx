import React from "react";
import ILayoutProps from "../interfaces/contextInterface/ILayoutProps";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="mt-12 flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
