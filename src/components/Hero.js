import React from "react";
import heroImage from "../assets/souad.jpeg";

const Hero = () => {
  return (
    <section
      id="about"
      className="pt-24 md:pt-28 min-h-[calc(100vh-4rem)] bg-gradient-to-br from-primary to-secondary text-white flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20"
    >
      {/* Left Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-5">
          Welcome to my portfolio
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
          I’m a <span className="font-bold text-purple-300">Full Stack Developer</span> dedicated to building
          clean, user-focused digital experiences that solve real-world challenges and deliver impact.
        </p>
        <a
          href="/Souad-Shamieh-CV (1).pdf"
          download
          className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
        >
          Download My CV
        </a>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={heroImage}
          alt="Souad Shamieh"
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;
