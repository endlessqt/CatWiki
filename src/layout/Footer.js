import React from "react";
import { ReactComponent as Logo } from "../assets/images/CatwikiLogo.svg";
const Footer = () => {
  return (
    <footer className="bg-black flex-shrink-0 rounded-t-layoutDefault px-7 pt-2 pb-7 sm:px-14 sm:py-7 lg:px-28 flex flex-col  sm:flex-row sm:justify-between">
      <Logo fill="#FFFFFF" title="Cat Wiki Logo" className="w-20 sm:w-32" />
      <div className="flex items-center justify-center leading-6 text-center mt-5 sm:mt-0">
        <div className="mr-3  text-lg">&copy;</div>
        <div className="leading-4 sm:leading-6 text-sm md:text-lg ">
          Martynov Anton - devchellenge.io 2020
        </div>
      </div>
    </footer>
  );
};

export default Footer;
