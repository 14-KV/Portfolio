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
      const response = await fetch("https://portfolio-backend-e0wp.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setStatus(result.success ? "Message sent successfully!" : "Failed to send message");
      if (result.success) {
        setFormData({ name: "", email: "", message: "" }); // Reset form after success
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section
      id="contact"
      className="py-12 px-6 text-center text-gray-900 dark:text-white bg-white dark:bg-gray-900 bg-gradient-to-r from-blue-200 to-purple-600 dark:from-gray-900 dark:to-black 
      transition-all duration-700 ease-out transform overflow-hidden"
    >
      <motion.h2
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>
      <p className="mt-4 text-lg">Feel free to reach out for any collaboration or queries.</p>
      
      <div className="mt-8 space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center space-x-3 text-lg"
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
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center items-center space-x-3 text-lg"
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
        className="mt-8 max-w-lg mx-auto bg-purple-300 dark:bg-gray-800 p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
        >
          Send Message
        </button>
        {status && <p className="mt-3 text-white font-semibold">{status}</p>}
      </motion.form>
    </section>
  );
};

export default Contact;

