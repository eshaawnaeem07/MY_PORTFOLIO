import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <section
      id="projects"
      className="text-stone-50 h-max bg-[url('/images/pink.png')] bg-cover"
    >
      
        <div className="pt-[3rem] md:pt-[4rem] pb-[1rem] flex justify-center">
          <h1 className="text-3xl md:text-5xl font-Merienda font-semibold hover:text-pink-300 md:pb-1 decoration-double">
            PROJECTS
          </h1>{" "}
        </div>

        <div className="w-[100%] pt-8 grid grid-cols md:grid-cols-2 lg:grid-cols-3  pb-16 gap-x-2 gap-y-8  md:mx-10 justify-center text-center" >
          <div className=" h-60 w-80 bg-[url('/images/pink.png')] shadow-sm shadow-pink-200 rounded-xl transform  hover:translate-y-6 transition-all duration-200">
            <div className="flex flex-col gap-y-4 items-center p-4 ">
              {" "}
              <Image
                src="/images/r.jpeg"
                alt="Profile Img"
                height={60}
                width={60}
                className="rounded-full border border-pink-200 shadow-sm shadow-black"
              />{" "}
              <Link
                href="https://github.com/eshaawnaeem07/WeatherNow"
                target="_blank"
              >
                <p className="text-2xl text-pink-200 font-sans hover:font-Merienda font-light cursor-pointer hover:font-bold">
                  Weather Now
                </p>
              </Link>
              <p className="pt-0 text-sm font-light font-sans">
              WeatherNow is a web application designed to provide real-time weather information. 
              The application will fetch weather data from a weather API and present it visually.
              </p>
            </div>
          </div>

          <div className="h-60 w-80 bg-[url('/images/pink.png')] shadow-sm shadow-pink-200 rounded-xl transform  hover:translate-y-6 transition-all duration-200">
            <div className="flex flex-col gap-y-4 items-center p-4 ">
              {" "}
              <Image
                src="/images/e-com.jpeg"
                alt="Profile Img"
                height={60}
                width={60}
                className="rounded-full border border-pink-200 shadow-sm shadow-black"
              />{" "}
              <Link
                href="https://github.com/eshaawnaeem07/E-Commerce-website--Be-BOLD-"
                target="_blank"
              >
                <p className="text-2xl text-pink-200 font-sans font-light hover:font-Merienda  cursor-pointer hover:font-semibold">
                  Be-BOLD 
                </p>
              </Link>
              <p className="pt-0 text-sm font-light font-sans">
              This project is a comprehensive e-commerce website for a beauty and cosmetics brand called "Be Bold". 
              The website is designed to provide a seamless user experience, showcasing various products & collections.
              </p>
            </div>
          </div>

          <div className="h-60 w-80 bg-[url('/images/pink.png')] shadow-sm shadow-pink-200 rounded-xl transform  hover:translate-y-6 transition-all duration-200">
            <div className="flex flex-col gap-y-4 items-center p-4 ">
              {" "}
              <Image
                src="/images/travel2.jpeg"
                alt="Profile Img"
                height={80}
                width={80}
                className="rounded-full border border-pink-200 shadow-sm shadow-black"
              />{" "}
              <Link
                href="https://github.com/eshaawnaeem07/Travel-Tour-website"
                target="_blank"
              >
                <p className="text-2xl text-pink-200 font-sans font-light  cursor-pointer hover:font-bold">
                  Travel tour website
                </p>
              </Link>
              <p className="pt-0 text-sm font-light font-sans">
              This project built with HTML, CSS, and JavaScript, 
              offers a seamless and visually stunning experience. Discover beautiful destinations, expert travel tips, 
              and interactive features to make your trips unforgettable. 🌍✈️
              </p>
            </div>
          </div>

          <div className="h-60 w-80 bg-[url('/images/pink.png')] shadow-sm shadow-pink-200 rounded-xl transform  hover:translate-y-6 transition-all duration-200">
            <div className="flex flex-col gap-y-4 items-center p-4 ">
              {" "}
              <Image
                src="/images/code-editor.png"
                alt="Profile Img"
                height={60}
                width={60}
                className="rounded-full border border-pink-200 shadow-sm shadow-black"
              />{" "}
              <Link
                href="https://github.com/eshaawnaeem07/Functional-Code-editor"
                target="_blank"
              >
                <p className="text-2xl text-pink-200 font-sans hover:font-Merienda font-light cursor-pointer hover:font-bold">
                  Functional Code Editor
                </p>
              </Link>
              <p className="pt-0 text-sm font-light font-sans">
              This HTML code editor is a web-based tool that enables users to write, execute, and preview HTML, CSS, and JavaScript code. 
              It consists of three sections: HTML, CSS, and JS editors, each with a textarea for input.
              </p>
            </div>
          </div>

          <div className="h-60 w-80 bg-[url('/images/pink.png')] shadow-sm shadow-pink-200 rounded-xl transform  hover:translate-y-6 transition-all duration-200">
            <div className="flex flex-col gap-y-4 items-center p-4 ">
              {" "}
              <Image
                src="/images/portfolio.jpeg"
                alt="Profile Img"
                height={60}
                width={60}
                className="rounded-full border border-pink-200 shadow-sm shadow-black"
              />{" "}
              <Link
                href="https://github.com/eshaawnaeem07/myPortfolio"
                target="_blank"
              >
                <p className="text-2xl text-pink-200 font-sans font-light hover:font-Merienda cursor-pointer hover:font-bold">
                  Portfolio-Website
                </p>
              </Link>
              <p className="pt-0 text-sm font-light font-sans">
               Portfolio website! Explore the "About Me" section to learn more about my journey, check out "My Skills" , meet "My Team" of collaborators,
               and get in touch through the "Contact" section. 
              </p>
            </div>
          </div>

          <div className="h-60 w-80 bg-[url('/images/pink.png')] shadow-sm shadow-pink-200 rounded-xl transform  hover:translate-y-6 transition-all duration-200">
            <div className="flex flex-col gap-y-4 items-center p-4 ">
              {" "}
              <Image
                src="/images/login.jpeg"
                alt="Profile Img"
                height={60}
                width={60}
                className="rounded-full border border-pink-200 shadow-sm shadow-black"
              />{" "}
              <Link
                href="https://github.com/eshaawnaeem07/Login-Register-page--React-"
                target="_blank"
              >
                <p className="text-2xl text-pink-200 font-sans font-light hover:font-Merienda cursor-pointer hover:font-bold">
                  Login/Register page
                </p>
              </Link>
              <p className="pt-0 text-sm font-light font-sans">
              This project Login/Register page built using React. It features a modern, user-friendly interface with 
              form validation and error handling. The project utilizes React Hooks for state management and React Router.
              </p>
            </div>
          </div>

      </div>
    </section>
  );
};

export default Project;
