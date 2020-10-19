import React from "react";
import { Link } from "react-router-dom";
const Button = ({ to, text }) => {
  return (
    <Link
      to={to}
      className="font-bold text-xs lg:text-lg  leading-3 lg:leading-6 flex items-center hover:text-text-main "
    >
      <span className="text-text-main text-opacity-60 uppercase mr-1 lg:mr-2 hover:text-opacity-100">
        {text}
      </span>
      <i className="material-icons text-icon-main hover:text-text-main">
        arrow_right_alt
      </i>
    </Link>
  );
};

export default Button;
