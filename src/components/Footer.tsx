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
    { name: "Profiles", path: "/profiles" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 pt-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Code className="w-6 h-6 text-teal-500 mr-2" />
              Harish Sivaraman
            </h2>
            <p className="text-gray-400 mb-4">
              Cybersecurity enthusiast and software developer focused on CTFs,
              OSINT, and automation. Building innovative solutions with Python,
              React, and more.
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
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Harish Sivaraman // @realvoidgojo
          </p>

          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-500 text-sm flex items-center">
              Built with React + Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
