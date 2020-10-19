import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/CatwikiLogo.svg";
const Header = () => {
  return (
    <header className="py-6 md:pt-7">
      <Link to="/">
        <Logo fill="#000" title="Cat Wiki Logo" />
      </Link>
    </header>
  );
};

export default Header;
