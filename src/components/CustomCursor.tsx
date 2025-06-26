import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState('default');
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Create trailing cursor springs unconditionally
  const trailingXSpring = useSpring(cursorX, { damping: 30, stiffness: 200 });
  const trailingYSpring = useSpring(cursorY, { damping: 30, stiffness: 200 });

  // Create indicator springs unconditionally
  const indicatorXSpring = useSpring(cursorX, { damping: 20, stiffness: 300 });
  const indicatorYSpring = useSpring(cursorY, { damping: 20, stiffness: 300 });

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Don't initialize cursor events on mobile
    if (isMobile) {
      return () => window.removeEventListener('resize', checkMobile);
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    
    // Initialize cursor position immediately
    const initializeCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setIsVisible(true);
    };

    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement;
      
      if (target.matches('button, a, .interactive, .card-hover')) {
        setIsHovering(true);
        setCursorType('button');
      } else if (target.matches('input, textarea')) {
        setIsHovering(true);
        setCursorType('text');
      } else if (target.matches('.magnetic')) {
        setIsHovering(true);
        setCursorType('magnetic');
      } else {
        setIsHovering(false);
        setCursorType('default');
      }
    };

    // Initialize cursor on first mouse movement
    document.addEventListener('mousemove', initializeCursor, { once: true });
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      document.removeEventListener('mousemove', initializeCursor);
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [cursorX, cursorY, isMobile]);

  // Always render the cursor, control visibility with opacity
  // if (!isVisible) return null;

  // Don't render cursor on mobile devices
  if (isMobile) return null;

  return (
    <>
      {/* Main cursor blob */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-8 h-8 bg-white rounded-full"
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          initial={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
        />
      </motion.div>

      {/* Trailing dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        style={{
          x: trailingXSpring,
          y: trailingYSpring,
        }}
      >
        <motion.div
          className="w-1 h-1 bg-blue-500 rounded-full opacity-60"
          style={{
            transform: 'translate(14px, 14px)',
          }}
        />
      </motion.div>

      {/* Cursor type indicator - render conditionally but don't use conditional hooks */}
      {cursorType !== 'default' && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-45 text-white text-xs font-medium bg-black px-2 py-1 rounded"
          style={{
            x: indicatorXSpring,
            y: indicatorYSpring,
            transform: 'translate(20px, -30px)',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          {cursorType === 'button' && 'Click'}
          {cursorType === 'text' && 'Type'}
          {cursorType === 'magnetic' && 'Magnetic'}
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor; 