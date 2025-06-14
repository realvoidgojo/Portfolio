import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  ExternalLink,
  GitBranch,
  BookOpen, // For Medium
  Shield, // For CTFTime
  Youtube, // For YouTube
} from "lucide-react";
import PageLayout from "./PageLayout";

interface CodingProfile {
  platform: string;
  username: string;
  achievements: string[];
  stats: {
    contributions?: number;
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
      contributions: 30,
    },
    link: "https://github.com/realvoidgojo",
    icon: <GitBranch />,
    color: "from-gray-700 to-gray-900",
    description:
      "Repository of all my projects, tools, and code experiments in cybersecurity and software development.",
  },
  {
    platform: "CTFtime",
    username: "realvoidgojo",
    achievements: ["NahamCon CTF 2025 - #361"],
    stats: {
      ranking: "Rising",
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

  return (
    <PageLayout
      title="Profiles"
      icon={<Code className="w-8 h-8 text-teal-400" />}
    >
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <p className="text-gray-300">
          Connect with me on various platforms where I share my work,
          participate in challenges, and create educational content.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {profilesData.map((profile, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 h-full flex flex-col border border-gray-700/30"
          >
            <div className={`h-2 bg-gradient-to-r ${profile.color}`}></div>
            <div className="p-5">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-gray-700 rounded-lg mr-3">
                  {React.cloneElement(profile.icon as React.ReactElement, {
                    className: "w-5 h-5 text-teal-400",
                  })}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    {profile.platform}
                  </h3>
                  <p className="text-gray-400 text-sm">@{profile.username}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-3 text-sm">
                {profile.description}
              </p>

              <div className="mb-3">
                <h4 className="text-gray-300 mb-1 text-sm font-medium">
                  Highlights:
                </h4>
                <ul className="space-y-1">
                  {profile.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-gray-400 flex items-start text-xs"
                    >
                      <span className="text-teal-400 mr-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </PageLayout>
  );
};

export default Profiles;
