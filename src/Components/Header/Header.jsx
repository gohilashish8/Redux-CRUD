import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const locetion = useLocation();
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-center px-8 py-02 z-[999]">
      <nav className="nav font-sans font-semibold text-lg">
        <ul className="flex items-center">
          <Link to="/">
            <li className={`${locetion.pathname==="/" ? "border-opacity-100 text-green-500" : "" } p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active`}>
              HOME
            </li>
          </Link>
          <Link to="/add">
            <li className={` ${locetion.pathname==="/add" ? "border-opacity-100 text-green-500" : "" } p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer`}>
              ADD
            </li>
          </Link>
          <Link to="/view">
            <li className={` ${locetion.pathname==="/view" ? "border-opacity-100 text-green-500" : "" } p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer`}>
              VIEW
            </li>
          </Link>
          <Link to="/product">
            <li className={` ${locetion.pathname==="/product" ? "border-opacity-100 text-green-500" : "" } p-4 border-b-2 uppercase border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer`}>
              Product
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
