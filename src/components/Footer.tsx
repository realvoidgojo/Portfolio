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
      icon: <Github size={18} />,
      url: "https://github.com/realvoidgojo",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={18} />,
      url: "https://linkedin.com/in/realvoidgojo",
      label: "LinkedIn",
    },
    {
      icon: <BookOpen size={18} />,
      url: "https://medium.com/@realvoidgojo",
      label: "Medium",
    },
    {
      icon: <Mail size={18} />,
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
    <footer className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-t border-neutral-200/50 dark:border-neutral-700/50">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center mb-6"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2.5 rounded-xl mr-3">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                Harish Sivaraman
              </h2>
            </motion.div>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Cybersecurity enthusiast and developer passionate about CTFs, modern web technologies, and building innovative solutions.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all duration-200"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.slice(0, 4).map((link, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Additional Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
              More
            </h3>
            <ul className="space-y-3">
              {navLinks.slice(4).map((link, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <a
                  href="https://github.com/realvoidgojo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center font-medium"
                >
                  GitHub Profile
                  <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                </a>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-neutral-200/50 dark:border-neutral-700/50 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-neutral-500 dark:text-neutral-500 text-sm font-medium">
            © {currentYear} Harish Sivaraman • @realvoidgojo
          </p>

          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-neutral-500 dark:text-neutral-500 text-sm font-medium flex items-center">
              Built with React + Tailwind CSS
              <Heart className="ml-2 w-4 h-4 text-red-500" />
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
