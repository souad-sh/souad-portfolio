// src/components/Education.jsx
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 px-6 bg-gradient-to-br from-primary to-secondary text-white overflow-hidden"
    >
      {/* Decorative blurred shapes */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-700 opacity-20 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-indigo-600 opacity-20 rounded-full blur-3xl" />

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-12 text-center flex items-center justify-center gap-3"
      >
        <GraduationCap className="w-8 h-8 text-purple-300" />
        Education
      </motion.h2>

      {/* Education Entry */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 border-l-8 border-purple-400"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
          Bachelor’s Degree in Business Computing
        </h3>
        <p className="text-purple-200 text-sm md:text-base mb-2">
          Lebanese University – Faculty of Technology | Sep 2020 – Oct 2023
        </p>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
          Comprehensive studies in programming, data structures, and system analysis.
        </p>
      </motion.div>
    </section>
  );
}
