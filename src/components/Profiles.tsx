import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  ExternalLink,
  GitBranch,
  BookOpen,
  Shield,
  Youtube,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";

interface CodingProfile {
  platform: string;
  username: string;
  achievements: string[];
  stats: {
    repository?: number;
    ranking?: string;
    rating?: number;
  };
  link: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

// My profiles on different coding/tech platforms
const profilesData: CodingProfile[] = [
  {
    platform: "GitHub",
    username: "realvoidgojo",
    achievements: [
      "Video Analytics Platform",
      "RTO Lookup",
      "NatasX CTF Solver",
    ],
    stats: {
      repository: 8,
    },
    link: "https://github.com/realvoidgojo",
    icon: <GitBranch />,
    color: "from-gray-600 to-gray-800",
    description:
      "Repository of all my projects, tools, and code experiments in cybersecurity and software development.",
  },
  {
    platform: "CTFtime",
    username: "realvoidgojo",
    achievements: ["NahamCon CTF 2025 - #361"],
    stats: {
      ranking: "beginner",
    },
    link: "https://ctftime.org/user/198041",
    icon: <Shield />,
    color: "from-blue-500 to-blue-700",
    description:
      "My CTF competition profile tracking achievements and rankings in cybersecurity challenges.",
  },
  {
    platform: "YouTube",
    username: "RockYou Channel",
    achievements: ["Educational Videos", "CTF Walkthroughs"],
    stats: {},
    link: "https://youtube.com/@RockYouChannel",
    icon: <Youtube />,
    color: "from-red-500 to-red-700",
    description:
      "Educational channel featuring cybersecurity tutorials, CTF walkthrough videos, and technical demonstrations.",
  },
  {
    platform: "Medium",
    username: "realvoidgojo",
    achievements: [
      "Cybersecurity Tutorials",
      "CTF Writeups",
      "Technical Guides",
    ],
    stats: {},
    link: "https://medium.com/@realvoidgojo",
    icon: <BookOpen />,
    color: "from-green-500 to-green-700",
    description:
      "My blog featuring detailed writeups on CTF challenges, cybersecurity concepts, and technical tutorials.",
  },
];

const Profiles = () => {
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
            <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-center tracking-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Social Profiles
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl text-center leading-relaxed"
          >
            Connect with me across platforms where I share code, compete in
            challenges, and create educational content
          </motion.p>
        </div>

        {/* Profiles Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {profilesData.map((profile, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 rounded-2xl overflow-hidden border border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/80 dark:hover:bg-neutral-900/80 transition-all duration-300 group h-full flex flex-col"
              whileHover={{ y: -4, scale: 1.01 }}
            >
              {/* Color Accent Bar */}
              <div className={`h-1 bg-gradient-to-r ${profile.color}`}></div>

              <div className="p-8 flex-grow flex flex-col">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${profile.color} text-white shadow-lg`}
                  >
                    {React.cloneElement(profile.icon as React.ReactElement, {
                      className: "w-6 h-6",
                    })}
                  </div>
                  <div className="ml-4">
                    <h3
                      className="text-2xl font-bold text-neutral-900 dark:text-neutral-100"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {profile.platform}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 font-jetbrains text-sm">
                      @{profile.username}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  {profile.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4
                    className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <Star className="w-4 h-4 mr-2 text-yellow-500" />
                    Highlights
                  </h4>
                  <ul className="space-y-3">
                    {profile.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start text-neutral-600 dark:text-neutral-400"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="font-jetbrains text-sm">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                {Object.keys(profile.stats).length > 0 && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-neutral-100/50 to-neutral-200/50 dark:from-neutral-800/50 dark:to-neutral-700/50 rounded-xl backdrop-blur-sm">
                    <div className="flex flex-wrap gap-4">
                      {profile.stats.repository && (
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 font-jetbrains">
                            {profile.stats.repository}+
                          </div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-400">
                            Repositories
                          </div>
                        </div>
                      )}
                      {profile.stats.ranking && (
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400 font-jetbrains">
                            {profile.stats.ranking}
                          </div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-400">
                            Status
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Visit Profile Button */}
                <motion.a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-xl font-semibold transition-all duration-300 mt-auto"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Visit Profile</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-8 rounded-2xl border border-blue-500/20 max-w-2xl mx-auto">
            <h3
              className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Let's Connect
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Follow my journey in cybersecurity, development, and continuous
              learning. I'm always excited to connect with fellow tech
              enthusiasts!
            </p>
            <motion.a
              href="mailto:harishsivaraman@outlook.com"
              className="btn-primary inline-flex items-center space-x-2"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get In Touch</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Profiles;
