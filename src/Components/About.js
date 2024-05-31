import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGamepad,
  faCloudRain,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="w-full h-screen bg-slate-300">
      {/* Content */}
      <h1 className="text-4xl font-bold text-center font-Rye pt-4">About</h1>

      {/* Add the content for the About page */}
      <section className="p-12">
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12">
            <FontAwesomeIcon
              icon={faUser}
              className="w-full h-full text-blue-500"
            />
          </div>
          <div className="p-10">
            <h3 className="text-lg font-bold">My Background</h3>
            <p>
              Hi! My name is Sandeep Kumar. I'm from Jamshedpur and currently
              pursuing my B.Tech degree in biomedical engineering from National
              Institute of Technology, Rourkela.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center mt-4">
          <div className="w-12 h-12">
            <FontAwesomeIcon
              icon={faGamepad}
              className="w-full h-full text-red-500"
            />
          </div>
          <div className="p-10">
            <h3 className="text-lg font-bold">My Hobbies</h3>
            <p>
              When I'm not at work, I love to watch Cricket and play some PC or
              Mobile games. When the weather is nice, I take my dogs for hikes,
              indulging in my passion for nature photography.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center mt-4">
          <div className="w-12 h-12">
            <FontAwesomeIcon
              icon={faCloudRain}
              className="w-full h-full text-green-500"
            />
          </div>
          <div className="p-10">
            <h3 className="text-lg font-bold">My Favorite Things</h3>
            <p>
              I love rainy days because the sound of rain helps me to relax and
              feel comfortable. It also helps me to think about all the good in
              my life and be grateful for all that I have.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
