import { useRef, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface EnhancedCardProps {
  children: ReactNode;
  className?: string;
  glassEffect?: boolean;
  tiltEffect?: boolean;
  magneticEffect?: boolean;
}

const EnhancedCard = ({ 
  children, 
  className = '',
  glassEffect = true,
  tiltEffect = true,
  magneticEffect = false
}: EnhancedCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);
  
  // Create gradient position transforms unconditionally
  const gradientX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const gradientY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEffect || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cardVariants = {
    initial: {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      z: 0,
    },
    hover: {
      scale: magneticEffect ? 1.05 : 1.02,
      z: 50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }
    }
  };

  const glassClasses = glassEffect 
    ? 'backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10' 
    : '';

  return (
    <motion.div
      ref={ref}
      className={`
        relative overflow-hidden rounded-2xl cursor-pointer
        ${glassClasses}
        ${className}
      `}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: tiltEffect ? rotateX : 0,
        rotateY: tiltEffect ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Gradient overlay that follows mouse */}
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${gradientX} ${gradientY}, rgba(255,255,255,0.1), transparent 40%)`,
        }}
        whileHover={{ opacity: 1 }}
      />
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
          transform: 'translateX(-100%)',
        }}
        whileHover={{
          opacity: [0, 1, 0],
          transform: ['translateX(-100%)', 'translateX(100%)'],
          transition: { duration: 0.6 }
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-blue-400/50 rounded-full pointer-events-none"
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400/50 rounded-full pointer-events-none"
        animate={{
          y: [0, 10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
    </motion.div>
  );
};

export default EnhancedCard; 