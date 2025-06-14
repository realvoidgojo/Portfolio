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
    // mobile and motion detection
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

  // mobile config
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

  // perf reduction
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
          fpsLimit: 40,
          particles: {
            color: {
              value: ["#14b8a6", "#0ea5e9"],
            },
            number: {
              value: 20, 
              density: {
                enable: true,
                value_area: 800,
              },
            },
            opacity: {
              value: 0.4,
              random: true,
            },
            size: {
              value: 2.5,
              random: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.8,
              straight: false,
            },
          },
          detectRetina: false, 
          ...(isMobile && mobileConfig),
          ...(isReducedMotion && reducedMotionConfig),
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
