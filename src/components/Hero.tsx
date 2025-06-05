import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isMobile, setIsMobile] = useState(false);
  const [showAlternateName, setShowAlternateName] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "CyberSec Enthusiast & Dev";

  // Add effect for responsive icon sizing
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Toggle between names at intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlternateName((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (isTyping) {
      if (typedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Text is fully typed, wait a bit before starting to erase
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (typedText.length > 0) {
        const timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Text is fully erased, start typing again
        const timeout = setTimeout(() => {
          setIsTyping(true);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    }
  }, [typedText, isTyping, fullText]);

  // Scroll to next section when the chevron is clicked
  const handleScrollDown = () => {
    // Get the height of the viewport
    const viewportHeight = window.innerHeight;

    // Scroll down by the height of the viewport with smooth animation
    window.scrollTo({
      top: viewportHeight,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: <GithubIcon size={isMobile ? 20 : 24} />,
      url: "https://github.com/realvoidgojo",
      label: "GitHub",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: <LinkedinIcon size={isMobile ? 20 : 24} />,
      url: "https://linkedin.com/in/realvoidgojo",
      label: "LinkedIn",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: <BookOpen size={isMobile ? 20 : 24} />,
      url: "https://medium.com/@realvoidgojo",
      label: "Medium",
      color: "from-green-600 to-green-800",
    },
    {
      icon: <Mail size={isMobile ? 20 : 24} />,
      url: "mailto:harishsivaraman@outlook.com",
      label: "Email",
      color: "from-purple-600 to-purple-800",
    },
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex flex-col justify-center items-center relative px-5 py-16 sm:py-24 md:py-32"
    >
      <div className="text-center w-full max-w-4xl z-10">
        {/* Enhanced profile image with better glow effect */}
        <motion.div
          className="inline-block mb-6 md:mb-8 relative"
          variants={profileVariants}
        >
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-400 rounded-full blur-2xl opacity-40 z-10 transform scale-110 translate-y-5 sm:translate-y-7 animate-pulse"></div>

          {/* Profile image with improved styling */}
          <motion.div
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-teal-500/80 mx-auto relative z-20 translate-y-5 sm:translate-y-7 shadow-lg shadow-teal-900/30"
            initial={{ rotate: -8 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full overflow-hidden rounded-full"
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced heading with better gradient */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-100 to-teal-300"
          variants={itemVariants}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Hello, I'm
          </motion.span>
          <div className="relative h-[1.2em] overflow-hidden">
            <AnimatePresence mode="wait">
              {showAlternateName ? (
                <motion.span
                  key="realvoidgojo"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="text-white absolute left-0 right-0"
                >
                  realvoidgojo
                </motion.span>
              ) : (
                <motion.span
                  key="harish"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="text-white absolute left-0 right-0"
                >
                  Harish Sivaraman
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.h1>

        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          {/* Improved typing animation with better alignment */}
          <div className="inline-block relative px-4 overflow-hidden">
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl text-teal-300 font-medium mb-4 md:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <span className="inline-flex items-center min-h-[1.5em]">
                {typedText}
                <span className="typing-cursor"></span>
              </span>
            </motion.h2>
          </div>

          {/* Enhanced paragraph with animated reveal */}
          <motion.p
            className="max-w-[95%] sm:max-w-xl md:max-w-2xl text-gray-300 mb-6 md:mb-8 text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Passionate about CTFs, OSINT, and automation. Building innovative
            solutions with Python, React, and more. B.Tech student at Sri Sairam
            Engineering College, Chennai.
          </motion.p>

          {/* Enhanced buttons with animations */}
          <motion.div
            className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link to="/projects">
              <motion.button
                className="button-effect px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg font-medium shadow-md shadow-teal-900/20 hover:shadow-lg hover:shadow-teal-800/30 transition-all duration-300 text-xs sm:text-sm md:text-base"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                View My Work
              </motion.button>
            </Link>

            <motion.a
              href={resumePDF}
              download="Harish_Sivaraman_Resume.pdf"
              className="button-effect px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center text-xs sm:text-sm md:text-base"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Download size={isMobile ? 14 : 16} className="mr-1 sm:mr-2" />
              Download CV
            </motion.a>

            <Link to="/contact">
              <motion.button
                className="button-effect px-3 sm:px-4 md:px-6 py-2 sm:py-3 border-2 border-teal-500 text-white rounded-lg font-medium hover:border-teal-400 hover:bg-teal-500/10 transition-all duration-300 text-xs sm:text-sm md:text-base"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>

          {/* Enhanced social links with gradient backgrounds */}
          <motion.div
            className="flex space-x-2 xs:space-x-3 sm:space-x-4"
            variants={itemVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br ${link.color} p-2 sm:p-3 rounded-full text-white shadow-md hover:shadow-lg transition-all duration-300`}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator with click functionality */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 hover:text-teal-300 focus:outline-none cursor-pointer p-2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll down"
      >
        <ChevronDown size={isMobile ? 24 : 30} className="text-teal-400" />
      </motion.button>
    </motion.div>
  );
};

export default Hero;
