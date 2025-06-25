import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeDown' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'morph';
  delay?: number;
  duration?: number;
}

export const ScrollAnimation = ({ 
  children, 
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = 0.6
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const animations = {
    fadeUp: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 }
    },
    fadeDown: {
      initial: { opacity: 0, y: -60 },
      animate: { opacity: 1, y: 0 }
    },
    slideLeft: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 }
    },
    slideRight: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    },
    rotate: {
      initial: { opacity: 0, rotate: -10, scale: 0.8 },
      animate: { opacity: 1, rotate: 0, scale: 1 }
    },
    morph: {
      initial: { opacity: 0, borderRadius: '50%', scale: 0.8 },
      animate: { opacity: 1, borderRadius: '12px', scale: 1 }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={animations[animation].initial}
      animate={isInView ? animations[animation].animate : animations[animation].initial}
      transition={{
        duration,
        delay,
        type: 'spring',
        stiffness: 100,
        damping: 15
      }}
    >
      {children}
    </motion.div>
  );
};

export const MorphingBackground = () => {
  const { scrollYProgress } = useScroll();
  
  const pathVariants = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      'M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z',
      'M0,100 C150,50 350,150 500,100 L500,00 L0,0 Z',
      'M0,100 C150,180 350,20 500,100 L500,00 L0,0 Z',
      'M0,100 C150,0 350,200 500,100 L500,00 L0,0 Z',
      'M0,100 C150,100 350,100 500,100 L500,00 L0,0 Z',
    ]
  );

  const gradientOffset = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 500 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              stopColor="rgba(59, 130, 246, 0.1)"
            />
            <stop
              offset="50%"
              stopColor="rgba(147, 51, 234, 0.1)"
            />
            <stop
              offset="100%"
              stopColor="rgba(236, 72, 153, 0.1)"
            />
          </linearGradient>
        </defs>
        <motion.path
          d={pathVariants}
          fill="url(#morphGradient)"
          opacity={0.3}
        />
      </svg>
    </div>
  );
};

export const FloatingElements = () => {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-5 overflow-hidden">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-sm"
        style={{ y: y1, rotate: rotate1, scale }}
      />
      
      <motion.div
        className="absolute top-2/3 right-1/4 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-red-500/20"
        style={{ 
          y: y2, 
          rotate: rotate2,
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-3/4 w-12 h-12 bg-gradient-to-br from-green-500/20 to-teal-500/20"
        style={{ 
          y: y3,
          rotate: useTransform(scrollYProgress, [0, 1], [0, 270])
        }}
      />
      
      {/* Animated lines */}
      <motion.div
        className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"
        style={{
          scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]),
          originY: 0
        }}
      />
    </div>
  );
};

export default ScrollAnimation; 