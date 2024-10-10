"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Nav from "../header/page";

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="text-stone-50 h-screen bg-[url('/images/pink.png')] bg-cover sm:bg-center md:bg-cover opacity-90  md:grid grid-row-2 space-y-2 p-4 place-content-center items-center text-center"
      >
        <div className=" text-3xl md:text-6xl font-bold font-Merienda text-pink-400 p-8 md:pt-2 pb-2 text-center ">
          <TypeAnimation
            sequence={["About", 500, "Me..", 500]}
            style={{ fontSize: "1em" }}
            speed={40}
            repeat={Infinity}
          />
        </div>

        <div className="h-screen md:h-[400px] w-full md:w-[1000px] md:border border-1 border-fuchsia-200 rounded-xl leading-relaxed  md:leading-10 p-8 text-md md:text-xl font-lg font-sans md:tracking-wider sm:flex-wrap text-justify">
          <div className="">
            <div className="flex-wrap ">
              <TypeAnimation
                splitter={(str) => str.split(/(?= )/)}
                sequence={[
                  "As a passionate computer science graduate, I bring a strong skill set to the table. My proficiency in web development—HTML, CSS, and JavaScript—allows me to create seamless and user-friendly websites. Additionally, I’m comfortable with programming languages  enabling me to build logic and solve complex problems. My experience with Git for version control ensures efficient collaboration, while my familiarity with SQL allows me to manage data effectively. Beyond technical abilities, I thrive in collaborative environments, having actively participated in hackathons. Strong communication skills and a Certified Full Stack Developer certification round out my profile. Feel free to explore my GitHub profile for a closer look at my projects!",

                  3000,
                  "",
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 30 }}
                omitDeletionAnimation={true}
                style={{
                  fontSize: "1em",
                  display: "block",
                  minHeight: "200px",
                }}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
