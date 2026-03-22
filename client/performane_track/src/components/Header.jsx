import React from "react";
import { assets } from "../assets/assets.js";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50 
        h-[61px] bg-indigo-600
        shadow-md                               
        text-white
      "
    >
      <div className="flex items-center justify-between h-full px-5 md:px-6">
        {/* Left side*/}
        <div className="flex items-center gap-3">
          {assets.logo ? (
            <img
              src={assets.logo}
              alt="TeamPulse Logo"
              className="h-8 w-auto object-contain"
            />
          ) : (
            <div className="h-8 w-8 bg-white rounded flex items-center justify-center text-indigo-600 font-bold text-xl">
              T
            </div>
          )}
        </div>

        {/* Right side  */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden text-white hover:text-indigo-200 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
