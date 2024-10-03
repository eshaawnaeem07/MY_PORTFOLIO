import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div>
      <section
        id="projects"
        className="text-stone-50 h-max w-full bg-[url('/images/pink.png')] bg-cover text-center "
      >
        <div className="flex justify-center">
          <div className="pt-[2rem] md:pt-[4rem] pb-[1rem] ">
            <h1 className="text-3xl md:text-5xl font-Merienda font-semibold hover:text-pink-300 md:pb-1 decoration-double">
              PROJECTS
            </h1>
          </div>
        </div>

        <div className="w-[80%] pt-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] pb-12">
          <div className="h-60 w-80 bg-[url('/images/pink.png')] shadow-sm shadow-pink-200 rounded-xl transform  hover:translate-y-6 transition-all duration-200">
            <div className="flex flex-col gap-y-4 items-center p-4 ">
              {" "}
              <Image
                src="/images/cal.avif"
                alt="Profile Img"
                height={60}
                width={60}
                className="rounded-full border border-pink-200 shadow-sm shadow-black"
              />{" "}
              <Link
                href="https://github.com/AynnFatima999/PROJECT01_CALCULATOR"
                target="_blank"
              >
                <p className="text-2xl text-pink-200 font-sans hover:font-Merienda font-light cursor-pointer hover:font-bold">
                  CALCULATOR
                </p>
              </Link>
              <p className="pt-0 text-sm font-light font-sans">
                A command-line interface calculator that performs basic
                arithmetic operations, including addition, subtraction,
                multiplication, and division.
              </p>
            </div>
          </div>

          <div className="h-60 w-80 bg-[url('/images/pink.png')] shadow-sm shadow-pink-200 rounded-xl transform  hover:translate-y-6 transition-all duration-200">
            <div className="flex flex-col gap-y-4 items-center p-4 ">
              {" "}
              <Image
                src="/images/atm.png"
                alt="Profile Img"
                height={60}
                width={60}
                className="rounded-full border border-pink-200 shadow-sm shadow-black"
              />{" "}
              <Link
                href="https://github.com/AynnFatima999/PROJECT03_ATM"
                target="_blank"
              >
                <p className="text-2xl text-pink-200 font-sans font-light hover:font-Merienda  cursor-pointer hover:font-semibold">
                  ATM
                </p>
              </Link>
              <p className="pt-0 text-sm font-light font-sans">
                This project is a command-line interface (CLI) ATM simulator
                built with TypeScript and Inquirer.js, offering a virtual
                banking experience..
              </p>
            </div>
          </div>

          <div className="h-60 w-80 bg-[url('/images/pink.png')] shadow-sm shadow-pink-200 rounded-xl transform  hover:translate-y-6 transition-all duration-200">
            <div className="flex flex-col gap-y-4 items-center p-4 ">
              {" "}
              <Image
                src="/images/todo.jpg"
                alt="Profile Img"
                height={60}
                width={60}
                className="rounded-full border border-pink-200 shadow-sm shadow-black"
              />{" "}
              <Link
                href="https://github.com/AynnFatima999/PROJECT04_TODO_APP"
                target="_blank"
              >
                <p className="text-2xl text-pink-200 font-sans font-light  cursor-pointer hover:font-bold">
                  TODO APP
                </p>
              </Link>
              <p className="pt-0 text-sm font-light font-sans">
                This project is a command-line interface (CLI) to-do list
                application built with TypeScript and Inquirer.js, enabling
                users to effectively manage their tasks.
              </p>
            </div>
          </div>

          <div className="h-60 w-80 bg-[url('/images/pink.png')] shadow-sm shadow-pink-200 rounded-xl transform  hover:translate-y-6 transition-all duration-200">
            <div className="flex flex-col gap-y-4 items-center p-4 ">
              {" "}
              <Image
                src="/images/stop.jpg"
                alt="Profile Img"
                height={60}
                width={60}
                className="rounded-full border border-pink-200 shadow-sm shadow-black"
              />{" "}
              <Link
                href="https://github.com/AynnFatima999/PROJECT10_TIMER"
                target="_blank"
              >
                <p className="text-2xl text-pink-200 font-sans hover:font-Merienda font-light cursor-pointer hover:font-bold">
                  COUNTDOWN
                </p>
              </Link>
              <p className="pt-0 text-sm font-light font-sans">
                This command-line interface (CLI) countdown timer application,
                developed with TypeScript and Inquirer.js, is designed to help
                users effectively manage and track their time..
              </p>
            </div>
          </div>

          <div className="h-60 w-80 bg-[url('/images/pink.png')] shadow-sm shadow-pink-200 rounded-xl transform  hover:translate-y-6 transition-all duration-200">
            <div className="flex flex-col gap-y-4 items-center p-4 ">
              {" "}
              <Image
                src="/images/game.jpg"
                alt="Profile Img"
                height={60}
                width={60}
                className="rounded-full border border-pink-200 shadow-sm shadow-black"
              />{" "}
              <Link
                href="https://github.com/AynnFatima999/PROJECT08_ADVENTURE_GAME"
                target="_blank"
              >
                <p className="text-2xl text-pink-200 font-sans font-light hover:font-Merienda cursor-pointer hover:font-bold">
                  ADVENTURE GAME
                </p>
              </Link>
              <p className="pt-0 text-sm font-light font-sans">
                This project is a command-line interface (CLI) adventure game
                developed with TypeScript and Inquirer.js, providing a
                text-based interactive experience for players.
              </p>
            </div>
          </div>

          <div className="h-60 w-80 bg-[url('/images/pink.png')] shadow-sm shadow-pink-200 rounded-xl transform  hover:translate-y-6 transition-all duration-200">
            <div className="flex flex-col gap-y-4 items-center p-4 ">
              {" "}
              <Image
                src="/images/quiz.jpg"
                alt="Profile Img"
                height={60}
                width={60}
                className="rounded-full border border-pink-200 shadow-sm shadow-black"
              />{" "}
              <Link
                href="https://github.com/AynnFatima999/PROJECT_09_QUIZ"
                target="_blank"
              >
                <p className="text-2xl text-pink-200 font-sans font-light hover:font-Merienda cursor-pointer hover:font-bold">
                  Quiz App
                </p>
              </Link>
              <p className="pt-0 text-sm font-light font-sans">
                A command-line interface calculator that performs basic
                arithmetic operations, including addition, subtraction,
                multiplication, and division.
              </p>
            </div>
          </div>

          <div className="h-60 w-80 bg-[url('/images/pink.png')] shadow-sm shadow-pink-200 rounded-xl transform  hover:translate-y-6 transition-all duration-200">
            <div className="flex flex-col gap-y-4 items-center p-4 ">
              {" "}
              <Image
                src="/images/stm.png"
                alt="Profile Img"
                height={60}
                width={60}
                className="rounded-full border border-pink-200 shadow-sm shadow-black"
              />{" "}
              <Link
                href="https://github.com/AynnFatima999/PRO07-STUDENT_MANAGMENT-SYSTEM"
                target="_blank"
              >
                <p className="text-2xl text-pink-200 font-sans font-light hover:font-Merienda cursor-pointer hover:font-bold">
                  STUDENT MANAGMENT
                </p>
              </Link>
              <p className="pt-0 text-sm font-light font-sans">
                This project is a command-line interface Student management
                system developed using TypeScript and Inquirer.js, providing a
                text-based interactive experience for managing student records.
              </p>
            </div>
          </div>

          <div className="h-60 w-80 bg-[url('/images/pink.png')] shadow-sm shadow-pink-200 rounded-xl transform  hover:translate-y-6 transition-all duration-200">
            <div className="flex flex-col gap-y-4 items-center p-4 ">
              {" "}
              <Image
                src="/images/cc.png"
                alt="Profile Img"
                height={60}
                width={60}
                className="rounded-full border border-pink-200 shadow-sm shadow-black"
              />{" "}
              <Link
                href="https://github.com/AynnFatima999/PROJECT_CURRENCY_CONVERTER"
                target="_blank"
              >
                <p className="text-2xl text-pink-200 font-sans font-light hover:font-Merienda cursor-pointer hover:font-bold">
                  CURRENCY CONVERTER
                </p>
              </Link>
              <p className="pt-0 text-sm font-light font-sans">
                This project is a command-line interface (CLI) currency
                converter built with TypeScript and Inquirer.js, offering an
                interactive text-based experience for currency conversion.
              </p>
            </div>
          </div>

          <div className="h-60 w-80 bg-[url('/images/pink.png')] shadow-sm shadow-pink-200 rounded-xl transform  hover:translate-y-6 transition-all duration-200">
            <div className="flex flex-col gap-y-4 items-center p-4 ">
              {" "}
              <Image
                src="/images/word.png"
                alt="Profile Img"
                height={60}
                width={60}
                className="rounded-full border border-pink-200 shadow-sm shadow-black"
              />{" "}
              <Link
                href="https://github.com/AynnFatima999/PROJECT06_WORD_COUNTER"
                target="_blank"
              >
                <p className="text-2xl text-pink-200 font-sans font-light hover:font-Merienda cursor-pointer hover:font-bold">
                  WORD COUNTER
                </p>
              </Link>
              <p className="pt-0 text-sm font-light font-sans">
                This project is a command-line interface (CLI) word counter
                developed with TypeScript and Inquirer.js, providing an
                interactive text-based experience for counting words.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
