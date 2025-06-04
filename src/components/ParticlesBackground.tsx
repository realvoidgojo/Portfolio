import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for mobile and reduced motion preference
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const checkMotion = () =>
      setIsReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );

    checkMobile();
    checkMotion();

    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Use much simpler config for mobile
  const mobileConfig = {
    particles: {
      number: { value: 20, density: { enable: true, area: 1200 } },
      opacity: { value: 0.4 },
      size: { value: { min: 1, max: 2 } },
      move: { speed: 0.8 },
      links: { enable: true, opacity: 0.3, width: 1 },
    },
    fpsLimit: 30,
    detectRetina: false,
  };

  // Reduced settings for prefers-reduced-motion
  const reducedMotionConfig = {
    particles: {
      number: { value: 15 },
      move: { enable: false },
      opacity: { value: 0.3, animation: { enable: false } },
      size: { animation: { enable: false } },
    },
  };

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
          fpsLimit: isMobile ? 30 : 40, // Reduced from 60
          particles: {
            color: {
              value: ["#14b8a6", "#0ea5e9", "#0284c7"],
            },
            links: {
              color: "#14b8a6",
              distance: 150,
              enable: true,
              opacity: isMobile ? 0.3 : 0.5,
              width: isMobile ? 1 : 1.2,
            },
            collisions: {
              enable: false, // Disabled for better performance
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: isMobile ? 0.5 : 1.0, // Slower on mobile
              straight: false,
              attract: {
                enable: false, // Disabled for performance
              },
            },
            number: {
              density: {
                enable: true,
                area: isMobile ? 1500 : 1000, // Increase area = fewer particles
              },
              value: isMobile ? 30 : 60, // Fewer particles for mobile
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 0.5, // Reduced from 0.8
                opacity_min: 0.3,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: isMobile ? 3 : 4 },
              random: true,
              anim: {
                enable: true,
                speed: 1.0, // Reduced from 1.5
                size_min: 0.5,
                sync: false,
              },
            },
            shadow: {
              enable: false, // Always disable shadows for performance
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: !isMobile, // Disable hover effects on mobile
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: {
                enable: true,
                delay: 500, // Add delay to reduce calculations during resize
              },
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              push: {
                particles_nb: isMobile ? 1 : 2, // Even fewer particles added on mobile
              },
            },
          },
          detectRetina: false, // Disable retina detection for performance
          ...(isMobile && mobileConfig),
          ...(isReducedMotion && reducedMotionConfig),
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
