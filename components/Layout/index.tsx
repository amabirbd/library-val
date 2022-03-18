import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div >
      <Header />
      <div className="flex justify-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
