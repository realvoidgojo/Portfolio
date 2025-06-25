import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
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

// Import the new stunning components
import CustomCursor from "./components/CustomCursor";
import ParticleSystem from "./components/ParticleSystem";
import ThreeDBackground from "./components/ThreeDBackground";

function App() {
  // Initialize EmailJS when the app loads
  useEffect(() => {
    emailjs.init("l0cyQBOYDtcQ3hscB");
  }, []);

  // Hide default cursor for custom cursor experience
  useEffect(() => {
    // Only hide cursor on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isTouchDevice) {
      document.body.style.cursor = 'none';
      document.documentElement.style.cursor = 'none';
    }
    
    return () => {
      document.body.style.cursor = 'auto';
      document.documentElement.style.cursor = 'auto';
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen relative">
        {/* Custom Cursor - only on non-touch devices */}
        {typeof window !== 'undefined' && !('ontouchstart' in window) && <CustomCursor />}
        
        {/* 3D Background with Glassmorphism */}
        <ThreeDBackground />
        
        {/* Particle System */}
        <ParticleSystem />
        
        {/* Simple background without parallax effects */}
        <div className="fixed inset-0 pointer-events-none -z-20">
          <div className="absolute inset-0 bg-white dark:bg-neutral-900" />
        </div>
        
        {/* Navbar */}
        <Navbar />
        
        {/* Main content */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
