import React from "react";
import NavbarLinkText from "../components/ui/NavbarLinkText";
import { SiPuma } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="flex fixed top-0 w-full items-center z-50 space-x-4 justify-between py-5 px-14 lg:px-36 bg-white shadow-md">
      <div className="flex space-x-2 items-center hover:scale-105 hover:text-orange-500 cursor-pointer transition-all">
        <h1 className="text-lg font-bold">{"<Vijesh/>"}</h1>
      </div>
      <div className="md:flex space-x-8 hidden">
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
