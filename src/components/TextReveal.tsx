import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

const TextReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.6,
  stagger = 0.03
}: TextRevealProps) => {
  const words = children.split(' ');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: stagger, 
        delayChildren: delay * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      x: 5,
      rotateX: 90,
      scale: 0.8,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ perspective: '1000px' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              className="inline-block"
              variants={child}
              style={{ 
                transformOrigin: 'bottom center',
                transformStyle: 'preserve-3d',
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

export const GlitchText = ({ children, className = '' }: { children: string, className?: string }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover="hover"
      initial="initial"
    >
      {/* Main text */}
      <motion.span
        className="relative z-10"
        variants={{
          initial: { y: 0 },
          hover: { y: -2 }
        }}
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.span>
      
      {/* Glitch layers */}
      <motion.span
        className="absolute top-0 left-0 text-red-500 opacity-70"
        variants={{
          initial: { x: 0, y: 0 },
          hover: { 
            x: [0, -2, 2, -1, 1, 0],
            y: [0, 1, -1, 2, -2, 0],
          }
        }}
        transition={{ duration: 0.3, repeat: Infinity }}
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
      >
        {children}
      </motion.span>
      
      <motion.span
        className="absolute top-0 left-0 text-blue-500 opacity-70"
        variants={{
          initial: { x: 0, y: 0 },
          hover: { 
            x: [0, 2, -2, 1, -1, 0],
            y: [0, -1, 1, -2, 2, 0],
          }
        }}
        transition={{ duration: 0.3, repeat: Infinity, delay: 0.1 }}
        style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
};

export default TextReveal; 