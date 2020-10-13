import React from "react";
import { ReactComponent as Logo } from "../assets/images/CatwikiLogo.svg";
const Header = () => {
  return (
    <header className="py-6 md:pt-7">
      <Logo fill="#000" title="Cat Wiki Logo" />
    </header>
  );
};

export default Header;
