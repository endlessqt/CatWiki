import React from "react";
import logo from "../assets/images/CatwikiLogo.svg";
const Header = () => {
  return (
    <header className="mt-6 md:mt-9">
      <img src={logo} alt="Cat Wiki Logo" />
    </header>
  );
};

export default Header;
