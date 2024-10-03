import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="bg-[#0e051f] h-screen ">
      <div className="container flex justify-center p-4 pt-10 md:pt-20">
        <div className="container grid-cols-1 md:grid-col-2 lg:grid-cols-3 py-5 flex items-center flex-col md:flex-row justify-evenly space-x-10 gap-y-3 text-white">
          <div className="text-slate-50 text-center">
            <div className="font-Merienda font-bold text-5xl md:text-5xl text-stone-50">
              DEV<span className="text-pink-400">110</span>
            </div>

            <div className="p-2 text-xs md:text-sm tracking-wide text-center">
              <p className="font-sans font-light ">
                copyrights2024 |All Rights Reserved.
              </p>
            </div>
          </div>

          <div className="text-xl md:text-xl font-Merienda font-thin pt-4">
            <ul className="space-y-2 text-center md:text-start">
              <li className="pb-2 ">
                <Link
                  href="#home"
                  className="text-slate-50 hover:text-pink-300 hover:border-b border-blue-300"
                >
                  Home
                </Link>
              </li>
              <li className="pb-2">
                <Link
                  href="#about"
                  className="text-slate-50 hover:text-pink-300 hover:border-b border-blue-300"
                >
                  About
                </Link>
              </li>

              <li className="pb-2">
                <Link
                  href="#projects"
                  className="text-slate-50 hover:text-pink-300 hover:border-b border-blue-300"
                >
                  Projects
                </Link>
              </li>
              <li className="pb-2">
                <Link
                  href="#contact"
                  className="text-slate-50 hover:text-pink-300 hover:border-b  border-blue-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-xl md:text-xl font-Merienda font-thin pt-4">
            <ul className="space-y-2  text-center md:text-start ">
              <li className="pb-2">
                <Link
                  href="https://www.linkedin.com/in/aynnfatima3003/"
                  target="_blank"
                  className="text-slate-50 hover:text-pink-300"
                >
                  Linkedin
                </Link>
              </li>
              <li className="pb-2">
                <Link
                  href="https://github.com/AynnFatima999"
                  target="_blank"
                  className="text-slate-50 hover:text-pink-300"
                >
                  Github
                </Link>
              </li>
              <li className="pb-2">
                <Link
                  href="https://www.npmjs.com/~alinafatima_09"
                  target="_blank"
                  className="text-slate-50 hover:text-pink-300"
                >
                  Npm
                </Link>
              </li>

              <li className="pb-2">
                <Link
                  href="https://wa.me/qr/MFUJXAY4J3A2H1"
                  target="_blank"
                  className="text-slate-50 hover:text-pink-300"
                >
                  Whatsapp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-white flex flex-row justify-center place-content-baseline md:pt-40 gap-4" >
        <SocialIcon url="https://www.linkedin.com/in/aynnfatima3003/" target="_blank" className="border-2 border-pink-700 rounded-full hover:-translate-x-2 duration-300 "  />
        <SocialIcon url="https://github.com/AynnFatima999" target="_blank" className="border-2 border-pink-700 rounded-full hover:-translate-x-2 duration-300 " />
        <SocialIcon url="https://discord.com/invite/rhVzkndC" target="_blank" className="border-2 border-pink-700 rounded-full hover:-translate-x-2 duration-300 "/>
        <SocialIcon url="https://pin.it/4jSvApYMU " target="_blank" className="border-2 border-pink-700 rounded-full hover:-translate-x-2 duration-300"/>
      </div>
    </footer>
  );
};

export default Footer;
