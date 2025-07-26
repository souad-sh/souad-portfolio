import React from "react";
import heroImage from "../assets/souad.jpeg";

const Hero = () => {
  return (
    <section id="about" className="pt-24 md:pt-28 min-h-[calc(100vh-4rem)] bg-gradient-to-br from-primary to-secondary text-white flex items-center">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-5">
          Welcome to my portfolio
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
          I'm a <span className="font-bold text-purple-300">Full Stack Developer</span> dedicated to building clean, user-focused digital experiences.
        </p>
        <a href="/Souad-Shamieh-CV (1).pdf" download className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-3 rounded-full transition">
          Download My CV
        </a>
        {/* Image goes here */}
        <div className="mt-10">
          <img
            src={heroImage}
            alt="Souad Shamieh"
            className="w-64 h-64 rounded-full shadow-lg object-cover mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
