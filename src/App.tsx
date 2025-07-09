import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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



function AppContent() {
  return (
    <div className="min-h-screen relative">
      {/* Clean background */}
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
  );
}

function App() {
  // Initialize EmailJS when the app loads
  useEffect(() => {
    emailjs.init("l0cyQBOYDtcQ3hscB");
  }, []);

  // Ensure normal cursor behavior
  useEffect(() => {
    document.body.style.cursor = "auto";
    document.documentElement.style.cursor = "auto";
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
