import React from "react";
import BackToTop from "./BackToTop";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <BackToTop />
    </div>
  );
};

export default Layout;
