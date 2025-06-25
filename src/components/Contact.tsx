import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  AlertCircle,
  Loader2,
  Github,
  Linkedin,
  BookOpen,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const templateParams = {
      from_name: form.name,
      to_name: "Harish",
      reply_to: form.email,
      message: `Email: ${form.email}\n\n${form.message}`,
    };

    emailjs
      .send(
        "service_n7nmycb",
        "template_phy1zg3",
        templateParams,
        "l0cyQBOYDtcQ3hscB"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm({
            name: "",
            email: "",
            message: "",
          });

          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        },
        (error) => {
          console.error("Email send failed:", error);
          setLoading(false);
          setError(`Failed to send: ${error.text || "Unknown error"}`);
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "harishsivaraman@outlook.com",
      href: "mailto:harishsivaraman@outlook.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      href: null,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Available",
      value: "+91 8825964873",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/realvoidgojo",
      color: "hover:text-blue-400",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/realvoidgojo",
      color: "hover:text-blue-500",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      label: "Medium",
      href: "https://medium.com/@realvoidgojo",
      color: "hover:text-green-400",
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
        <div className="flex flex-col items-center justify-center mb-12 md:mb-20">
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-green-500/20 to-blue-600/20 p-3 md:p-4 rounded-2xl mb-4 md:mb-6 backdrop-blur-sm border border-green-500/20"
          >
            <Phone className="w-6 h-6 md:w-8 md:h-8 text-green-600 dark:text-green-400" />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 md:mb-6 text-center tracking-tight relative"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="relative">
              Contact Me
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
            className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl text-center leading-relaxed px-4"
          >
            Let's connect and discuss opportunities, projects, or just have a conversation about technology
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 backdrop-blur-xl bg-white/80 dark:bg-neutral-900/80 p-8 md:p-10 rounded-3xl shadow-xl border border-neutral-200/50 dark:border-neutral-700/50"
            >
              <h2
                className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Send Me a Message
              </h2>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-green-700 dark:text-green-400 p-6 rounded-2xl mb-8 flex items-start backdrop-blur-sm"
                  >
                    <div className="p-2 bg-green-500/20 rounded-xl mr-4 flex-shrink-0">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-sm opacity-90">
                        Thank you for reaching out. I'll get back to you as soon
                        as possible.
                      </p>
                    </div>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 text-red-700 dark:text-red-400 p-6 rounded-2xl mb-8 flex items-start backdrop-blur-sm"
                  >
                    <div className="p-2 bg-red-500/20 rounded-xl mr-4 flex-shrink-0">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Message Failed</h4>
                      <p className="text-sm opacity-90">{error}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    variants={itemVariants}
                    className="relative group"
                  >
                    <label
                      htmlFor="name"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
                        focusedField === "name" || form.name
                          ? "-top-3 text-sm bg-white dark:bg-neutral-900 px-2 text-blue-600 dark:text-blue-400 font-medium"
                          : "top-4 text-neutral-500 dark:text-neutral-400"
                      }`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 bg-white/60 dark:bg-neutral-800/60 text-neutral-900 dark:text-neutral-100 rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all backdrop-blur-sm group-hover:bg-white/80 dark:group-hover:bg-neutral-800/80 font-jetbrains"
                      required
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="relative group"
                  >
                    <label
                      htmlFor="email"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
                        focusedField === "email" || form.email
                          ? "-top-3 text-sm bg-white dark:bg-neutral-900 px-2 text-blue-600 dark:text-blue-400 font-medium"
                          : "top-4 text-neutral-500 dark:text-neutral-400"
                      }`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 bg-white/60 dark:bg-neutral-800/60 text-neutral-900 dark:text-neutral-100 rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all backdrop-blur-sm group-hover:bg-white/80 dark:group-hover:bg-neutral-800/80 font-jetbrains"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="relative group">
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
                      focusedField === "message" || form.message
                        ? "-top-3 text-sm bg-white dark:bg-neutral-900 px-2 text-blue-600 dark:text-blue-400 font-medium"
                        : "top-4 text-neutral-500 dark:text-neutral-400"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className="w-full px-4 py-4 bg-white/60 dark:bg-neutral-800/60 text-neutral-900 dark:text-neutral-100 rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all backdrop-blur-sm group-hover:bg-white/80 dark:group-hover:bg-neutral-800/80 resize-none font-jetbrains"
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary flex items-center justify-center space-x-3 py-3 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{
                    scale: loading ? 1 : 1.02,
                    y: loading ? 0 : -2,
                  }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  variants={itemVariants}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 space-y-8"
            >
              <div className="backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 p-8 rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50">
                <h3
                  className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      whileHover={{ x: 4 }}
                    >
                      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl text-blue-600 dark:text-blue-400">
                        {item.icon}
                      </div>
                      <div>
                        <h4
                          className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {item.label}
                        </h4>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-neutral-600 dark:text-neutral-400 text-blue-custom-hover transition-colors font-jetbrains"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-neutral-600 dark:text-neutral-400 font-jetbrains">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 p-8 rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50">
                <h3
                  className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Let's Connect
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  Follow me on social media for updates on my latest projects,
                  cybersecurity insights, and tech adventures.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-white/60 dark:bg-neutral-800/60 rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 text-neutral-600 dark:text-neutral-400 ${link.color} transition-all hover:bg-white/80 dark:hover:bg-neutral-700/80 backdrop-blur-sm group`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="group-hover:scale-110 transition-transform block">
                        {link.icon}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-8 rounded-2xl border border-blue-500/20">
                <h3
                  className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Quick Response
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  I typically respond to messages within{" "}
                  <strong>24 hours</strong>. For urgent matters, feel free to
                  reach out via email directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
