import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageLayoutProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const PageLayout = ({ title, icon, children }: PageLayoutProps) => {
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="py-16 sm:py-20 bg-gray-900 min-h-[calc(100vh-80px)]"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center mb-12 sm:mb-16">
          <div className="bg-teal-500/20 p-2.5 rounded-full mb-4">
            {React.cloneElement(icon as React.ReactElement, {
              className: "w-7 h-7 text-teal-400",
            })}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 text-center">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </motion.section>
  );
};

export default PageLayout;
