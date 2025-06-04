import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageLayoutProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const PageLayout = ({ title, icon, children }: PageLayoutProps) => {
  // Consistent animation variants across all pages
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="py-20 bg-gray-900 min-h-[calc(100vh-80px)]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="bg-teal-500/20 p-3 rounded-full mb-4">{icon}</div>
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </motion.section>
  );
};

export default PageLayout;
