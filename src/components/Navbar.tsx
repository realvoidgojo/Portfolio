import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Award,
  BookOpen,
  Phone,
  Code,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAlternateName, setShowAlternateName] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/", icon: <Home size={18} />, label: "Home" },
    { to: "/about", icon: <User size={18} />, label: "About" },
    { to: "/projects", icon: <Briefcase size={18} />, label: "Projects" },
    { to: "/certificates", icon: <Award size={18} />, label: "Certificates" },
    { to: "/articles", icon: <BookOpen size={18} />, label: "Articles" },
    { to: "/profiles", icon: <Code size={18} />, label: "Profiles" }, // Changed from /coding-profiles to /profiles
    { to: "/contact", icon: <Phone size={18} />, label: "Contact" },
  ];

  // Track scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle between names at intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlternateName((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Enhanced animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0, 0.55, 0.45, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0, 0.55, 0.45, 1] }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass-effect py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo with animated name switching */}
            <NavLink to="/" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-2 rounded-lg shadow-lg transform transition-transform group-hover:scale-110 duration-300">
                <Code size={20} className="text-white" />
              </div>
              <div
                className="h-7 relative overflow-hidden"
                style={{ minWidth: "180px" }}
              >
                <AnimatePresence mode="wait">
                  {showAlternateName ? (
                    <motion.span
                      key="realvoidgojo"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -30, opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="text-xl font-bold text-white absolute left-0"
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
                      className="text-xl font-bold text-white absolute left-0"
                    >
                      Harish Sivaraman
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </NavLink>

            {/* Desktop Navigation with improved hover and active states */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 nav-link ${
                      isActive
                        ? "bg-gradient-to-r from-teal-600/80 to-teal-600/90 text-white shadow-md shadow-teal-900/20"
                        : "text-gray-300 hover:bg-gray-800/40 hover:text-white hover:shadow-sm"
                    }`
                  }
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.icon}
                  </motion.div>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button with improved animations */}
            <motion.button
              className="md:hidden text-white p-2 focus:outline-none bg-gray-800/50 rounded-lg hover:bg-gray-700/60 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed top-16 left-0 right-0 glass-effect z-40 border-t border-gray-800/50 shadow-lg md:hidden overflow-hidden"
          >
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <motion.div key={item.to} variants={menuItemVariants}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-teal-600/80 to-teal-600/50 text-white shadow-md"
                            : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                        }`
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      <span>{item.label}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
