import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Code, Terminal, Zap, LucideIcon } from "lucide-react";

interface LoadingScreenProps {
  onFinish: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const requestRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const loadingDuration = 1500; // 1.5 seconds total loading time

  // Unique progress function with easing
  useEffect(() => {
    const animate = (time: number) => {
      if (startTimeRef.current === undefined) {
        startTimeRef.current = time;
      }

      const elapsed = time - startTimeRef.current;
      const progressValue = Math.min(elapsed / loadingDuration, 1);

      // Custom easing function - starts fast, slows down, then speeds up again
      const eased =
        progressValue < 0.5
          ? 4 * progressValue * progressValue * progressValue
          : 1 - Math.pow(-2 * progressValue + 2, 3) / 2;

      setProgress(Math.floor(eased * 100));

      if (progressValue < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        setTimeout(() => onFinish(), 100);
      }
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [onFinish]);

  // Particle animation data
  const particleCount = 8;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    delay: i * 0.1,
    x: Math.random() * 40 - 20,
    y: Math.random() * 40 - 20,
  }));

  // Rotate between different icons for a unique look
  const icons: Array<typeof LucideIcon> = [Code, Terminal, Zap];
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const iconInterval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % icons.length);
    }, 500);

    return () => clearInterval(iconInterval);
  }, []);

  const CurrentIcon = icons[currentIconIndex];

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 grid grid-cols-12 gap-4 transform rotate-12 scale-125">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="h-20 bg-teal-600/20 rounded-full"
              initial={{ scaleY: 0.3 }}
              animate={{
                scaleY: [0.3, 1, 0.3],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: (i % 5) * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Icon with particles */}
      <div className="relative mb-8">
        <motion.div
          className="p-4 bg-teal-500/20 rounded-full relative z-10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <CurrentIcon size={40} className="text-teal-400" />

          {/* Particles around the icon */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-teal-400 rounded-full"
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 0],
                x: [0, particle.x * 2, particle.x * 3],
                y: [0, particle.y * 2, particle.y * 3],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: particle.delay,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Title */}
      <motion.div
        className="text-3xl font-bold text-white mb-4 flex items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="text-teal-500 mr-2">Portfolio</span>
        <span>{progress === 100 ? "Ready" : "Loading"}</span>
      </motion.div>

      {/* Unique progress bar */}
      <div className="w-64 h-2 bg-gray-800 rounded-full mb-6 overflow-hidden relative">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-500 via-blue-400 to-teal-500"
          initial={{ x: "-100%" }}
          animate={{
            x: `${progress - 100}%`,
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            x: { duration: 0.2, ease: "easeOut" },
            backgroundPosition: {
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            },
          }}
          style={{ width: "100%" }}
        />

        {/* Glowing effect */}
        <motion.div
          className="absolute top-0 h-full w-20 bg-white"
          style={{
            filter: "blur(15px)",
            left: `${progress - 10}%`,
          }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>

      {/* Percentage counter with unique style */}
      <motion.div
        className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400"
        animate={{
          scale: progress === 100 ? [1, 1.2, 1] : 1,
          opacity: progress === 100 ? [1, 0.8, 1] : 1,
        }}
        transition={{ duration: 0.5, times: [0, 0.5, 1] }}
      >
        {progress}%
      </motion.div>

      {/* Final welcome message */}
      <motion.div
        className="mt-8 px-6 py-2 bg-teal-500/10 rounded-full border border-teal-500/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: progress === 100 ? 1 : 0,
          y: progress === 100 ? 0 : 20,
        }}
        transition={{ duration: 0.4 }}
      >
        <span className="text-teal-400 font-medium">Ready to explore!</span>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
