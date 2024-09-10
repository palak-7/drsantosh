import React from "react";
import Top from "./Top";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <Top />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
