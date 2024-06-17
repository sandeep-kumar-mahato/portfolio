import React from "react";
import "./styles.css";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import profile from "./assets/profile-pic.png";

const Home = () => {
  return (
    <>
      <div className="w-full lg:h-screen bg-slate-300 flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-full md:w-[60%] pl-4 pr-4 md:pl-28 md:pr-4 text-center md:text-left mt-4 md:mt-0">
          <h1 className="lg:text-5xl text-3xl font-dancing-script pb-4">
            HI THERE!
          </h1>
          <h1 className="lg:text-5xl text-2xl font-cinzel">
            I'M <br /> SANDEEP Kumar
          </h1>
          <h3 className="text-2xl font-Rye pb-7">WEB DEVELOPER</h3>
          <p className="font-cinzel text-1xl font-bold text-justify">
            I'm a Full Stack Developer with 3+ years of experience in Front End
            Web Development. I'm skilled in Javascript, React, Node.js, Express,
            MongoDB, Git, Heroku, Netlify, Bootstrap, Material UI, Material
            Design, Tailwind CSS, Material Icons, Figma, Photoshop.
          </p>
          <button className="font-Rye bg-zinc-600 text-slate-300 p-4 mb-8 rounded-md mt-4">
            <a href="https://drive.google.com/file/d/1_-tjbdy-2hF6UXb_rZyAtst4cC3Qhk66/view?usp=drive_link">
              RESUME / CV
            </a>
          </button>
        </div>

        <div className="w-full md:w-[40%] flex flex-col items-center lg:mr-14">
          <img
            className="object-cover w-1/2 pt-4 lg:w-[500px] lg:h-[500px] lg:rounded-full filter grayscale"
            src={profile}
            alt="Background"
          />
          <div className="flex mt-4 space-x-4">
            <a
              href="https://www.instagram.com/sandeep.mahato.3726/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl text-gray-800 hover:text-gray-600" />
            </a>
            <a
              href="https://twitter.com/Sandeep06360711?t=E9aoPdwiXfZOtiPom9qTUA&s=03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-3xl text-gray-800 hover:text-gray-600" />
            </a>
            <a
              href="https://www.facebook.com/sandeep.mahato.3726"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-3xl text-gray-800 hover:text-gray-600" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
