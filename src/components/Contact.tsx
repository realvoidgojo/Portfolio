import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  Phone,
  MapPin,
  Check,
  AlertCircle,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
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

    // Create template parameters with fixed email
    const templateParams = {
      from_name: form.name,
      to_name: "Harish",
      reply_to: "dir.harishsivaraman@gmail.com", // Fixed email address
      message: form.message,
    };

    emailjs
      .send(
        "service_n7nmycb",
        "template_phy1zg3",
        templateParams,
        "l0cyQBOYDtcQ3hscB"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result);
          setLoading(false);
          setSuccess(true);
          setForm({
            name: "",
            message: "",
          });

          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        },
        (error) => {
          console.error("FAILED...", error);
          setLoading(false);
          setError(`Failed to send: ${error.text || "Unknown error"}`);
        }
      );
  };

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
            <Mail className="w-8 h-8 text-teal-400" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-4 text-center"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 max-w-2xl text-center"
          >
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              variants={containerVariants}
              className="order-2 md:order-1"
              style={{ pointerEvents: "auto" }}
            >
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Send Me a Message
                </h3>
              
                <AnimatePresence>
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded-lg mb-6 flex items-start"
                    >
                      <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <p>
                        Your message has been sent successfully! I'll get back
                        to you as soon as possible.
                      </p>
                    </motion.div>
                  )}

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-red-500/20 border border-red-500/30 text-red-400 p-4 rounded-lg mb-6 flex items-start"
                    >
                      <AlertCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <p>{error}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  style={{ pointerEvents: "auto" }}
                >
                  <div className="space-y-5">
                    <motion.div
                      variants={itemVariants}
                      className="relative"
                      style={{ pointerEvents: "auto" }}
                    >
                      <label
                        htmlFor="name"
                        className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                          focusedField === "name" || form.name
                            ? "-top-2.5 text-xs bg-gray-800 px-1 text-teal-400"
                            : "top-3 text-gray-400"
                        }`}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name" // This must match your template variable
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-teal-500 transition-colors"
                        required
                        style={{ pointerEvents: "auto" }}
                      />
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="relative"
                      style={{ pointerEvents: "auto" }}
                    >
                      <label
                        htmlFor="message"
                        className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                          focusedField === "message" || form.message
                            ? "-top-2.5 text-xs bg-gray-800 px-1 text-teal-400"
                            : "top-3 text-gray-400"
                        }`}
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message" // This must match your template variable
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                        required
                        style={{ pointerEvents: "auto" }}
                      />
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      style={{ pointerEvents: "auto" }}
                    >
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                        style={{ pointerEvents: "auto" }}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </motion.div>
                  </div>
                </form>

                <motion.div
                  variants={itemVariants}
                  className="mt-6 text-center text-sm text-gray-400 border-t border-gray-700 pt-4"
                  style={{ pointerEvents: "auto" }}
                >
                 
               
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="order-1 md:order-2"
            >
              <motion.div
                variants={itemVariants}
                className="bg-gray-800 p-8 rounded-xl shadow-lg mb-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <motion.div
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <div className="bg-teal-600/20 p-3 rounded-xl mr-4">
                      <Mail className="w-7 h-7 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-lg">Email</h4>
                      <a
                        href="mailto:harishsivaraman@outlook.com"
                        className="text-gray-300 hover:text-teal-400 transition-colors"
                        style={{ pointerEvents: "auto" }}
                      >
                        harishsivaraman@outlook.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <div className="bg-teal-600/20 p-3 rounded-xl mr-4">
                      <Phone className="w-7 h-7 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-lg">Phone</h4>
                      <a
                        href="tel:+918825964873"
                        className="text-gray-300 hover:text-teal-400 transition-colors"
                        style={{ pointerEvents: "auto" }}
                      >
                        +91 88259 64873
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <div className="bg-teal-600/20 p-3 rounded-xl mr-4">
                      <MapPin className="w-7 h-7 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-lg">
                        Location
                      </h4>
                      <p className="text-gray-300">Chennai, India</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-800 p-8 rounded-xl shadow-lg overflow-hidden"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Availability
                </h3>
                <p className="text-gray-300 mb-4">
                  I'm currently available for freelance work and collaborations.
                  My typical response time is within 24 hours.
                </p>
                <div className="relative h-2 bg-gray-700 rounded-full mb-4">
                  <div className="absolute top-0 left-0 h-full w-3/4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
                </div>
                <p className="text-teal-400 font-medium">
                  75% Availability for New Projects
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
