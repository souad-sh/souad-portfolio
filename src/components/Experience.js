import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Web Development Intern – Laptop Company",
      date: "Jan 2024 – Apr 2024",
      description:
        "Built a full-stack Clinic Management System using React, Node.js, MySQL, and Tailwind CSS.",
    },
    {
      title: "Final Year Project – UniGuide",
      date: "Apr 2025 – Jul 2025",
      description:
        "Developed a university & major search platform with real-time filters, chatbot, dashboards, and role-based access control.",
    },
    {
      title: "Freelance Web Developer",
      date: "Since 2023",
      description:
        "Developed responsive websites and SaaS platforms for clients using modern web technologies. Delivered customized solutions across industries.",
    },
    {
      title: "CyberSecurity Course – SemiColon Academy",
      date: "Mar 3, 2025 – Present",
      description:
        "Topics include Cybersecurity, Cryptography, App & Infra Security, and Reverse Engineering. Participating in a CTF challenge organized with Google Developer Group.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 px-6 bg-gradient-to-br from-primary to-secondary text-white overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-white mb-10 flex items-center justify-center gap-3"
      >
        <Briefcase className="w-8 h-8 text-purple-300" />
        Experience
      </motion.h2>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md border-l-8 border-purple-400"
          >
            <h3 className="text-lg font-semibold text-purple-200 mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-purple-100 mb-2">{item.date}</p>
            <p className="text-sm text-gray-200">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
