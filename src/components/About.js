import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 text-center bg-gradient-to-br from-secondary to-primary text-white relative overflow-hidden"
    >
      {/* Decorative blurred shapes */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>

      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-6"
      >
        Get to Know Me
      </motion.h2>

      {/* About Content */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-200"
      >
        I’m a passionate and <span className="font-bold text-purple-300">Full Stack Developer</span> with a degree in Business Computing from the Lebanese University.
        I build clean, user-friendly applications that balance performance and aesthetics.
        <br /><br />
        With a strong foundation in development, I thrive on solving real-world problems through intuitive interfaces and scalable systems.
        I value <span className="text-purple-200 font-medium">problem solving</span>,
        <span className="text-purple-200 font-medium"> critical thinking</span>,
        and <span className="text-purple-200 font-medium">attention to detail</span>, and I enjoy transforming ideas into reality.
        <br /><br />
        One of my proudest achievements is <span className="font-semibold text-purple-400">UniGuide</span>, a full-stack platform that helps Lebanese students explore universities and majors easily.
      </motion.p>
    </section>
  );
}
