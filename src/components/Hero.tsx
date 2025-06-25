import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GithubIcon,
  LinkedinIcon,
  BookOpen,
  ChevronDown,
  Mail,
  Download,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.jpg";
import resumePDF from "../assets/Harish_Resume.pdf";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showAlternateName, setShowAlternateName] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Software Developer";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlternateName((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isTyping) {
      if (typedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1));
        }, 120);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (typedText.length > 0) {
        const timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length - 1));
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(true);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    }
  }, [typedText, isTyping, fullText]);

  const handleScrollDown = () => {
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: viewportHeight,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: <GithubIcon size={isMobile ? 18 : 20} />,
      url: "https://github.com/realvoidgojo",
      label: "GitHub",
      color: "from-neutral-700 to-neutral-900",
    },
    {
      icon: <LinkedinIcon size={isMobile ? 18 : 20} />,
      url: "https://linkedin.com/in/realvoidgojo",
      label: "LinkedIn",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <BookOpen size={isMobile ? 18 : 20} />,
      url: "https://medium.com/@realvoidgojo",
      label: "Medium",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <Mail size={isMobile ? 18 : 20} />,
      url: "mailto:harishsivaraman@outlook.com",
      label: "Email",
      color: "from-purple-500 to-purple-700",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex flex-col justify-center items-center relative px-6 py-24 md:py-32"
    >
      <div className="text-center w-full max-w-5xl">
        {/* Profile Image with Apple-style design */}
        <motion.div
          className="inline-block mb-8 md:mb-12 relative"
          variants={profileVariants}
        >
          <motion.div
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto relative shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: '4px',
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-neutral-800">
              <img
                src={profileImage}
                alt="Harish Sivaraman"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Main Heading with Apple-style typography */}
        <motion.div
          className="mb-6 md:mb-8"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-neutral-900 dark:text-neutral-100 tracking-tight leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="block mb-2">Hello, I'm</span>
            <div className="relative h-[1.1em] overflow-hidden">
              <AnimatePresence mode="wait">
                {showAlternateName ? (
                  <motion.span
                    key="realvoidgojo"
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent line-through decoration-white decoration-10"
                  >
                    realvoidgojo
                  </motion.span>
                ) : (
                  <motion.span
                    key="harish"
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  >
                    Harish Sivaraman
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.h1>
        </motion.div>

        {/* Subtitle with typing effect */}
        <motion.div
          className="mb-8 md:mb-10"
          variants={itemVariants}
        >
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl text-neutral-600 dark:text-neutral-400 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <span className="inline-flex items-center min-h-[1.5em]">
              {typedText}
              <span className="w-0.5 h-6 md:h-8 bg-blue-500 ml-1 animate-pulse"></span>
            </span>
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.p
          className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400 mb-10 md:mb-12 text-lg md:text-xl leading-relaxed font-jetbrains"
          variants={itemVariants}
        >
          Passionate about cybersecurity and modern development. Currently pursuing B.Tech at Sri Sairam, Chennai, 
          while building innovative projects and competing in CTFs.
        </motion.p>

        {/* Action Buttons with refined sizing */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 md:mb-16 justify-center items-center"
          variants={itemVariants}
        >
          <Link to="/projects">
            <motion.button
              className="btn-primary group flex items-center space-x-2 px-6 py-3 text-white rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View My Work</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </Link>

          <motion.a
            href={resumePDF}
            download="Harish_Sivaraman_Resume.pdf"
            className="btn-secondary group flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={18} className="group-hover:scale-110 transition-transform duration-200" />
            <span>Download CV</span>
          </motion.a>

          <Link to="/contact">
            <motion.button
              className="btn-ghost px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Social Links with refined design */}
        <motion.div
          className="flex space-x-4 justify-center"
          variants={itemVariants}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gradient-to-br ${link.color} p-2.5 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300`}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator with improved mobile alignment */}
      <motion.button
        onClick={handleScrollDown}
        className="hero-scroll-button absolute bottom-6 left-1/2 transform -translate-x-1/2 p-2.5 rounded-full bg-white/20 dark:bg-neutral-800/50 backdrop-blur-sm border border-white/30 dark:border-neutral-700/50 hover:bg-white/30 dark:hover:bg-neutral-700/50 transition-all duration-300 performance-optimized"
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll down"
      >
        <ChevronDown size={20} className="text-neutral-600 dark:text-neutral-400" />
      </motion.button>
    </motion.div>
  );
};

export default Hero;
