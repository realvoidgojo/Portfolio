import React from "react";
import {
  Github,
  Linkedin,
  ExternalLink,
  Mail,
  Heart,
  Code,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: "https://github.com/realvoidgojo",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/realvoidgojo",
      label: "LinkedIn",
    },
    {
      icon: <BookOpen size={20} />,
      url: "https://medium.com/@realvoidgojo",
      label: "Medium",
    },
    {
      icon: <Mail size={20} />,
      url: "mailto:harishsivaraman@outlook.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Certificates", path: "/certificates" },
    { name: "Articles", path: "/articles" },
    { name: "Coding Profiles", path: "/coding-profiles" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Wave decoration */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="text-teal-900 fill-current"
          >
            <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About column */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Code className="w-6 h-6 text-teal-500 mr-2" />
              Harish Sivaraman
            </h2>
            <p className="text-gray-400 mb-4">
              Cybersecurity enthusiast and software developer focused on CTFs,
              OSINT, and automation.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-teal-900 p-2 rounded-full text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -4 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.slice(0, 4).map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Second navigation column */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">More</h3>
            <ul className="space-y-2">
              {navLinks.slice(4).map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/realvoidgojo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors flex items-center"
                >
                  GitHub Profile
                  <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter column */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe for the latest cybersecurity insights and project
              updates
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-gray-800 text-white rounded-l-md w-full outline-none focus:ring-1 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Go
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Harish Sivaraman. All rights reserved.
          </p>

          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-500 text-sm flex items-center">
              Made with{" "}
              <Heart size={14} className="mx-1 text-red-500 fill-current" />{" "}
              using
              <span className="text-teal-400 ml-1">React</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
