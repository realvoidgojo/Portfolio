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
import PageLayout from "./PageLayout";

// Import certificates
import fullStackCert from "../assets/certifications/full-stack-cert.pdf";
import unityCert from "../assets/certifications/unity-game-dev.pdf";
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
    icon: <Code size={24} />,
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
    title: "Complete C# Unity Game Developer 2D",
    issuer: "Udemy",
    date: "2022",
    description:
      "In-depth course on game development using Unity engine and C#, focusing on 2D game mechanics and design.",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pdfFile: unityCert,
    icon: <BookOpen size={24} />,
    category: "gamedev",
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
    icon: <Code size={24} />,
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
    icon: <Database size={24} />,
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
    icon: <Database size={24} />,
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
    icon: <Code size={24} />,
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
    title: "NahamCon 2025 CTF Certificate",
    issuer: "NahamCon",
    date: "2025",
    description:
      "Recognition for participation and ranking #361 out of 2961 participants in the national-level Capture The Flag cybersecurity competition.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pdfFile: nahamconCert,
    icon: <Shield size={24} />,
    category: "cybersecurity",
    dimensions: {
      width: "1300px",
      height: "59vh",
      maxWidth: "80vw",
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

  // Default dimensions for certificates that don't specify their own
  const defaultDimensions = {
    width: "1100px",
    height: "80vh",
    maxWidth: "98vw",
    maxHeight: "65vh",
  };

  const defaultMobileDimensions = {
    width: "95vw", // Fixed from 20vw to 95vw
    height: "65vh", // Increased from 60vh to 65vh
    maxWidth: "95vw",
    maxHeight: "65vh", // Increased from 60vh to 65vh
  };

  // Check for mobile viewport on component mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reset PDF error state when certificate changes
  useEffect(() => {
    setPdfError(false);
  }, [selectedCertificate]);

  // Animation variants for children elements
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "development":
        return "from-blue-600 to-blue-800";
      case "cybersecurity":
        return "from-red-600 to-red-800";
      case "networking":
        return "from-purple-600 to-purple-800";
      case "gamedev":
        return "from-green-600 to-green-800";
      case "programming":
        return "from-green-600 to-green-800";
      default:
        return "from-teal-600 to-teal-800";
    }
  };

  // Handle opening certificate view
  const openCertificate = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = "hidden";
    setScale(1); // Reset zoom when opening new certificate
  };

  // Handle closing certificate view
  const closeCertificate = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = "auto";
  };

  // Zoom functions
  const zoomIn = () => setScale((prev) => Math.min(prev + 0.25, 2));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => setScale(1);

  // Get appropriate dimensions based on device
  const getDimensions = (certificate: Certificate) => {
    if (isMobile) {
      return certificate.mobileDimensions || defaultMobileDimensions;
    }
    return certificate.dimensions || defaultDimensions;
  };

  const handlePdfError = () => {
    console.error("PDF failed to load");
    setPdfError(true);
  };

  return (
    <PageLayout
      title="Certificates & Courses"
      icon={<Award className="w-8 h-8 text-teal-400" />}
    >
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <p className="text-gray-300">
          I'm constantly learning and improving my skills through various
          courses and certifications. Here's a collection of my educational
          achievements that have helped shape my technical expertise.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {certificates.map((certificate, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-teal-500/20 transition-all duration-300 h-full flex flex-col"
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
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-gray-900/70 p-2 rounded-full">
                {certificate.icon}
              </div>
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-semibold text-white mb-1">
                {certificate.title}
              </h3>
              <div className="flex justify-between mb-4">
                <p className="text-teal-400">{certificate.issuer}</p>
                <p className="text-gray-400">{certificate.date}</p>
              </div>
              <p className="text-gray-300">{certificate.description}</p>

              <button
                onClick={() => openCertificate(certificate)}
                className="mt-4 flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                aria-label={`View ${certificate.title}`}
              >
                <Eye size={18} className="mr-1" />
                <span>View Certificate</span>
              </button>
            </div>
            <div className="p-4 border-t border-gray-700 mt-auto">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  certificate.category === "development"
                    ? "bg-blue-900/30 text-blue-300"
                    : certificate.category === "cybersecurity"
                    ? "bg-red-900/30 text-red-300"
                    : certificate.category === "networking"
                    ? "bg-purple-900/30 text-purple-300"
                    : "bg-green-900/30 text-green-300"
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
            className="fixed inset-0 modal-backdrop flex items-center justify-center z-50 p-1"
            onClick={closeCertificate}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25 }}
              className={`bg-gray-800 rounded-xl overflow-hidden flex flex-col ${
                isMobile
                  ? "w-[98%] h-[90vh] max-h-[90vh]"
                  : "max-w-[90%] w-[1100px] h-[92vh]"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header - Simplified */}
              <div className="p-1.5 bg-gray-700 border-b border-gray-700/50 flex justify-between items-center">
                <h2
                  className={`font-bold text-white truncate pl-2 ${
                    isMobile ? "text-xs max-w-[60%]" : "text-sm max-w-[70%]"
                  }`}
                >
                  {selectedCertificate?.title}
                </h2>
                <div className="flex items-center space-x-1">
                  {/* Simplified control buttons */}
                  <motion.button
                    onClick={zoomOut}
                    className="p-1 text-gray-400 hover:text-white rounded-full hover:bg-gray-600 transition-colors"
                    title="Zoom out"
                  >
                    <ZoomOut size={isMobile ? 12 : 14} />
                  </motion.button>
                  <motion.button
                    onClick={resetZoom}
                    className="p-1 text-gray-400 hover:text-white rounded-full hover:bg-gray-600 transition-colors"
                    title="Reset zoom"
                  >
                    <RotateCw size={isMobile ? 12 : 14} />
                  </motion.button>
                  <motion.button
                    onClick={zoomIn}
                    className="p-1 text-gray-400 hover:text-white rounded-full hover:bg-gray-600 transition-colors"
                    title="Zoom in"
                  >
                    <ZoomIn size={isMobile ? 12 : 14} />
                  </motion.button>

                  <motion.a
                    href={selectedCertificate?.pdfFile}
                    download
                    className="p-1 text-gray-400 hover:text-white rounded-full hover:bg-gray-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                    title="Download certificate"
                  >
                    <Download size={isMobile ? 12 : 14} />
                  </motion.a>

                  <motion.button
                    onClick={closeCertificate}
                    className="p-1 text-gray-400 hover:text-white rounded-full hover:bg-gray-600 transition-colors ml-1"
                    title="Close"
                  >
                    <X size={isMobile ? 14 : 16} />
                  </motion.button>
                </div>
              </div>
              {/* PDF Viewer Container */}
              <div className="flex-grow bg-gray-900 bg-opacity-90 overflow-hidden flex items-center justify-center p-0 relative">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 25px 25px, rgb(30, 41, 59) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgb(30, 41, 59) 2%, transparent 0%)",
                    backgroundSize: "100px 100px",
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
                    <div className="bg-gray-800 p-6 rounded-md shadow-xl text-white text-center">
                      <h3
                        className={`${
                          isMobile ? "text-lg" : "text-xl"
                        } font-bold mb-4`}
                      >
                        Certificate Preview
                      </h3>
                      <p className="mb-4">
                        {isMobile && !pdfError
                          ? "For better viewing experience on mobile, please download or open in a new tab."
                          : "The certificate PDF cannot be displayed in the browser."}
                      </p>
                      <div
                        className={`flex ${
                          isMobile
                            ? "flex-col space-y-3"
                            : "justify-center gap-4"
                        }`}
                      >
                        <a
                          href={selectedCertificate?.pdfFile}
                          download
                          className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Download
                            size={isMobile ? 16 : 18}
                            className="mr-2"
                          />
                          Download PDF
                        </a>
                        <a
                          href={selectedCertificate?.pdfFile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink
                            size={isMobile ? 16 : 18}
                            className="mr-2"
                          />
                          Open in New Tab
                        </a>
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
              {/* Footer - Simplified for mobile */}
              <div className="p-1 border-t border-gray-700/50 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 flex justify-between items-center">
                <p
                  className={`text-teal-400 font-medium ${
                    isMobile ? "text-2xs" : "text-xs"
                  }`}
                >
                  {selectedCertificate?.issuer} • {selectedCertificate?.date}
                </p>
                <motion.a
                  href={selectedCertificate?.pdfFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white flex items-center shadow-sm ${
                    isMobile
                      ? "text-2xs px-1.5 py-0.5 rounded"
                      : "text-xs px-2 py-0.5 rounded-lg"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink
                    size={isMobile ? 10 : 12}
                    className={isMobile ? "mr-0.5" : "mr-1"}
                  />
                  {isMobile ? "Open" : "Open in New Tab"}
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default Certificates;
