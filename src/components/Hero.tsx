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
import MagneticElement from "./MagneticElement";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showAlternateName, setShowAlternateName] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setShowAlternateName((prev) => !prev);
      }, 4000);
      return () => clearInterval(interval);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

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
          className="inline-block mb-10 relative"
          variants={itemVariants}
        >
          <MagneticElement strength={0.15} distance={100}>
            <motion.div
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden mx-auto relative shadow-2xl performance-optimized"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                padding: "3px",
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
                  alt="Harish Sivaraman profile"
                  role="img"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-neutral-800"
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

        {/* Intro Heading */}
        <motion.div className="mb-6" variants={itemVariants}>
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-100 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hello, I'm
          </motion.h1>

          {/* Rolling Name */}
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{ 
              minHeight: "clamp(2em, 4vw + 1em, 5em)", 
              perspective: "1000px" 
            }}
          >
            <AnimatePresence mode="wait">
              {showAlternateName ? (
                <motion.h2
                  key="realvoidgojo"
                  initial={{ rotateX: 90, opacity: 0 }}
                  animate={{ 
                    rotateX: 0, 
                    opacity: 1,
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  exit={{ rotateX: -90, opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1],
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    backgroundPosition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                  className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                  style={{
                    background:
                      "linear-gradient(110deg, #606060 0%, #8E8E8E 10%, #F5F5F5 20%, #FFFFFF 30%, #F5F5F5 40%, #8E8E8E 50%, #606060 60%, #8E8E8E 70%, #F5F5F5 80%, #FFFFFF 90%, #F5F5F5 100%)",
                    backgroundSize: "300% 100%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5)) drop-shadow(-1px -1px 2px rgba(255, 255, 255, 0.4)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.8))",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    willChange: "transform, opacity, background-position",
                    position: "relative",
                  }}
                  aria-live="polite"
                >
                  realvoidgojo
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
                    damping: 15,
                  }}
                  className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight"
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    willChange: "transform, opacity",
                  }}
                  aria-live="polite"
                >
                  Harish Sivaraman
                </motion.h2>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            Software Developer
          </motion.h3>
        </motion.div>

        {/* Description */}
        <motion.p
          className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400 mb-10 text-lg sm:text-xl md:text-2xl leading-relaxed px-4"
          variants={itemVariants}
        >
          Software Engineer with a CS background, experienced in AI projects and
          cybersecurity.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12 justify-center items-center px-4"
          variants={itemVariants}
        >
          <MagneticElement strength={0.1} distance={60}>
            <Link to="/projects">
              <motion.button
                className="btn-primary group flex items-center space-x-2 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 performance-optimized"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View My Work</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </motion.button>
            </Link>
          </MagneticElement>

          <MagneticElement strength={0.1} distance={60}>
            <motion.a
              href={resumePDF}
              download="Harish_Sivaraman_Resume.pdf"
              className="btn-secondary group flex items-center space-x-2 rounded-xl font-semibold transition-all duration-300 performance-optimized"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download
                size={18}
                className="group-hover:scale-110 transition-transform duration-200"
              />
              <span>Download CV</span>
            </motion.a>
          </MagneticElement>

          <MagneticElement strength={0.1} distance={60}>
            <Link to="/contact">
              <motion.button
                className="btn-ghost rounded-xl font-semibold transition-all duration-300 performance-optimized"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </MagneticElement>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex space-x-4 justify-center"
          variants={itemVariants}
        >
          {socialLinks.map((link, index) => (
            <MagneticElement key={index} strength={0.15} distance={40}>
              <motion.a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br ${link.color} p-2 sm:p-2.5 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 performance-optimized flex items-center justify-center min-w-[44px] min-h-[44px]`}
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
