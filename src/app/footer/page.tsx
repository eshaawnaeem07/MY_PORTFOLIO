import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="bg-[#0e051f] h-max  ">
      <div className="container mx-auto p-4 pt-10 md:pt-20 flex flex-col md:flex-row md:justify-evenly md:space-x-10 items-center text-white">
  {/* Logo and Copyright Section */}
  <div className="text-center md:text-left mb-6 md:mb-0">
    <div className=" font-bold text-5xl text-stone-50">
      DEV<span className="text-pink-400 font-Merienda">110</span>
    </div>
    <div className="p-2 text-xs md:text-sm tracking-wide">
      <p className="font-sans font-light">copyrights2024 | All Rights Reserved.</p>
    </div> 
  </div>

  {/* Navigation Links */}
  <div className="text-xl md:font-Merienda font-thin mb-6 md:mb-0">
    <ul className="space-y-2 text-center md:text-left">
      <li>
        <Link href="#home" className="text-slate-50 hover:text-pink-300 hover:border-b border-blue-300">
          Home
        </Link>
      </li>
      <li>
        <Link href="#about" className="text-slate-50 hover:text-pink-300 hover:border-b border-blue-300">
          About
        </Link>
      </li>
      <li>
        <Link href="#projects" className="text-slate-50 hover:text-pink-300 hover:border-b border-blue-300">
          Projects
        </Link>
      </li>
      <li>
        <Link href="#contact" className="text-slate-50 hover:text-pink-300 hover:border-b border-blue-300">
          Contact
        </Link>
      </li>
    </ul>
  </div>

  {/* Social Links */}
  <div className="text-xl md:font-Merienda font-thin">
    <ul className="space-y-2 text-center md:text-left">
      <li>
        <Link href="https://www.linkedin.com/in/aynnfatima3003/" target="_blank" className="text-slate-50 hover:text-pink-300">
          LinkedIn
        </Link>
      </li>
      <li>
        <Link href="https://github.com/AynnFatima999" target="_blank" className="text-slate-50 hover:text-pink-300">
          GitHub
        </Link>
      </li>
      <li>
        <Link href="https://www.npmjs.com/~alinafatima_09" target="_blank" className="text-slate-50 hover:text-pink-300">
          Npm
        </Link>
      </li>
      <li>
        <Link href="https://wa.me/qr/MFUJXAY4J3A2H1" target="_blank" className="text-slate-50 hover:text-pink-300">
          WhatsApp
        </Link>
      </li>
    </ul>
  </div>
</div>

{/* Social Icons Section */}
<div className="flex justify-center gap-2 pt-10 md:pt-12 pb-12">
  <SocialIcon
    url="https://www.linkedin.com/in/aynnfatima3003/"
    target="_blank"
    className="border-2 border-white rounded-full hover:-translate-x-2 duration-300"
    style={{ height: 40, width: 40 }} // Adjust the size here
  />
  <SocialIcon
    url="https://github.com/AynnFatima999"
    target="_blank"
    className="border-2 border-white rounded-full hover:-translate-x-2 duration-300"
    style={{ height: 40, width: 40 }} // Adjust the size here
  />
  <SocialIcon
    url="https://discord.com/invite/rhVzkndC"
    target="_blank"
    className="border-2 border-white rounded-full hover:-translate-x-2 duration-300"
    style={{ height: 40, width: 40 }} 
  />
  <SocialIcon
    url="https://pin.it/4jSvApYMU"
    target="_blank"
    className="border-2 border-white rounded-full hover:-translate-x-2 duration-300"
    style={{ height: 40, width: 40 }} 
  />
</div>


   
      
    </footer>
  );
};

export default Footer;
