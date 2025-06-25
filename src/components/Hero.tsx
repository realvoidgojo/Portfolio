import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GithubIcon,
  LinkedinIcon,
  BookOpen,
  Mail,
  Download,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.jpg";
import resumePDF from "../assets/Harish_Resume.pdf";

// Import enhanced components  
import MagneticElement from "./MagneticElement";

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

  // Rolling animation for name change
  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlternateName((prev) => !prev);
    }, 4000);

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
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 py-20 sm:py-24 md:py-32">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center w-full max-w-5xl"
      >
        {/* Profile Image */}
        <motion.div
          className="inline-block mb-6 sm:mb-8 md:mb-12 relative"
          variants={itemVariants}
        >
          <MagneticElement strength={0.15} distance={100}>
            <motion.div
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden mx-auto relative shadow-2xl performance-optimized"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '3px',
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
              }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-neutral-800">
                <img
                  src={profileImage}
                  alt="Harish Sivaraman"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Online indicator */}
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-2 border-white dark:border-neutral-800"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </MagneticElement>
        </motion.div>

        {/* Main Heading with Rolling Animation */}
        <motion.div
          className="mb-4 sm:mb-6 md:mb-8"
          variants={itemVariants}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4 text-neutral-900 dark:text-neutral-100 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hello, I'm
          </motion.h1>
          
          {/* Name with Rolling Animation - Appropriately sized */}
          <div className="relative h-[3em] overflow-hidden">
            <AnimatePresence mode="wait">
              {showAlternateName ? (
                <motion.h2
                  key="realvoidgojo"
                  initial={{ rotateX: 90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  exit={{ rotateX: -90, opacity: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.4, 0, 0.2, 1],
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text  tracking-tight leading-tigh line-through decoration-black decoration-10"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'center bottom'
                  }}
                >
                  <span className="relative">
                    realvoidgojo
                   
                  </span>
                </motion.h2>
              ) : (
                <motion.h2
                  key="harish"
                  initial={{ rotateX: 90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  exit={{ rotateX: -90, opacity: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.4, 0, 0.2, 1],
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight leading-tight"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'center bottom'
                  }}
                >
                  Harish Sivaraman
                </motion.h2>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Subtitle with typing effect */}
        <motion.div
          className="mb-6 sm:mb-8 md:mb-10"
          variants={itemVariants}
        >
          <motion.h3
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-600 dark:text-neutral-400 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="inline-flex items-center min-h-[1.5em]">
              {typedText}
              <motion.span 
                className="w-0.5 h-5 sm:h-6 md:h-8 bg-blue-500 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </span>
          </motion.h3>
        </motion.div>

        {/* Description - Simple fade in */}
        <motion.p
          className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400 mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg md:text-xl leading-relaxed px-4"
          variants={itemVariants}
        >
          Passionate about cybersecurity and modern development. Currently pursuing B.Tech at Sri Sairam, Chennai, while building innovative projects and competing in CTFs.
        </motion.p>

        {/* Action Buttons - Mobile responsive */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-16 justify-center items-center px-4"
          variants={itemVariants}
        >
          <MagneticElement strength={0.1} distance={60}>
            <Link to="/projects">
              <motion.button
                className="w-full sm:w-auto btn-primary group flex items-center justify-center space-x-2 px-6 py-3 text-white rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 performance-optimized"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View My Work</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </Link>
          </MagneticElement>

          <MagneticElement strength={0.1} distance={60}>
            <motion.a
              href={resumePDF}
              download="Harish_Sivaraman_Resume.pdf"
              className="w-full sm:w-auto btn-secondary group flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 performance-optimized"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={18} className="group-hover:scale-110 transition-transform duration-200" />
              <span>Download CV</span>
            </motion.a>
          </MagneticElement>

          <MagneticElement strength={0.1} distance={60}>
            <Link to="/contact">
              <motion.button
                className="w-full sm:w-auto btn-ghost px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 performance-optimized"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </MagneticElement>
        </motion.div>

        {/* Social Links - Mobile responsive */}
        <motion.div
          className="flex space-x-3 sm:space-x-4 justify-center"
          variants={itemVariants}
        >
          {socialLinks.map((link, index) => (
            <MagneticElement 
              key={index} 
              strength={0.15} 
              distance={40}
            >
              <motion.a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br ${link.color} p-2 sm:p-2.5 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 performance-optimized`}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            </MagneticElement>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
