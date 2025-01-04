"use client";

import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-20 flex justify-between items-center bg-black text-white p-6">
      <div className="text-3xl pl-5 font-serif">
        <Link href={"#"}>CodeEase Blog</Link>
      </div>
      <div className="flex items-center">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center text-lg pr-5 font-serif">
          <li className="relative group">
            <Link href={"/"}>Home</Link>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link href={"/#blogs"}>Blogs</Link>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link href={"/contact-us"}>Contact us</Link>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 right-0 bg-black text-white p-6 md:hidden`}
      >
        <ul className="space-y-6 text-lg font-serif text-center">
          <li className="relative group">
            <Link href={"/"}>Home</Link>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link href={"/#blogs"}>Blogs</Link>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link href={"/contact-us"}>Contact us</Link>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
