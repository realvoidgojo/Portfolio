import { useEffect, useCallback } from "react";
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
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

// Wrapper to handle route transwith FM
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

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          
          fpsLimit: 30,
          particles: {
            color: {
              value: ["#14b8a6", "#0ea5e9", "#0284c7"],
            },
            links: {
              color: "#14b8a6",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1.2,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1.0,
              straight: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 60, 
            },
            opacity: {
              value: 0.6,
              random: true,
              anim: {
                enable: true,
                speed: 0.8,
                opacity_min: 0.3,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
              random: true,
              anim: {
                enable: true,
                speed: 1.5,
                size_min: 0.5,
                sync: false,
              },
            },
            shadow: {
              enable: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              push: {
                particles_nb: 2, 
              },
            },
          },
          detectRetina: false, 
        }}
      />
    </div>
  );
};

function App() {
  // Initialize EmailJS when the app loads
  useEffect(() => {
    emailjs.init("l0cyQBOYDtcQ3hscB");
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 relative">
        <ParticlesBackground />
        <div
          className="content-container flex-grow flex flex-col"
          style={{ zIndex: 5 }}
        >
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
