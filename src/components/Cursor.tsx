import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Use spring with lower stiffness for smooth movement but faster response
  const springConfig = { damping: 25, stiffness: 700, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Quick hack to disable cursor on mobile (not needed there)
    const style = document.createElement("style");
    style.textContent = `
      @media (min-width: 769px) {
        body { cursor: auto; }
      }
      @media (max-width: 768px) {
        body { cursor: auto; }
        .custom-cursor-dot { display: none !important; }
      }
    `;
    document.head.appendChild(style);

    // Using passive for better scrolling performance
    const onMouseMove = (e: MouseEvent) => {
      // Update values directly - setState is too slow for cursor movement
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseDown = () => setCursorVariant("click");
    const onMouseUp = () => setCursorVariant("default");

    // Handle element hover state changes
    const updateOnHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.tagName.toLowerCase() === "input" ||
        target.tagName.toLowerCase() === "textarea" ||
        target.closest("input") ||
        target.closest("textarea");

      setCursorVariant(isHoverable ? "hover" : "default");
    };

    // Add event listeners with passive option for better performance
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave, { passive: true });
    window.addEventListener("mouseenter", onMouseEnter, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    window.addEventListener("mouseover", updateOnHover, { passive: true });

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", updateOnHover);
    };
  }, [mouseX, mouseY, isVisible]);

  // Variants with hardware-accelerated properties
  const variants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: "rgba(13, 148, 136, 0.1)",
      mixBlendMode: "normal" as const,
    },
    hover: {
      height: 48,
      width: 48,
      backgroundColor: "rgba(13, 148, 136, 0.2)",
      mixBlendMode: "normal" as const,
    },
    click: {
      height: 24,
      width: 24,
      backgroundColor: "rgba(13, 148, 136, 0.3)",
      mixBlendMode: "normal" as const,
    },
  };

  if (!isVisible) return null;

  return (
    <motion.div
      ref={cursorRef}
      className="custom-cursor-dot fixed rounded-full pointer-events-none z-10"
      style={{
        translateX: "-50%",
        translateY: "-50%",
        x: cursorX,
        y: cursorY,
        pointerEvents: "none", // Critical addition to ensure clicks pass through
        transform: "translate(-50%, -50%)",
        opacity: isVisible ? 0.8 : 0,
      }}
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "tween",
        duration: 0.15,
      }}
    />
  );
};

export default Cursor;
