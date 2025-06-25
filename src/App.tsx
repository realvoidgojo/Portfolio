import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Articles from "./components/Articles";
import Profiles from "./components/Profiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Wrapper to handle route transitions with Framer Motion
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  // Initialize EmailJS when the app loads
  useEffect(() => {
    emailjs.init("l0cyQBOYDtcQ3hscB");
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        {/* Clean gradient background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-50/30 dark:to-blue-950/30" />
          {/* Subtle mesh gradient for depth */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-100/40 to-pink-100/40 dark:from-indigo-900/20 dark:to-pink-900/20 rounded-full blur-3xl" />
        </div>
        
        {/* Main content */}
        <div className="content-container flex-grow flex flex-col relative z-10">
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
