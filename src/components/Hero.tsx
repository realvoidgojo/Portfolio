import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  GithubIcon,
  LinkedinIcon,
  BookOpen,
  ChevronDown,
  Mail,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.jpg";
import resumePDF from "../assets/Harish_Resume.pdf";

const Hero = () => {
  // Add state for screen size for dynamic icon sizing
  const [isMobile, setIsMobile] = useState(false);

  // Add effect for responsive icon sizing
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Set initial value
    checkMobile();

    // Add listener for window resize
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const socialLinks = [
    {
      icon: <GithubIcon size={isMobile ? 20 : 24} />,
      url: "https://github.com/realvoidgojo",
      label: "GitHub",
    },
    {
      icon: <LinkedinIcon size={isMobile ? 20 : 24} />,
      url: "https://linkedin.com/in/realvoidgojo",
      label: "LinkedIn",
    },
    {
      icon: <BookOpen size={isMobile ? 20 : 24} />,
      url: "https://medium.com/@realvoidgojo",
      label: "Medium",
    },
    {
      icon: <Mail size={isMobile ? 20 : 24} />,
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
      className="min-h-screen flex flex-col justify-center items-center relative px-5 py-16 sm:py-20 md:py-0" // Increased side padding
    >
      <div className="text-center w-full max-w-4xl z-10 overflow-hidden"> {/* Added overflow-hidden */}
        {/* Profile image with glow effect */}
        <motion.div
          className="inline-block mb-6 md:mb-8 relative"
          variants={itemVariants}
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-teal-500 mx-auto relative z-10">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -inset-0.5 bg-teal-600 rounded-full blur-md opacity-75 z-0"></div>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-300"
          variants={itemVariants}
        >
          <span className="block">Hello, I'm</span>
          <span className="text-white">Harish Sivaraman</span>
        </motion.h1>

        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          {/* Fixed text overflowing by adjusting container width */}
          <div className="w-full max-w-[95%] sm:max-w-full mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-teal-300 font-medium mb-4 md:mb-6">
              <span className="typing-text-mobile sm:hidden">
                Cybersecurity & Dev
              </span>
              <span className="typing-text hidden sm:inline">
                Cybersecurity & Software Development Enthusiast
              </span>
            </h2>
          </div>

          {/* Improved paragraph responsiveness */}
          <p className="max-w-[95%] sm:max-w-xl md:max-w-2xl text-gray-300 mb-6 md:mb-8 text-sm sm:text-base md:text-lg">
            Passionate about CTFs, OSINT, and automation. Building innovative
            solutions with Python, React, and more. B.Tech student at Sri Sairam
            Engineering College, Chennai.
          </p>

          {/* Button container with better spacing for small screens */}
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12 justify-center">
            <Link to="/projects">
              <motion.button
                className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors text-xs sm:text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
            </Link>

            <motion.a
              href={resumePDF}
              download="Harish_Sivaraman_Resume.pdf"
              className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors flex items-center text-xs sm:text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={isMobile ? 14 : 16} className="mr-1 sm:mr-2" />
              Download CV
            </motion.a>

            <Link to="/contact">
              <motion.button
                className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 border-2 border-teal-500 text-white rounded-lg font-medium hover:bg-teal-500/20 transition-colors text-xs sm:text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </div>

          {/* Social links with better spacing for smaller screens */}
          <motion.div
            className="flex space-x-2 xs:space-x-3 sm:space-x-4" // Reduced spacing on very small screens
            variants={itemVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-teal-700 p-2 sm:p-3 rounded-full text-white transition-colors"
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
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown
          size={isMobile ? 24 : 30}
          className="text-teal-400"
        />
      </motion.div>

      {/* Add CSS for the typing animation - with mobile optimizations */}
      <style>{`
        .typing-text {
          border-right: 3px solid #2dd4bf;
          white-space: nowrap;
          overflow: hidden;
          animation: typing 3.5s steps(40, end),
            blink-caret 0.75s step-end infinite;
          display: inline-block;
        }
        
        .typing-text-mobile {
          border-right: 3px solid #2dd4bf;
          white-space: nowrap;
          overflow: hidden;
          animation: typing-mobile 2.5s steps(20, end),
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
        
        @keyframes typing-mobile {
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
        
        /* Fix for Safari mobile viewport height issue */
        @supports (-webkit-touch-callout: none) {
          .min-h-screen {
            min-height: -webkit-fill-available;
          }
        }
        
        /* Add custom xs breakpoint for very small mobile screens */
        @media (min-width: 400px) {
          .xs\\:space-x-3 {
            column-gap: 0.75rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Hero;
