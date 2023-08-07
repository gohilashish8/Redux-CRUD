import React from "react";
import { Link, useLocation } from "react-router-dom";
import AddToCart from "./../AddToCart/AddToCart";

const Header = () => {
  const locetion = useLocation();
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-center px-8 py-02 z-[999]">
      <nav className="nav font-sans font-semibold text-lg ml-auto">
        <ul className="flex items-center">
          <Link to="/">
            <li
              className={`${
                locetion.pathname === "/"
                  ? "border-opacity-100 text-green-500"
                  : ""
              } p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active`}
            >
              HOME
            </li>
          </Link>
          <Link to="/add">
            <li
              className={` ${
                locetion.pathname === "/add"
                  ? "border-opacity-100 text-green-500"
                  : ""
              } p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer`}
            >
              ADD
            </li>
          </Link>
          <Link to="/view">
            <li
              className={` ${
                locetion.pathname === "/view"
                  ? "border-opacity-100 text-green-500"
                  : ""
              } p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer`}
            >
              VIEW
            </li>
          </Link>
          <Link to="/product">
            <li
              className={` ${
                locetion.pathname === "/product"
                  ? "border-opacity-100 text-green-500"
                  : ""
              } p-4 border-b-2 uppercase border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer`}
            >
              Product
            </li>
          </Link>
        </ul>
      </nav>

      <div className="ml-auto">
        <Link to={"/addtocart"} className="inline-block relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={` ${locetion.pathname === "/addtocart" ? "text-green-500" : "text-gray-700" } h-6 w-6 text-gray-700`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
