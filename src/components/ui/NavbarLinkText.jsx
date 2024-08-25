import React from "react";

const NavbarLinkText = ({children}) => {
  return (
    <div className="relative group cursor-pointer hover:text-blue-700">
      <p className="font-semibold text-medium">{children}</p>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
    </div>
  );
};

export default NavbarLinkText;
