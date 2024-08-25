import React from "react";
import NavbarLinkText from "../components/ui/NavbarLinkText";
import { SiPuma } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="flex items-center space-x-4 justify-between py-5 px-16 lg:px-36 bg-white shadow-md">
      <div className="flex space-x-2 items-center hover:scale-105 hover:text-orange-500 cursor-pointer transition-all">
        <SiPuma size={23} />
        <h1 className="font-bold text-lg">Dev</h1>
      </div>
      <div className="flex space-x-8">
        <NavbarLinkText>Home</NavbarLinkText>
        <NavbarLinkText>About</NavbarLinkText>
        <NavbarLinkText>Skillz</NavbarLinkText>
        <NavbarLinkText>Education</NavbarLinkText>
        <NavbarLinkText>Project</NavbarLinkText>
        <NavbarLinkText>Contact me</NavbarLinkText>
      </div>
    </div>
  );
};

export default Navbar;
