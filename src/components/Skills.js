// src/components/Skills.jsx
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import reactLogo from "../assets/skills/react_logo.png";
import tailwind from "../assets/skills/tailwind.png";
import jquery from "../assets/skills/jquery.png";
import ajax from "../assets/skills/ajax.png";
import laravel from "../assets/skills/laravel_logo.png";

import java from "../assets/skills/java.png";
import csharp from "../assets/skills/csharp.png";
import python from "../assets/skills/python.png";
import c from "../assets/skills/c.png";

import { motion } from "framer-motion";

export default function Skills() {
  const webSkills = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "React.js", icon: reactLogo },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "jQuery", icon: jquery },
    { name: "AJAX", icon: ajax },
    { name: "Laravel", icon: laravel },
  ];

  const programmingSkills = [
    { name: "Java", icon: java },
    { name: "C#", icon: csharp },
    { name: "Python", icon: python },
    { name: "C", icon: c },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-br from-secondary to-primary text-white relative overflow-hidden"
    >
      {/* Decorative Background Blurs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl"></div>

      {/* Web Development */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-14 z-10 relative"
      >
        Web Development Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto z-10 relative mb-20">
        {webSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col items-center justify-center bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-transparent hover:border-purple-500 hover:shadow-purple-600/40 hover:scale-105 transition-all duration-300"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-32 h-32 mb-4 object-contain transition-transform duration-300 group-hover:rotate-6"
            />
            <p className="text-lg font-semibold text-white group-hover:text-purple-300 transition duration-300">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Programming Skills */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-14 z-10 relative"
      >
        Programming Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto z-10 relative">
        {programmingSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col items-center justify-center bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-transparent hover:border-purple-500 hover:shadow-purple-600/40 hover:scale-105 transition-all duration-300"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-32 h-32 mb-4 object-contain transition-transform duration-300 group-hover:rotate-6"
            />
            <p className="text-lg font-semibold text-white group-hover:text-purple-300 transition duration-300">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
