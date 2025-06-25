import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Clock, Tag } from "lucide-react";

interface Article {
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
  tags: string[];
}

const articles: Article[] = [
  {
    title: "NahamCon 2025 CTF: Writeup",
    description:
      "A comprehensive analysis of the innovative challenges at NahamCon 2025 CTF, including my approach to solving them and lessons learned from the competition.",
    date: "June 15, 2025",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://medium.com/@realvoidgojo/nahamcon-2025-ctf-writeup-c87be2850378",
    tags: ["CTF", "NahamCon", "Cybersecurity", "Writeup"],
  },
  {
    title: "Cygenix CTF 2024: The Encrypted Trilogy Writeup",
    description:
      "A detailed walkthrough of one of the most challenging problems I encountered at Cygenix CTF 2024, explaining the methodology and solutions.",
    date: "September 10, 2024",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://medium.com/@realvoidgojo/cygenix-ctf-2024-the-encrypted-trilogy-writeup-c50f74011369",
    tags: ["CTF", "Cryptography", "Writeup"],
  },
  {
    title:
      "The Real Cause Behind Recent Windows Outages: A Deep Dive into CrowdStrike's Faulty Update",
    description:
      "Investigating the technical reasons behind the widespread Windows system crashes and how CrowdStrike's update led to the global IT outage.",
    date: "July 20, 2024",
    image:
      "https://images.unsplash.com/photo-1551645120-d70bfe84c826?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://medium.com/@realvoidgojo/the-real-cause-behind-recent-windows-outages-a-deep-dive-into-crowdstrikes-faulty-update-f243d740ff7e",
    tags: ["Cybersecurity", "Windows", "CrowdStrike"],
  },
  {
    title: "How to Setup VulnHub Machine (vmdk) in Oracle VirtualBox",
    description:
      "A practical guide to setting up vulnerable machines from VulnHub in Oracle VirtualBox for cybersecurity practice and penetration testing.",
    date: "June 10, 2024",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://medium.com/@realvoidgojo/how-to-setup-vulnhub-machine-vmdk-in-oracle-virtualbox-0a602ec550e4",
    tags: ["Tutorial", "VulnHub", "VirtualBox"],
  },
  {
    title: "Difference Between CVE & CWE",
    description:
      "Explaining the key distinctions between Common Vulnerabilities and Exposures (CVEs) and Common Weakness Enumeration (CWEs) in cybersecurity.",
    date: "May 20, 2024",
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://medium.com/@realvoidgojo/difference-b-w-cve-cwe-618ccdb00749",
    tags: ["Cybersecurity", "CVE", "CWE"],
  },
];

const Articles = () => {
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
            <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-center tracking-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Articles & Writeups
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl text-center leading-relaxed"
          >
            Insights from cybersecurity competitions, technical tutorials, and deep dives into security concepts
          </motion.p>
        </div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {articles.map((article, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 rounded-2xl overflow-hidden border border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/80 dark:hover:bg-neutral-900/80 transition-all duration-300 group cursor-pointer h-full flex flex-col"
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 dark:bg-neutral-800/90 rounded-lg backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} className="text-neutral-700 dark:text-neutral-300" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-neutral-500 dark:text-neutral-500 text-sm font-jetbrains">
                    <Clock className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {article.title}
                </h2>

                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed flex-grow">
                  {article.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="tech-tag flex items-center"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm inline-flex items-center space-x-2 mt-auto px-4 py-2"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Articles CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
                     <motion.a
             href="https://medium.com/@realvoidgojo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-3 text-lg"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <BookOpen className="w-5 h-5" />
            <span>View All Articles on Medium</span>
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Articles;
