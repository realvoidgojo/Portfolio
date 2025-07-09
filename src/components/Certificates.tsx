import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ExternalLink,
  BookOpen,
  Code,
  Database,
  Shield,
  X,
  Eye,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCw,
} from "lucide-react";

// Import certificates
import fullStackCert from "../assets/certifications/full-stack-cert.pdf";
import javaCert from "../assets/certifications/java-nptel.pdf";
import networksCert from "../assets/certifications/computer-networks.pdf";
import cloudCert from "../assets/certifications/cloud-computing.pdf";
import reactCert from "../assets/certifications/react-cert.pdf";
import nahamconCert from "../assets/certifications/nahamcon-ctf.pdf";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  pdfFile: string;
  icon: React.ReactNode;
  category:
    | "development"
    | "cybersecurity"
    | "networking"
    | "gamedev"
    | "programming";
  dimensions?: {
    width: string;
    height: string;
    maxWidth?: string;
    maxHeight?: string;
  };
  mobileDimensions?: {
    width: string;
    height: string;
    maxWidth?: string;
    maxHeight?: string;
  };
}

const certificates: Certificate[] = [
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    date: "2025",
    description:
      "Comprehensive training covering front-end and back-end technologies including HTML, CSS, JS, React, Node.js, and databases.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pdfFile: fullStackCert,
    icon: <Code size={20} />,
    category: "development",
    dimensions: {
      width: "1100px",
      height: "65vh",
      maxWidth: "98vw",
      maxHeight: "65vh",
    },
    mobileDimensions: {
      width: "95vw",
      height: "65vh",
      maxWidth: "95vw",
      maxHeight: "65vh",
    },
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL Elite Program",
    date: "2023",
    description:
      "Advanced course covering Java programming concepts and object-oriented design",
    image:
      "https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pdfFile: javaCert,
    icon: <Code size={20} />,
    category: "programming",
    dimensions: {
      width: "1200px",
      height: "85vh",
      maxWidth: "98vw",
      maxHeight: "70vh",
    },
    mobileDimensions: {
      width: "95vw",
      height: "65vh",
      maxWidth: "95vw",
      maxHeight: "65vh",
    },
  },
  {
    title: "Computer Networks and Internet Protocol",
    issuer: "NPTEL Elite Program",
    date: "2025",
    description:
      "Detailed exploration of network fundamentals, protocols, and internet architecture.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pdfFile: networksCert,
    icon: <Database size={20} />,
    category: "networking",
    dimensions: {
      width: "1200px",
      height: "85vh",
      maxWidth: "98vw",
      maxHeight: "70vh",
    },
    mobileDimensions: {
      width: "95vw",
      height: "65vh",
      maxWidth: "95vw",
      maxHeight: "65vh",
    },
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL Silver Program",
    date: "2024",
    description:
      "Introductory course on cloud service models, deployment, and cloud infrastructure.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pdfFile: cloudCert,
    icon: <Database size={20} />,
    category: "networking",
    dimensions: {
      width: "1200px",
      height: "85vh",
      maxWidth: "98vw",
      maxHeight: "70vh",
    },
    mobileDimensions: {
      width: "95vw",
      height: "65vh",
      maxWidth: "95vw",
      maxHeight: "65vh",
    },
  },
  {
    title: "Hands-On Introduction to React",
    issuer: "LinkedIn Learning",
    date: "2023",
    description:
      "Practical course on building interactive web applications using React, including component-based architecture and hooks.",
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pdfFile: reactCert,
    icon: <Code size={20} />,
    category: "development",
    dimensions: {
      width: "1100px",
      height: "64vh",
      maxWidth: "95vw",
      maxHeight: "65vh",
    },
    mobileDimensions: {
      width: "95vw",
      height: "65vh",
      maxWidth: "95vw",
      maxHeight: "65vh",
    },
  },
  {
    title: "NahamCon CTF 2024 - Ranked #361/2987",
    issuer: "NahamCon CTF",
    date: "2024",
    description:
      "Competitive cybersecurity challenge where I achieved top 12% ranking among nearly 3000 participants worldwide.",
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pdfFile: nahamconCert,
    icon: <Shield size={20} />,
    category: "cybersecurity",
    dimensions: {
      width: "1100px",
      height: "65vh",
      maxWidth: "98vw",
      maxHeight: "65vh",
    },
    mobileDimensions: {
      width: "95vw",
      height: "65vh",
      maxWidth: "95vw",
      maxHeight: "65vh",
    },
  },
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getCategoryColor = (category: string) => {
    const colors = {
      development: "from-blue-500 to-cyan-500",
      programming: "from-green-500 to-emerald-500",
      networking: "from-purple-500 to-violet-500",
      cybersecurity: "from-red-500 to-pink-500",
      gamedev: "from-orange-500 to-yellow-500",
    };
    return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  const openCertificate = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setPdfError(false);
    setScale(1);
    document.body.style.overflow = "hidden";
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    setScale(1);
    setPdfError(false);
    document.body.style.overflow = "auto";
  };

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.25, 2));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => setScale(1);

  const getDimensions = (certificate: Certificate) => {
    const dimensions = isMobile
      ? certificate.mobileDimensions || certificate.dimensions
      : certificate.dimensions;
    
    return dimensions || {
      width: "95vw",
      height: "65vh",
      maxWidth: "95vw",
      maxHeight: "65vh",
    };
  };

  const handlePdfError = () => {
    setPdfError(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="section-padding"
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-20">
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-4 rounded-2xl mb-6 backdrop-blur-sm border border-blue-500/20"
          >
            <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-center tracking-tight relative"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="relative">
              Certificates & Courses
              <motion.div
                className="absolute top-1/2 left-0 w-full h-1 bg-black dark:bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
                style={{ transform: 'translateY(-50%)' }}
              />
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl text-center leading-relaxed"
          >
            I'm constantly learning and improving my skills through various courses and certifications. 
            Here's a collection of my educational achievements that have helped shape my technical expertise.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
        {certificates.map((certificate, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group backdrop-blur-xl bg-white/80 dark:bg-neutral-900/80 rounded-3xl shadow-xl border border-neutral-200/50 dark:border-neutral-700/50 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 h-full flex flex-col"
          >
            <div className="h-48 overflow-hidden relative">
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${getCategoryColor(
                  certificate.category
                )}`}
              ></div>
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 backdrop-blur-xl bg-white/80 dark:bg-neutral-900/80 p-3 rounded-full border border-neutral-200/50 dark:border-neutral-700/50 flex items-center justify-center min-w-[44px] min-h-[44px]">
                <div className="text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  {certificate.icon}
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 group-hover:text-blue-custom transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                {certificate.title}
              </h3>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-blue-custom text-xs font-medium font-jetbrains rounded-lg border border-blue-500/20">
                  {certificate.issuer}
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-500 font-jetbrains font-medium">
                  {certificate.date}
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                {certificate.description}
              </p>

              <motion.button
                onClick={() => openCertificate(certificate)}
                className="btn-secondary text-sm flex items-center space-x-2 px-4 py-3 w-full justify-center"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`View ${certificate.title}`}
              >
                <Eye size={16} />
                <span className="font-jetbrains">View Certificate</span>
              </motion.button>
            </div>
            <div className="px-6 pb-6 mt-auto">
              <span
                className={`inline-flex items-center px-3 py-2 rounded-xl text-xs font-medium font-jetbrains border ${
                  certificate.category === "development"
                    ? "bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-custom border-blue-500/20"
                    : certificate.category === "cybersecurity"
                    ? "bg-gradient-to-r from-red-500/10 to-red-600/10 text-red-600 dark:text-red-400 border-red-500/20"
                    : certificate.category === "networking"
                    ? "bg-gradient-to-r from-purple-500/10 to-purple-600/10 text-purple-600 dark:text-purple-400 border-purple-500/20"
                    : certificate.category === "programming"
                    ? "bg-gradient-to-r from-green-500/10 to-green-600/10 text-green-600 dark:text-green-400 border-green-500/20"
                    : "bg-gradient-to-r from-orange-500/10 to-orange-600/10 text-orange-600 dark:text-orange-400 border-orange-500/20"
                }`}
              >
                {certificate.category === "development" && "Web Development"}
                {certificate.category === "programming" &&
                  "Object-Oriented Programming"}
                {certificate.category === "cybersecurity" && "Cybersecurity"}
                {certificate.category === "networking" && "Networking & Cloud"}
                {certificate.category === "gamedev" && "Game Development"}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Certificate View Modal - Mobile Responsive */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeCertificate}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25 }}
              className={`backdrop-blur-xl bg-white/95 dark:bg-neutral-900/95 rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-neutral-200/50 dark:border-neutral-700/50 ${
                isMobile
                  ? "w-[95%] h-[85vh] max-h-[85vh]"
                  : "max-w-[90%] w-[1100px] h-[90vh]"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header - Modern */}
              <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-b border-neutral-200/50 dark:border-neutral-700/50 flex justify-between items-center">
                <h2
                  className={`font-bold text-neutral-900 dark:text-neutral-100 truncate ${
                    isMobile ? "text-sm max-w-[60%]" : "text-lg max-w-[70%]"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {selectedCertificate?.title}
                </h2>
                <div className="flex items-center space-x-2">
                  {/* Simplified control buttons */}
                  <motion.button
                    onClick={zoomOut}
                    className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    title="Zoom out"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ZoomOut size={isMobile ? 14 : 16} />
                  </motion.button>
                  <motion.button
                    onClick={resetZoom}
                    className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    title="Reset zoom"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <RotateCw size={isMobile ? 14 : 16} />
                  </motion.button>
                  <motion.button
                    onClick={zoomIn}
                    className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    title="Zoom in"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ZoomIn size={isMobile ? 14 : 16} />
                  </motion.button>

                  <motion.a
                    href={selectedCertificate?.pdfFile}
                    download
                    className="btn-secondary p-2 flex items-center"
                    onClick={(e) => e.stopPropagation()}
                    title="Download certificate"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Download size={isMobile ? 14 : 16} />
                  </motion.a>

                  <motion.button
                    onClick={closeCertificate}
                    className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    title="Close"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={isMobile ? 16 : 18} />
                  </motion.button>
                </div>
              </div>
              {/* PDF Viewer Container */}
              <div className="flex-grow bg-neutral-50 dark:bg-neutral-800 overflow-hidden flex items-center justify-center p-6 relative">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 25px 25px, rgb(59, 130, 246) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgb(147, 51, 234) 2%, transparent 0%)",
                    backgroundSize: "50px 50px",
                  }}
                ></div>

                <motion.div
                  className="transition-all duration-300"
                  style={{ transform: `scale(${scale})` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Show fallback UI for mobile devices to ensure compatibility */}
                  {pdfError || isMobile ? (
                    <div className="backdrop-blur-xl bg-white/90 dark:bg-neutral-900/90 p-8 rounded-3xl shadow-2xl border border-neutral-200/50 dark:border-neutral-700/50 text-center max-w-md">
                      <h3
                        className={`${
                          isMobile ? "text-xl" : "text-2xl"
                        } font-bold mb-6 text-neutral-900 dark:text-neutral-100`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Certificate Preview
                      </h3>
                      <p className="mb-8 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {isMobile && !pdfError
                          ? "For the best viewing experience on mobile, please download or open in a new tab."
                          : "The certificate PDF cannot be displayed in the browser."}
                      </p>
                      <div
                        className={`flex ${
                          isMobile
                            ? "flex-col space-y-4"
                            : "justify-center gap-4"
                        }`}
                      >
                        <motion.a
                          href={selectedCertificate?.pdfFile}
                          download
                          className="btn-primary px-6 py-3 flex items-center justify-center space-x-2"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Download size={isMobile ? 16 : 18} />
                          <span className="font-jetbrains">Download PDF</span>
                        </motion.a>
                        <motion.a
                          href={selectedCertificate?.pdfFile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary px-6 py-3 flex items-center justify-center space-x-2"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink size={isMobile ? 16 : 18} />
                          <span className="font-jetbrains">Open in New Tab</span>
                        </motion.a>
                      </div>
                    </div>
                  ) : (
                    // PDF embed for desktop only
                    <div
                      className="bg-white rounded-md shadow-2xl overflow-hidden"
                      style={{
                        width: getDimensions(selectedCertificate).width,
                        height: getDimensions(selectedCertificate).height,
                        maxWidth: getDimensions(selectedCertificate).maxWidth,
                        maxHeight: getDimensions(selectedCertificate).maxHeight,
                      }}
                    >
                      {/* Direct PDF embed for desktop browsers */}
                      <object
                        data={selectedCertificate.pdfFile}
                        type="application/pdf"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                        onError={handlePdfError}
                      >
                        <iframe
                          src={selectedCertificate.pdfFile}
                          style={{
                            width: "100%",
                            height: "100%",
                            border: "none",
                          }}
                          title={selectedCertificate.title}
                          onError={handlePdfError}
                          frameBorder="0"
                          loading="eager"
                        />
                      </object>
                    </div>
                  )}
                </motion.div>
              </div>
              {/* Footer - Modern */}
              <div className="p-4 border-t border-neutral-200/50 dark:border-neutral-700/50 bg-gradient-to-r from-blue-500/5 to-purple-600/5 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-blue-custom text-xs font-medium font-jetbrains rounded-lg border border-blue-500/20">
                    {selectedCertificate?.issuer}
                  </span>
                  <span
                    className={`text-neutral-500 dark:text-neutral-400 font-jetbrains font-medium ${
                      isMobile ? "text-xs" : "text-sm"
                    }`}
                  >
                    {selectedCertificate?.date}
                  </span>
                </div>
                <motion.a
                  href={selectedCertificate?.pdfFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-4 py-2 flex items-center space-x-2"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={isMobile ? 14 : 16} />
                  <span className="font-jetbrains">{isMobile ? "Open" : "Open in New Tab"}</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Certificates;
