import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import PageLayout from "./PageLayout";

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
    date: "7 June 15, 2025",
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
    link: "https://medium.com/@realvoidogojo/cygenix-ctf-2024-the-encrypted-trilogy-writeup-c50f74011369",
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
    link: "https://medium.com/@realvoidogojo/the-real-cause-behind-recent-windows-outages-a-deep-dive-into-crowdstrikes-faulty-update-f243d740ff7e",
    tags: ["Cybersecurity", "Windows", "CrowdStrike"],
  },
  {
    title: "How to Setup VulnHub Machine (vmdk) in Oracle VirtualBox",
    description:
      "A practical guide to setting up vulnerable machines from VulnHub in Oracle VirtualBox for cybersecurity practice and penetration testing.",
    date: "June 10, 2024",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://medium.com/@realvoidogojo/how-to-setup-vulnhub-machine-vmdk-in-oracle-virtualbox-0a602ec550e4",
    tags: ["Tutorial", "VulnHub", "VirtualBox"],
  },
  {
    title: "Difference Between CVE & CWE",
    description:
      "Explaining the key distinctions between Common Vulnerabilities and Exposures (CVEs) and Common Weakness Enumeration (CWEs) in cybersecurity.",
    date: "May 20, 2024",
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://medium.com/@realvoidogojo/difference-b-w-cve-cwe-618ccdb00749",
    tags: ["Cybersecurity", "CVE", "CWE"],
  },
];

const Articles = () => {
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
      title="Articles"
      icon={<BookOpen className="w-8 h-8 text-teal-400" />}
    >
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <p className="text-gray-300">
          I regularly write about cybersecurity topics, CTF walkthroughs, and
          technical guides on Medium. Here are some of my recent articles.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {articles.map((article, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-teal-500/20 transition-all duration-300 h-full flex flex-col"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">
                  {article.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-3">{article.date}</p>
              <p className="text-gray-300 mb-4">{article.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-teal-900/50 text-teal-200 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="px-6 pb-6 mt-auto">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-teal-400 hover:text-teal-300 font-medium"
              >
                Read Article
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-12">
        <a
          href="https://medium.com/@realvoidgojo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          View All Articles
          <ExternalLink size={18} className="ml-2" />
        </a>
      </div>
    </PageLayout>
  );
};

export default Articles;
