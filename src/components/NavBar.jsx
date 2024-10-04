import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import image from "../assets/image.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <nav className="flex justify-between items-center h-20 max-w-[1200px] sm:w-11/12 mx-auto px-3">
      <div className="ml-5 ">
        <NavLink to="/">
          <img src={image} alt="logo" loading="lazy" className="w-[150px] " />
        </NavLink>
      </div>
      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
        <NavLink to="/">
          <p className="text-lg hover:text-green-500 transition duration-300 hidden sm:flex">Home</p>
        </NavLink>
        <NavLink to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-2xl  hover:text-green-500 transition duration-300"/>
            {cart.length > 0 && <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce text-white">{cart.length}</span>}
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
