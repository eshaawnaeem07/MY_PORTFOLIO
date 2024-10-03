import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="h-max bg-[url('/images/pink.png')] bg-cover bg-opacity-80">
    <section
      id="contact"
      className="text-stone-50 text-center "
    >
      <div className="flex justify-center pt-10 md:pb-10">
        <div className="font-Merienda text-3xl md:text-5xl font-semibold hover:text-pink-300 md:pb-1 ">
          CONTACT ME..
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-80  md:w-[80%] md:h-[80%]  border-pink-300 ">
        <div className="m-6 space-y-4 text-stone-50 text-md md:text-xl font-Merienda ">
          <div>
            <label htmlFor="name" className="block p-1">
              Enter Your Name:
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-2 py-1 rounded-md bg-[url('/images/pink.png')]  border-2 border-pink-300 text-pink-300 text-center"
            />
          </div>

          <div>
            <label htmlFor="email" className="block p-2">
              Enter Your Email:
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-2 py-1 rounded-md bg-[url('/images/pink.png')]  border-2 border-pink-300 text-pink-300 text-center"
            />
          </div>

          <div>
            <label htmlFor="Message" className="block p-2">
              Write Message:
            </label>
            <textarea
              id="text"
              rows={20}
              className="w-full p-2 rounded-md bg-[url('/images/pink.png')]  border-2 border-pink-300 text-pink-300 h-32 md:h-28  text-center"
            />
          </div>
          <button className="text-white border-2 border-black p-2  bg-pink-800 hover:font-bold rounded-xl w-full  ">Submit</button>
        </div>


        <div className="flex justify-end pb-10 pt-5">
        <Image
                src="/images/ayn01.jpg"
                alt="Profile Img"
                height={300}
                width={400}
                className="rounded-full border-4 border-white shadow-lg shadow-pink-200"
              />
        </div>
      </div>
    </section>
     </div>
  );
};

export default Contact;
