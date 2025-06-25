import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Database,
  Palette,
  Terminal,
  Shield,
} from "lucide-react";
import profileImage from "../assets/profile.jpg";

const About = () => {
  const skills = [
    {
      category: "Languages",
      items: ["Python", "Java", "Golang", "JavaScript"],
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      category: "Frameworks & Tools",
      items: [, "React", "Flask", "Requests", "Celery", "OpenCV", "WebSockets"],
      icon: <Database className="w-5 h-5" />,
    },
    {
      category: "DevOps & Security",
      items: ["Linux", "Git", "Docker", "Postman", "Burp Suite"],
      icon: <Shield className="w-5 h-5" />,
    },
    {
      category: "Creative & Design",
      items: ["Figma", "Canva", "Premier", "Photoshop", "Illustrator"],
      icon: <Palette className="w-5 h-5" />,
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
        "CGPA: 7.53/10. Focused on computer science and business systems with a strong emphasis on software development.",
    },
  ];

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
            <Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-center tracking-tight relative"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="relative">
              About Me
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
            Passionate cybersecurity enthusiast and developer building the
            future of digital security
          </motion.p>
        </div>

        {/* Bio Section */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-5 gap-12 mb-24"
        >
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="relative group">
              <div
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  padding: "6px",
                }}
              >
                <div className="w-full h-full rounded-3xl overflow-hidden bg-white dark:bg-neutral-800">
                  <img
                    src={profileImage}
                    alt="Harish Sivaraman"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 backdrop-blur-xl bg-white/80 dark:bg-neutral-900/80 p-4 rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-700/50"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Award className="w-8 h-8 text-blue-600" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-3 backdrop-blur-xl bg-white/80 dark:bg-neutral-900/80 p-8 md:p-10 rounded-3xl shadow-xl border border-neutral-200/50 dark:border-neutral-700/50"
          >
            <h2
              className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Harish Sivaraman
              </span>
            </h2>
            <div className="space-y-6 text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
              <p>
                I'm a passionate cybersecurity enthusiast and software developer
                from Chennai, India, with expertise in{" "}
                <span className="font-jetbrains text-blue-600 dark:text-blue-400 font-medium">
                  CTFs
                </span>
                ,
                <span className="font-jetbrains text-purple-600 dark:text-purple-400 font-medium">
                  {" "}
                  OSINT
                </span>
                , and
                <span className="font-jetbrains text-green-600 dark:text-green-400 font-medium">
                  {" "}
                  automation
                </span>
                .
              </p>
              <p>
                Currently pursuing my B.Tech in Computer Science and Business
                Systems at Sri Sairam Engineering College, I've been obsessed
                with cybersecurity since my first year. Late nights solving CTF
                challenges and building Python automation tools have become my
                favorite pastime.
              </p>
              <p>
                Proud to have qualified for <strong>Cyberthon 2025</strong> and
                ranked <strong>#361 in NahamCon CTF </strong>
                out of nearly 3000 participants. When I'm not breaking things, I
                create educational content on my YouTube channel and share
                insights on Medium.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.a
                href="mailto:harishsivaraman@outlook.com"
                className="btn-primary flex items-center space-x-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Contact Me</span>
              </motion.a>
              <motion.a
                href="https://github.com/realvoidgojo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center space-x-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>GitHub Profile</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={containerVariants} className="mb-24">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Technical Skills
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit built through hands-on experience and
              continuous learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillSet, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 rounded-2xl p-6 border border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/80 dark:hover:bg-neutral-900/80 transition-all duration-300 group"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {skillSet.icon}
                  </div>
                  <h3
                    className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 ml-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {skillSet.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill, i) => (
                    <span
                      key={i}
                      className="tech-tag text-sm hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors duration-200"
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
        <motion.div variants={containerVariants} className="mb-24">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Professional Experience
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              My journey through cybersecurity competitions, hackathons, and
              content creation
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 rounded-2xl p-8 border border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/80 dark:hover:bg-neutral-900/80 transition-all duration-300 group"
                whileHover={{ y: -2, scale: 1.005 }}
              >
                <div className="flex flex-col lg:flex-row justify-between mb-6">
                  <div>
                    <h3
                      className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {job.position}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-500 font-jetbrains mt-2 lg:mt-0 font-medium">
                    {job.period}
                  </p>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed text-lg">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {job.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag text-sm">
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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Education
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Academic foundation supporting my technical journey
            </p>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 rounded-2xl p-8 border border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/80 dark:hover:bg-neutral-900/80 transition-all duration-300 group"
                whileHover={{ y: -2, scale: 1.005 }}
              >
                <div className="flex flex-col lg:flex-row justify-between mb-6">
                  <div>
                    <h3
                      className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-500 font-jetbrains mt-2 lg:mt-0 font-medium">
                    {edu.year}
                  </p>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
