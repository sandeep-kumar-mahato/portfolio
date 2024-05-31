import React from "react";
import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen bg-slate-300 flex justify-center items-center">
        <div className="w-3/5 pl-28 pr-4">
          <h1 className="text-5xl font-dancing-script pb-4">HI THERE!</h1>
          <h1 className="text-8xl font-cinzel">I'M SANDEEP</h1>
          <h3 className="text-2xl font-Rye pb-7">WEB DEVELOPER</h3>
          <p className="font-Sacramento text-1xl font-bold pr-48 text-justify">
            I'm a Full Stack Developer with 3+ years of experience in Front End
            Web Development. I'm skilled in Javascript, React, Node.js, Express,
            MongoDB, Git, Heroku, Netlify, Bootstrap, Material UI, Material
            Design , Tailwind CSS, Material Icons, Figma, Photoshop.
          </p>
          <button className="font-Rye bg-zinc-600 text-slate-300 p-4 rounded-md mt-4">
            <a href="https://www.sandeepmahato.live/">RESUME / CV</a>
          </button>
        </div>

        <div className="w-2/5 h-full">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1684607776189-24a70a10a804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Background"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
