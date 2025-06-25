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
    { to: "/profiles", icon: <Code size={18} />, label: "Profiles" },
    { to: "/contact", icon: <Phone size={18} />, label: "Contact" },
  ];

  // Apple-style navbar blur effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  // Apple-style mobile menu animations
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0, 0.55, 0.45, 1],
        staggerChildren: 0.05,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-xl bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200/50 dark:border-neutral-700/50 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo and title with Apple-style animation */}
            <NavLink to="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="bg-black dark:bg-white p-2.5 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 border-2 border-black dark:border-white"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code size={20} className="text-white dark:text-black" />
              </motion.div>
              <div
                className="h-7 relative overflow-hidden"
                style={{ minWidth: "180px" }}
              >
                <AnimatePresence mode="wait">
                  {showAlternateName ? (
                    <motion.span
                      key="realvoidgojo"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 absolute left-0 tracking-tight font-jetbrains"
                    >
                      @realvoidgojo
                    </motion.span>
                  ) : (
                    <motion.span
                      key="harish"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 absolute left-0 tracking-tight font-jetbrains"
                    >
                      Harish S.
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </NavLink>

            {/* Desktop Navigation with Apple-style design */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all duration-200 font-medium text-sm font-jetbrains ${
                      isActive
                        ? "bg-black text-white shadow-lg hover:bg-gray-800 border-2 border-black"
                        : "text-neutral-700 dark:text-neutral-200 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white border-2 border-transparent hover:border-black dark:hover:border-white"
                    }`
                  }
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className="hidden lg:block font-jetbrains">{item.label}</span>
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button with Apple-style design */}
            <motion.button
              className="md:hidden p-2.5 rounded-xl bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors border-2 border-black dark:border-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
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
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu with Apple-style glass effect */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed top-20 left-4 right-4 backdrop-blur-xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/50 dark:border-neutral-700/50 rounded-2xl shadow-2xl z-40 md:hidden"
          >
            <div className="p-4">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <motion.div key={item.to} variants={menuItemVariants}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-200 font-medium font-jetbrains ${
                          isActive
                            ? "bg-black text-white shadow-lg hover:bg-gray-800 border-2 border-black"
                            : "text-neutral-700 dark:text-neutral-200 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white border-2 border-transparent hover:border-black dark:hover:border-white"
                        }`
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      <span className="font-jetbrains">{item.label}</span>
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
