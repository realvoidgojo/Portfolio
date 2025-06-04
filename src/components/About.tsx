import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Database,
  Palette,
} from "lucide-react";
import profileImage from "../assets/profile.jpg";

const About = () => {
  const skills = [
    {
      category: "Languages",
      items: ["Python", "Java", "Golang", "JavaScript", "React"],
    },
    {
      category: "Frameworks & Tools",
      items: ["Flask", "Requests", "Celery", "OpenCV", "WebSockets"],
    },
    {
      category: "DevOps & Others",
      items: ["Linux", "Git", "Docker", "Postman", "Nmap", "Burp Suite"],
    },
    {
      category: "Creative & Design",
      items: ["Figma", "Canva", "Premier", "Photoshop", "Illustrator"],
    },
  ];

  const experience = [
    {
      position: "Cyberthon 2025 Finalist",
      company: "National Cybersecurity Hackathon",
      period: "March 2025",
      description:
        "Built a real-time video surveillance system with YOLOv11-based object detection, heatmap analytics, WebSocket streaming, Flask and React.",
      technologies: ["Python", "Flask", "Celery", "YOLOv11", "React"],
    },
    {
      position: "Shell-Edunet AICTE Green Skills",
      company: "Shell India",
      period: "April 2025",
      description:
        "Collaborated with teams to build AI-powered solutions for sustainability. Applied Python for modeling green energy data.",
      technologies: ["Python", "AI/ML", "Sustainability"],
    },
    {
      position: "Content Creator",
      company: "RockYou YouTube Channel",
      period: "2024 - Present",
      description:
        "Produced educational videos on CTF walkthroughs, OSINT techniques, Python automation, and cybersecurity tool demos.",
      technologies: ["Cybersecurity", "CTF", "OSINT", "Python"],
    },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science and Business Systems",
      institution: "Sri Sairam Engineering College, Chennai",
      year: "2022 - Present",
      description:
        "CGPA: 7.53/10. Focused on cybersecurity, software development, and automation.",
    },
  ];

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-16">
          <motion.div
            variants={itemVariants}
            className="bg-teal-500/20 p-3 rounded-full mb-4"
          >
            <Code2 className="w-8 h-8 text-teal-400" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-4 text-center"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 max-w-2xl text-center"
          >
            I'm a cybersecurity enthusiast and software developer focused on
            CTFs, OSINT, and automation.
          </motion.p>
        </div>

        {/* Bio Section */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden border-4 border-teal-600">
                {/* Replace the Unsplash URL with the imported image */}
                <img
                  src={profileImage}
                  alt="Harish Sivaraman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gray-900 p-3 rounded-lg shadow-lg">
                <Award className="w-8 h-8 text-teal-500" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Hello, I'm Harish Sivaraman
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate cybersecurity enthusiast and software developer
              from Chennai, India, with a strong focus on CTFs (Capture The Flag
              challenges), OSINT (Open-Source Intelligence), and automation.
              Currently pursuing my B.Tech in Computer Science and Business
              Systems at Sri Sairam Engineering College.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I've built a reputation through national-level competitions like
              Cyberthon 2025 and NahamCon CTF, where I ranked #361 out of 2961
              participants. I create educational content on my YouTube channel
              "RockYou" and write cybersecurity insights on Medium.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:harishsivaraman@outlook.com"
                target="_blank"
                className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/realvoidgojo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                GitHub Profile
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={containerVariants} className="mb-20">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">My Skills</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I've worked with various technologies throughout my career. Here
              are some of my key skills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800 rounded-xl p-6 hover:shadow-teal-500/10 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {index === 0 && (
                    <Code2 className="w-6 h-6 text-teal-500 mr-3" />
                  )}
                  {index === 1 && (
                    <Database className="w-6 h-6 text-teal-500 mr-3" />
                  )}
                  {index === 2 && (
                    <Code2 className="w-6 h-6 text-teal-500 mr-3" />
                  )}
                  {index === 3 && (
                    <Palette className="w-6 h-6 text-teal-500 mr-3" />
                  )}
                  <h4 className="text-xl font-semibold text-white">
                    {skillSet.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={containerVariants} className="mb-20">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Professional Experience
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My professional journey and work experience over the years.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800 rounded-xl p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      {job.position}
                    </h4>
                    <p className="text-teal-400">{job.company}</p>
                  </div>
                  <p className="text-gray-500 mt-2 md:mt-0">{job.period}</p>
                </div>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-teal-900/30 text-teal-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Education</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My academic background and qualifications.
            </p>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800 rounded-xl p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-teal-400">{edu.institution}</p>
                  </div>
                  <p className="text-gray-500 mt-2 md:mt-0">{edu.year}</p>
                </div>
                <p className="text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
