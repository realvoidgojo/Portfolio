import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon, ExternalLink, Code, X, Rocket, Star } from "lucide-react";

interface Project {
  title: string;
  description: string;
  detailedDescription?: string;
  tags: string[];
  image: string;
  githubLink: string;
  liveLink: string;
  features?: string[];
}

const projects: Project[] = [
  {
    title: "FlaskEdit - Secure Image Converter",
    description:
      "A robust, secure single-page image conversion web application built with Flask and Pillow for universal format support.",
    detailedDescription:
      "FlaskEdit is a comprehensive image conversion tool that allows users to convert between PNG, JPEG, GIF, BMP, WEBP, and TIFF formats with optimized settings for each conversion. It features smart format filtering to exclude source formats from conversion options, automatic file deletion after 1 hour for privacy, and a responsive design that works perfectly on both mobile and desktop.",
    tags: ["Python", "Flask", "Pillow", "Web Development"],
    image:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubLink: "https://github.com/realvoidgojo/FlaskEdit",
    liveLink: "https://flask-edit.onrender.com",
    features: [
      "Universal Format Support (PNG, JPEG, GIF, BMP, WEBP, TIFF)",
      "Smart Format Filtering",
      "High-Quality Conversions",
      "Auto-Deletion after 1 hour",
      "Responsive Design",
      "Secure File Handling",
    ],
  },
  {
    title: "Video Analytics Platform",
    description:
      "Real-time video surveillance system built for Cyberthon 2025 with object detection and heatmap analytics.",
    detailedDescription:
      "This video analytics platform was my finalist entry for Cyberthon 2025. It features YOLOv11-based object detection, heatmap analytics for movement tracking, real-time WebSocket streaming, and a modern React frontend with a Flask+Celery backend for efficient processing.",
    tags: ["Python", "Flask", "Celery", "YOLOv11", "React"],
    image:
      "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubLink: "https://github.com/realvoidgojo/VideoAnalytics-Cyberthon",
    liveLink: "",
    features: [
      "YOLOv11-based object detection",
      "Real-time heatmap analytics",
      "WebSocket streaming",
      "Flask+Celery backend",
      "React frontend dashboard",
    ],
  },
  {
    title: "CyTools - Cybersecurity Toolkit",
    description:
      "A collection of 5 essential cybersecurity tools built with Python and Tkinter for educational purposes.",
    detailedDescription:
      "CyTools is a comprehensive cybersecurity toolkit featuring 5 distinct utilities: Caesar Cipher for encryption/decryption, Keylogger for keystroke monitoring, Network Packet Analyzer for traffic inspection, Password Complexity checker, and Pixel Manipulation for steganography applications.",
    tags: ["Python", "Tkinter", "Cybersecurity", "Educational"],
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubLink: "https://github.com/realvoidgojo/Internship",
    liveLink: "",
    features: [
      "Caesar Cipher encryption tool",
      "Keylogger for monitoring keystrokes",
      "Network Packet Analyzer for traffic monitoring",
      "Password Complexity assessment tool",
      "Pixel Manipulation for image steganography",
    ],
  },
  {
    title: "XD Chat App",
    description:
      "Real-time chat application with group and private messaging built with JavaScript, PHP, and PostgreSQL/Supabase.",
    detailedDescription:
      "XD Chat App is a feature-rich real-time messaging platform designed to connect people globally. It supports both group conversations and private messaging with a focus on speed, ease of use, and security. Built with a JavaScript frontend and PHP backend using Supabase for PostgreSQL database management.",
    tags: ["JavaScript", "PHP", "PostgreSQL", "Supabase", "WebSockets"],
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubLink: "https://github.com/realvoidgojo/XD-Chat-App",
    liveLink: "https://xd-chat-app.onrender.com",
    features: [
      "Real-time messaging with WebSockets",
      "Group chat functionality",
      "Private one-on-one conversations",
      "User account management",
      "Message history storage with Supabase/PostgreSQL",
      "Responsive design for mobile and desktop",
    ],
  },
  {
    title: "CTF Challenges Repository",
    description:
      "Comprehensive collection of completed CTF challenges from platforms like OverTheWire, VulnHub, TryHackMe, and HackTheBox.",
    detailedDescription:
      "A curated repository of Capture The Flag (CTF) challenge solutions from multiple platforms including OverTheWire, VulnHub, TryHackMe and HackTheBox. This repository documents my progress through various cybersecurity challenges, serving as both a learning resource and a demonstration of my skills.",
    tags: ["CTF", "Cybersecurity", "OverTheWire", "VulnHub"],
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubLink: "https://github.com/realvoidgojo/CTF-Challenges",
    liveLink: "",
    features: [
      "OverTheWire challenges (Bandit 0-33, Leviathan 0-7, Natas 0-33)",
      "Krypton (0-7) and Narnia (0-9) challenges",
      "VulnHub machines (Kioptrix 1-5, Metasploitable 1-2)",
      "ColddBox and MrRobot walkthroughs",
      "Detailed documentation of solutions and methodologies",
      "Wide range of cybersecurity techniques demonstrated",
    ],
  },
  {
    title: "RTO Lookup India",
    description:
      "A lightweight React web app to look up Indian RTO and vehicle data from registration numbers.",
    detailedDescription:
      "RTO Lookup India is a minimalist React application designed to quickly retrieve details about Indian vehicles from their registration numbers. It features a clean UI for fast access, responsive design, and comprehensive data about RTOs across India.",
    tags: ["JavaScript", "Web Development"],
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubLink: "https://github.com/realvoidgojo/rto-lookup",
    liveLink: "https://india-rto-lookup.netlify.app/",
    features: [
      "Registration number lookup",
      "State and district information",
      "Vehicle category details",
      "Clean, minimal UI",
      "Fast response time",
    ],
  },
  {
    title: "NatasX CTF Solver",
    description:
      "Python-based automation script solving all levels (0-34) of the OverTheWire Natas challenge.",
    detailedDescription:
      "NatasX is a comprehensive automation tool that solves all 34 levels of the popular OverTheWire Natas web security challenge. It demonstrates practical understanding of web vulnerabilities, session management, and automation techniques using Python.",
    tags: ["Python", "Cybersecurity", "CTF", "Automation"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    githubLink: "https://github.com/realvoidgojo/natas-x",
    liveLink: "",
    features: [
      "Session-based navigation",
      "Regex parsing and bypass logic",
      "Automated exploitation",
      "Web security concept demonstrations",
      "Educational purpose documentation",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const handleProjectClick = (e: React.MouseEvent, project: Project) => {
    e.preventDefault();
    e.stopPropagation();
    openProject(project);
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    closeProject();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        stiffness: 80,
        damping: 20,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="section-padding"
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-20">
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-4 rounded-2xl mb-6 backdrop-blur-sm border border-blue-500/20"
          >
            <Rocket className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-center tracking-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            My Projects
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl text-center leading-relaxed"
          >
            A showcase of my technical journey through cybersecurity, web development, and automation
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 rounded-2xl overflow-hidden border border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/80 dark:hover:bg-neutral-900/80 transition-all duration-300 group cursor-pointer"
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={(e) => handleProjectClick(e, project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="tech-tag"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="tech-tag">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Explicit Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm flex items-center space-x-2 px-4 py-2"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </motion.a>
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm flex items-center space-x-2 px-4 py-2"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-neutral-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleCloseClick}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
              className="backdrop-blur-xl bg-white/95 dark:bg-neutral-900/95 rounded-3xl border border-neutral-200/50 dark:border-neutral-700/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent rounded-t-3xl" />
                <motion.button
                  onClick={handleCloseClick}
                  className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-neutral-800/90 rounded-xl backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} className="text-neutral-700 dark:text-neutral-300" />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="tech-tag text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-3 mt-4 lg:mt-0">
                    {selectedProject.liveLink && (
                      <motion.a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center space-x-2"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    <motion.a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center space-x-2"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <GithubIcon size={18} />
                      <span>GitHub</span>
                    </motion.a>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                      About This Project
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg mb-6">
                      {selectedProject.detailedDescription || selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.features && (
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <Star className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-neutral-600 dark:text-neutral-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
