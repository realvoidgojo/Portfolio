import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  BookOpen,
  Code,
  Database,
  Shield,
} from "lucide-react";
import PageLayout from "./PageLayout";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  category: "development" | "cybersecurity" | "networking" | "gamedev";
}

const certificates: Certificate[] = [
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    date: "2025",
    description:
      "Comprehensive training covering front-end and back-end technologies including HTML, CSS, JavaScript, Node.js, and databases.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <Code size={24} />,
    category: "development",
  },
  {
    title: "Complete C# Unity Game Developer 2D",
    issuer: "Udemy",
    date: "2023",
    description:
      "In-depth course on game development using Unity engine and C#, focusing on 2D game mechanics and design.",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <BookOpen size={24} />,
    category: "gamedev",
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL Elite Program",
    date: "2023",
    description:
      "Advanced course covering Java programming concepts, object-oriented design, and application development.",
    image:
      "https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <Code size={24} />,
    category: "development",
  },
  {
    title: "Computer Networks and Internet Protocol",
    issuer: "NPTEL Elite Program",
    date: "2025",
    description:
      "Detailed exploration of network fundamentals, protocols, and internet architecture.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <Database size={24} />,
    category: "networking",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL Silver Program",
    date: "2024",
    description:
      "Introductory course on cloud service models, deployment, and cloud infrastructure.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Better cloud computing image
    icon: <Database size={24} />,
    category: "networking",
  },
  {
    title: "Hands-On Introduction to React",
    issuer: "LinkedIn Learning",
    date: "2023",
    description:
      "Practical course on building interactive web applications using React, including component-based architecture and hooks.",
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <Code size={24} />,
    category: "development",
  },
  {
    title: "NahamCon 2025 CTF Certificate",
    issuer: "NahamCon",
    date: "2025",
    description:
      "Recognition for participation and ranking #361 out of 2961 participants in the national-level Capture The Flag cybersecurity competition.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <Shield size={24} />,
    category: "cybersecurity",
  },
];

const Certificates = () => {
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
      default:
        return "from-teal-600 to-teal-800";
    }
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
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-3 right-3 bg-gray-900/80 p-2 rounded-full">
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
                {certificate.category === "cybersecurity" && "Cybersecurity"}
                {certificate.category === "networking" && "Networking & Cloud"}
                {certificate.category === "gamedev" && "Game Development"}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </PageLayout>
  );
};

export default Certificates;
