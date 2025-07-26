import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="w-full flex justify-center space-x-10 text-lg font-semibold pt-5">
        <a href="#" className="hover:text-orange-400 transition ">
          HOME
        </a>
        <a href="#" className="hover:text-orange-400 transition">
          PROGRAMS
        </a>
        <a href="#" className="hover:text-orange-400 transition">
          ABOUT
        </a>
      </nav>
    </>
  );
};

export default Navbar;
