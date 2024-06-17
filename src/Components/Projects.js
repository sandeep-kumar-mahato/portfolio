import React from "react";
import WeatherApp from "./assets/WeatherApp.png";
import Ecommerce from "./assets/Ecommerce.png";
import Glowvista from "./assets/glowvista.png";

const projects = [
  {
    title: "Weather App",
    description: "A weather forecasting application built with HTML and CSS.",
    link: "https://sandeep-kumar-mahato.github.io/Weather/",
    image: WeatherApp,
    repo: "https://github.com/sandeep-kumar-mahato/Weather",
  },
  {
    title: "E-commerce Website",
    description: "An online store built using HTML and CSS.",
    link: "https://sandeep-kumar-mahato.github.io/Landing-Page-e-commerce-website/",
    image: Ecommerce,
    repo: "https://github.com/sandeep-kumar-mahato/Landing-Page-e-commerce-website",
  },
  {
    title: "Glowvista Instruments",
    description:
      "A website for Glowvista Instruments Pvt. Ltd., built with React and Tailwind CSS.",
    link: "https://www.glowvistainstruments.com/",
    image: Glowvista,
    repo: "https://github.com/sandeep-kumar-mahato/Glow-Vista",
  },
];

const Projects = () => {
  return (
    <div className="w-full min-h-screen bg-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center font-Rye text-gray-800 mb-8">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-transparent border-2 border-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {project.title}
                </h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-indigo-600 hover:text-indigo-800"
                >
                  View Project
                </a>
                <br />
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-indigo-600 hover:text-indigo-800"
                >
                  Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
