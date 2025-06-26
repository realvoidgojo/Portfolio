import { useRef, useEffect, ReactNode, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface MagneticElementProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  distance?: number;
}

const MagneticElement = ({ 
  children, 
  className = '', 
  strength = 0.3,
  distance = 100 
}: MagneticElementProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  
  const rotateX = useTransform(ySpring, [-50, 50], [10, -10]);
  const rotateY = useTransform(xSpring, [-50, 50], [-10, 10]);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Don't initialize magnetic effects on mobile
    if (isMobile) {
      return () => window.removeEventListener('resize', checkMobile);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distanceFromCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      if (distanceFromCenter < distance) {
        const factor = (distance - distanceFromCenter) / distance;
        x.set(deltaX * strength * factor);
        y.set(deltaY * strength * factor);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkMobile);
    };
  }, [x, y, strength, distance, isMobile]);

  // Simplified component for mobile devices
  if (isMobile) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`magnetic ${className}`}
      style={{
        x: xSpring,
        y: ySpring,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{
        scale: 1.05,
        transition: { type: 'spring', stiffness: 400, damping: 25 }
      }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticElement; 