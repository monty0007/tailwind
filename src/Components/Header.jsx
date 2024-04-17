import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-center gap-2 items-center">
        <img style={{"height":"50px"}} src="/logo.png" alt="logo" />
        <button className=" bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl">SOLO is hiring</button>
      </div>
      <ul className=" hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6">
        <li><a href="#">Plans</a></li>
        <li><a href="#">Find Patner</a></li>
        <li><a href="#">Why SOLO?</a></li>
      </ul>
      <div className=" hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6">
        <a className="text-gray-400" href="#">Sign In</a>
        <button className="rounded-md py-4 px-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
      </div>
      <div className=" lg:hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
