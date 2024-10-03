"use client";
import { TypeAnimation } from "react-type-animation";
import About from "./about/page";
import Project from "./projects/page";
import Contact from "./contact/page";
import Footer from "./footer/page";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section className="bg-[url('/images/pink.png')] bg-cover bg-no-repeat flex-col h-screen ">
        <div className=" grid grid-cols-1 sm:grid-cols-12 pt-10 container px-10 py-4 pb-4">
          <div className="col-span-8 md:p-8 place-content-center text-center sm:text-left">
            <div className="text-stone-50 mb-4 text-3xl lg:text-6xl font-Merienda font-extrabold ">
              <span className="text-transparent bg-clip-text bg-pink-300 font-black">
                Hello! I'm <br />
              </span>{" "}
              
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Alina Fatima",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Frontend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
              />
            </div>
           

            <p className="text-stone-50 sm:text-lg lg:text-lg font-sans mb-5">
              I create responsive and high-performance web applications that{" "}
              <br />
              deliver seamless user experiences across all devices.
            </p>
            <div>
            <Link
                href="aaleali999@gmail.com"
                target="_blank"
              >
              <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-r from-pink-500 via-[#f1edf1] to-pink-500 hover:translate-y-2 text-black w-full sm:w-fit">
                Hire Me
              </button>
              </Link>

              <button className="px-1 py-1 rounded-full mr-4 bg-gradient-to-r from-pink-500 via-[#faf7fa] to-pink-500 text-white border border-white hover:translate-y-2 mt-3 mb-3 w-full sm:w-fit">
                <span className="block bg-[url('/images/pink.png')] rounded-full px-5 py-2 text-stone-50">
                  {" "}
                  Download CV{" "}
                </span>
              </button>
            </div>
          </div>

          <div className="rounded-full border border-slate-50 shadow-pink-200 shadow-md bg-[url('/images/img.png')] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-cover bg-center"></div>
        </div>
      </section>

      <About />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
