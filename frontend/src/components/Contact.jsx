import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setStatus(result.success ? "Message sent successfully!" : "Failed to send message");
      if (result.success) {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-black transition duration-700"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-black dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let's Connect
      </motion.h2>

      <p className="mt-4 text-center text-lg text-gray-700 dark:text-gray-300">
        Whether it's a question, opportunity, or just a hello — I’d love to hear from you!
      </p>

      <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center space-x-3 text-lg"
        >
          <FaEnvelope className="text-red-600 dark:text-red-400" size={24} />
          <a
            href="mailto:khushi.verma.14.05.2004@gmail.com"
            className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            khushi@iitbhu.ac.in
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center space-x-3 text-lg"
        >
          <FaLinkedin className="text-blue-600 dark:text-blue-400" size={24} />
          <a
            href="https://linkedin.com/in/khushi-verma-iitbhu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            LinkedIn Profile
          </a>
        </motion.div>
      </div>

      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        onSubmit={handleSubmit}
        className="mt-12 mx-auto max-w-xl bg-white/30 dark:bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg"
      >
        <h3 className="text-2xl font-semibold text-center text-purple-800 dark:text-purple-300 mb-6">
          Send Me a Message
        </h3>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all"
        >
          Send Message
        </button>

        {status && <p className="mt-4 text-center font-medium">{status}</p>}
      </motion.form>
    </section>
  );
};

export default Contact;
