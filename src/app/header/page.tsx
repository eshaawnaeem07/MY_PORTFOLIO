"use client";

import { Bars3Icon, Bars4Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";

import React from "react";

function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="bg-[url('/images/pink.png')] bg-cover bg-no-repeat z-10 p-3 pb-0">
        <div className="justify-between px-2 lg:max-w-8xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:py-4 md:block">
              {/* LOGO */}
              <Link
                href="/"
                className="text-2xl md:text-3xl pl-1 text-pink-300 font-Poppins font-semibold"
              >
                <span className="text-pink-300 ">Dev</span>
                <span className="text-stone-50 font-Merienda font-semibold">110</span>
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className=" text-white hover:text-pink-300 absolute cursor-pointer top-[1rem] right-[1rem] w-[2rem] h-[1rem]"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <XMarkIcon className="text-xl " />
                  ) : (
                    <Bars3Icon className="text-xl " />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex mx-auto ">
                <li className="pb-5 text-lg md:text-sm text-stone-50 font-md font-Merienda hover:text-pink-300 py-2 md:px-4 text-center  ">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    HOME
                  </Link>
                </li>
                <li className="pb-5 text-lg md:text-sm text-stone-50 font-Merienda hover:text-pink-300 py-2 md:px-4 text-center ">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    ABOUT
                  </Link>
                </li>
                <li className="pb-5 text-lg md:text-sm text-stone-50 font-md font-Merienda hover:text-pink-300 py-2 md:px-4 text-center ">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    PROJECTS
                  </Link>
                </li>
                <li className="pb-5 text-lg md:text-sm text-stone-50 font-md font-Merienda hover:text-pink-300 py-2 md:px-4 text-center ">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
