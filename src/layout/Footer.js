import React from "react";
import { ReactComponent as Logo } from "../assets/images/CatwikiLogo.svg";
const Footer = () => {
  return (
    <footer className="bg-black flex-shrink-0 rounded-t-layoutDefault px-7 pt-2 pb-7 sm:px-14 sm:py-7 lg:px-28 flex flex-col  sm:flex-row sm:justify-between text-white">
      <Logo fill="#FFFFFF" title="Cat Wiki Logo" className="w-20 sm:w-32" />
      <div className="flex items-center leading-6 text-center mt-3 sm:mt-0">
        <div className="mr-3  text-lg self-start sm:self-center">&copy;</div>
        <div className="leading-4 sm:leading-6 text-sm md:text-lg ">
          <a
            className="hover:text-gray-500"
            href="https://github.com/endlessqt"
            rel="noopener noreferrer"
            target="_blank"
          >
            Martynov Anton
          </a>{" "}
          - devchellenge.io 2020
        </div>
      </div>
    </footer>
  );
};

export default Footer;
