import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon, ExternalLink, Code, X } from "lucide-react";

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
    // Replace with a more reliable image
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
    liveLink:
      "https://dbaf4e81-4770-4c38-b10c-c06db8875fd5-00-2alc9fdscx266.sisko.replit.dev:5000/",
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
    // Replace with a more reliable image
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

  // Explicit click handler to ensure event fires
  const handleProjectClick = (e: React.MouseEvent, project: Project) => {
    e.preventDefault();
    e.stopPropagation();
    openProject(project);
  };

  // Explicit close handler
  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    closeProject();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-16">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-teal-500/20 p-3 rounded-full mb-4"
          >
            <Code className="w-8 h-8 text-teal-400" />
          </motion.div>
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl text-center">
            Here are some of my recent works. Each project reflects my passion
            for creating intuitive and functional web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-teal-500/20 transition-all duration-500 h-full flex flex-col card-shimmer"
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              style={{ pointerEvents: "auto" }}
            >
              <div className="h-48 overflow-hidden relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-teal-900/70 opacity-0 group-hover:opacity-90 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={(e) => handleProjectClick(e, project)}
                    className="bg-white text-teal-800 px-4 py-2 rounded-lg font-medium transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg hover:bg-teal-50"
                    style={{ pointerEvents: "auto" }}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-teal-900/50 text-teal-200 text-xs rounded-full border border-teal-800/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-teal-400 transition-colors"
                    style={{ pointerEvents: "auto" }}
                  >
                    <GithubIcon size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-teal-400 transition-colors"
                      style={{ pointerEvents: "auto" }}
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <motion.a
            href="https://github.com/realvoidgojo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-transparent border border-teal-500 text-teal-400 px-6 py-3 rounded-lg hover:bg-teal-500/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ pointerEvents: "auto" }}
          >
            <span>View All Projects</span>
            <ExternalLink size={18} className="ml-2" />
          </motion.a>
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 modal-backdrop flex items-center justify-center z-50 p-4"
            onClick={handleCloseClick}
            style={{ pointerEvents: "auto" }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto card-shimmer"
              onClick={(e) => e.stopPropagation()}
              style={{ pointerEvents: "auto" }}
            >
              <div className="h-72 md:h-80 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
                <button
                  onClick={handleCloseClick}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-teal-800 text-white p-2 rounded-full transition-colors shadow-lg"
                  aria-label="Close modal"
                  style={{ pointerEvents: "auto" }}
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-teal-900/50 text-teal-200 text-sm rounded-full border border-teal-800/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {selectedProject.detailedDescription}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-teal-500/20 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    </span>
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features?.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-teal-500/20 p-1 rounded-full mr-3 mt-1">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md"
                    whileHover={{
                      y: -3,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{ pointerEvents: "auto" }}
                  >
                    <GithubIcon size={18} className="mr-2" />
                    <span>View Source Code</span>
                  </motion.a>
                  {selectedProject.liveLink && (
                    <motion.a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md"
                      whileHover={{
                        y: -3,
                        boxShadow: "0 10px 25px -5px rgba(20, 184, 166, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      style={{ pointerEvents: "auto" }}
                    >
                      <ExternalLink size={18} className="mr-2" />
                      <span>Live Demo</span>
                    </motion.a>
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
