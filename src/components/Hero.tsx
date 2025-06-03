import React from "react";
import { motion } from "framer-motion";
import {
  GithubIcon,
  LinkedinIcon,
  BookOpen,
  ChevronDown,
  Mail,
  Download, // Add Download icon
} from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.jpg";
import resumePDF from "../assets/Harish_Resume.pdf"; // Import the resume PDF

const Hero = () => {
  const socialLinks = [
    {
      icon: <GithubIcon size={24} />,
      url: "https://github.com/realvoidgojo",
      label: "GitHub",
    },
    {
      icon: <LinkedinIcon size={24} />,
      url: "https://linkedin.com/in/realvoidgojo",
      label: "LinkedIn",
    },
    {
      icon: <BookOpen size={24} />,
      url: "https://medium.com/@realvoidgojo",
      label: "Medium",
    },
    {
      icon: <Mail size={24} />,
      url: "mailto:harishsivaraman@outlook.com",
      label: "Email",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex flex-col justify-center items-center relative"
    >
      <div className="text-center px-4 z-10">
        {/* Profile image with glow effect */}
        <motion.div
          className="inline-block mb-8 relative"
          variants={itemVariants}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-teal-500 mx-auto relative z-10">
            {/* Replace the Unsplash URL with the imported image */}
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -inset-0.5 bg-teal-600 rounded-full blur-md opacity-75 z-0"></div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-300"
          variants={itemVariants}
        >
          <span className="block">Hello, I'm</span>
          <span className="text-white">Harish Sivaraman</span>
        </motion.h1>

        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <h2 className="text-2xl md:text-3xl text-teal-300 font-medium mb-6">
            <span className="typing-text">
              Cybersecurity & Software Development Enthusiast
            </span>
          </h2>

          <p className="max-w-2xl text-gray-300 mb-8 text-lg">
            Passionate about CTFs, OSINT, and automation. Building innovative
            solutions with Python, React, and more. B.Tech student at Sri Sairam
            Engineering College, Chennai.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <Link to="/projects">
              <motion.button
                className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
            </Link>

            {/* Add Download CV Button */}
            <motion.a
              href={resumePDF}
              download="Harish_Sivaraman_Resume.pdf"
              className="px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} className="mr-2" />
              Download CV
            </motion.a>

            <Link to="/contact">
              <motion.button
                className="px-6 py-3 border-2 border-teal-500 text-white rounded-lg font-medium hover:bg-teal-500/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </div>

          <motion.div className="flex space-x-4" variants={itemVariants}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-teal-700 p-3 rounded-full text-white transition-colors"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown size={30} className="text-teal-400" />
      </motion.div>

      {/* Add some CSS for the typing animation */}
      <style>{`
        .typing-text {
          border-right: 3px solid #2dd4bf;
          white-space: nowrap;
          overflow: hidden;
          animation: typing 3.5s steps(40, end),
            blink-caret 0.75s step-end infinite;
          display: inline-block;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: #2dd4bf;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Hero;
