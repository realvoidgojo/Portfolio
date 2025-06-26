import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ThreeDBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Transform values for scroll-based animations - reduced on mobile
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 180 : 360]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 90 : 180]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, isMobile ? 1.1 : 1.2, 0.8]);
  
  // 3D Objects data - reduced count on mobile
  const objects = [
    {
      id: 1,
      type: 'sphere',
      size: isMobile ? 80 : 120,
      position: { top: '15%', left: '10%' },
      animationDelay: 0,
      gradient: 'from-blue-400/20 to-purple-600/20',
    },
    {
      id: 2,
      type: 'cube',
      size: isMobile ? 70 : 100,
      position: { top: '60%', right: '15%' },
      animationDelay: 0.5,
      gradient: 'from-emerald-400/20 to-cyan-600/20',
    },
    // Reduce objects on mobile
    ...(isMobile ? [] : [
      {
        id: 3,
        type: 'pyramid',
        size: 80,
        position: { top: '30%', right: '30%' },
        animationDelay: 1,
        gradient: 'from-pink-400/20 to-rose-600/20',
      },
      {
        id: 4,
        type: 'torus',
        size: 140,
        position: { bottom: '20%', left: '20%' },
        animationDelay: 1.5,
        gradient: 'from-orange-400/20 to-yellow-600/20',
      },
      {
        id: 5,
        type: 'octahedron',
        size: 90,
        position: { top: '70%', left: '60%' },
        animationDelay: 2,
        gradient: 'from-indigo-400/20 to-blue-600/20',
      },
      {
        id: 6,
        type: 'sphere',
        size: 60,
        position: { top: '10%', right: '5%' },
        animationDelay: 2.5,
        gradient: 'from-green-400/20 to-emerald-600/20',
      }
    ])
  ];

  // Don't render on very small screens (only for performance, not layout)
  if (typeof window !== 'undefined' && window.innerWidth < 350) {
    return null;
  }

  const renderObject = (obj: typeof objects[0]) => {
    const baseClasses = `absolute backdrop-blur-xl border border-white/10 shadow-2xl`;
    const glassEffect = `bg-gradient-to-br ${obj.gradient} backdrop-blur-xl`;
    
    switch (obj.type) {
      case 'sphere':
        return (
          <motion.div
            key={obj.id}
            className={`${baseClasses} ${glassEffect} rounded-full`}
            style={{
              width: obj.size,
              height: obj.size,
              ...obj.position,
            }}
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + obj.animationDelay * 2,
              repeat: Infinity,
              ease: "linear",
              delay: obj.animationDelay,
            }}
            whileHover={{
              scale: 1.2,
              rotateZ: 10,
              transition: { duration: 0.3 }
            }}
          >
            {/* Inner glow effect */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-white/10 to-transparent" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-bl from-white/5 to-transparent" />
          </motion.div>
        );
        
      case 'cube':
        return (
          <motion.div
            key={obj.id}
            className={`${baseClasses} ${glassEffect} rounded-lg`}
            style={{
              width: obj.size,
              height: obj.size,
              ...obj.position,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: 20 + obj.animationDelay * 2,
              repeat: Infinity,
              ease: "linear",
              delay: obj.animationDelay,
            }}
            whileHover={{
              scale: 1.15,
              rotateZ: 45,
              transition: { duration: 0.3 }
            }}
          >
            {/* Cube faces simulation with glassmorphism */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-white/15 to-transparent transform rotate-12" />
            <div className="absolute inset-2 rounded-lg bg-gradient-to-bl from-white/10 to-transparent" />
            <div className="absolute inset-4 rounded-lg bg-gradient-to-tr from-white/5 to-transparent" />
          </motion.div>
        );
        
      case 'pyramid':
        return (
          <motion.div
            key={obj.id}
            className={`${baseClasses} ${glassEffect}`}
            style={{
              width: obj.size,
              height: obj.size,
              ...obj.position,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            }}
            animate={{
              rotateZ: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 18 + obj.animationDelay * 2,
              repeat: Infinity,
              ease: "linear",
              delay: obj.animationDelay,
            }}
            whileHover={{
              scale: 1.25,
              rotateY: 180,
              transition: { duration: 0.3 }
            }}
          >
            {/* Pyramid inner effects */}
            <div className="absolute inset-4 bg-gradient-to-t from-white/10 to-transparent" style={{ clipPath: 'polygon(50% 20%, 20% 80%, 80% 80%)' }} />
          </motion.div>
        );
        
      case 'torus':
        return (
          <motion.div
            key={obj.id}
            className={`${baseClasses} ${glassEffect} rounded-full relative`}
            style={{
              width: obj.size,
              height: obj.size,
              ...obj.position,
            }}
            animate={{
              rotateY: [0, 360],
              rotateX: [0, 180, 360],
            }}
            transition={{
              duration: 25 + obj.animationDelay * 2,
              repeat: Infinity,
              ease: "linear",
              delay: obj.animationDelay,
            }}
            whileHover={{
              scale: 1.1,
              rotateZ: 90,
              transition: { duration: 0.3 }
            }}
          >
            {/* Torus hole effect */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent border-4 border-white/20"
              style={{ width: obj.size * 0.4, height: obj.size * 0.4 }}
            />
            <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-white/10 to-transparent" />
          </motion.div>
        );
        
      case 'octahedron':
        return (
          <motion.div
            key={obj.id}
            className={`${baseClasses} ${glassEffect} relative`}
            style={{
              width: obj.size,
              height: obj.size,
              ...obj.position,
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
            animate={{
              rotateX: [0, 360],
              rotateZ: [0, 180, 360],
            }}
            transition={{
              duration: 22 + obj.animationDelay * 2,
              repeat: Infinity,
              ease: "linear",
              delay: obj.animationDelay,
            }}
            whileHover={{
              scale: 1.2,
              rotateY: 45,
              transition: { duration: 0.3 }
            }}
          >
            {/* Octahedron inner effects */}
            <div className="absolute inset-6 bg-gradient-to-tr from-white/15 to-transparent" style={{ clipPath: 'polygon(50% 15%, 85% 50%, 50% 85%, 15% 50%)' }} />
          </motion.div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
      style={{ perspective: '1000px' }}
    >
      {/* Ambient lighting effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/5 via-transparent to-purple-50/5 dark:from-blue-950/10 dark:via-transparent dark:to-purple-950/10" />
      
      {/* 3D Objects */}
      {objects.map(renderObject)}
      
      {/* Additional floating glass elements */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-32 h-32 rounded-xl bg-gradient-to-tr from-white/10 to-transparent backdrop-blur-lg border border-white/20 shadow-xl"
        animate={{
          y: [-20, 20, -20],
          rotateZ: [0, 10, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-40 rounded-2xl bg-gradient-to-br from-emerald-400/15 to-cyan-600/15 backdrop-blur-lg border border-white/20 shadow-xl"
        animate={{
          x: [-15, 15, -15],
          rotateY: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-2/3 left-1/6 w-20 h-20 rounded-full bg-gradient-to-tr from-pink-400/20 to-rose-600/20 backdrop-blur-xl border border-white/30 shadow-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Scroll-based floating elements */}
      <motion.div
        className="absolute top-1/2 right-1/6 w-16 h-16 rounded-lg bg-gradient-to-br from-orange-400/20 to-yellow-600/20 backdrop-blur-lg border border-white/25 shadow-xl"
        style={{
          rotateX,
          rotateY,
          scale,
        }}
      />
      
      {/* Interactive light rays */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-blue-400/20 via-transparent to-transparent"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scaleX: [1, 1.5, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-purple-400/20 via-transparent to-transparent"
          animate={{
            opacity: [0.5, 0.9, 0.5],
            scaleX: [1, 2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </div>
  );
};

export default ThreeDBackground; 