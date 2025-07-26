import React, { useState } from "react";
import {
  User, BookOpen, Briefcase, Lightbulb, Folder, Award, Mail
} from "lucide-react"; // Ensure you installed this package!

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: "about", label: "About", icon: <User size={16} /> },
    { id: "education", label: "Education", icon: <BookOpen size={16} /> },
    { id: "experience", label: "Experience", icon: <Briefcase size={16} /> },
    { id: "skills", label: "Skills", icon: <Lightbulb size={16} /> },
    { id: "projects", label: "Projects", icon: <Folder size={16} /> },
    { id: "certificates", label: "Certificates", icon: <Award size={16} /> },
    { id: "contact", label: "Contact", icon: <Mail size={16} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-20 bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        {/* Animated Name */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide animate-pulse">
          Souad Mostafa Shamieh
        </h1>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`flex-col md:flex-row md:flex gap-6 text-sm md:text-base font-medium absolute md:static bg-gradient-to-br from-primary to-secondary md:bg-transparent left-0 w-full md:w-auto px-6 md:px-0 transition-all duration-300 ease-in-out ${
            isOpen ? "flex top-20 py-4" : "hidden md:flex"
          }`}
        >
          {links.map(({ id, label, icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="hover:text-purple-300 flex items-center gap-1 transition duration-200"
              >
                {icon} {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
