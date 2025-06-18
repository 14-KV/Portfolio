import { motion } from "framer-motion";
import { FaUserAlt, FaGraduationCap, FaTools } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-black transition duration-700"
    >
      <h2 className="text-4xl font-bold text-center mb-8 tracking-tight text-gray-900 dark:text-white">
        About Me
      </h2>
      <p className="text-center text-lg md:text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-16 leading-relaxed">
        I blend modern web technologies with real-world engineering insights to craft scalable, intelligent, and elegant solutions.
      </p>

      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
        {/* Card 1 - Who Am I */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition"
        >
          <div className="flex items-center gap-3 mb-6 text-teal-600 dark:text-purple-400">
            <FaUserAlt className="text-lg" />
            <h3 className="text-2xl font-semibold tracking-tight">Who Am I?</h3>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
            I’m a multidisciplinary engineer passionate about building elegant software systems. I bring together design thinking, algorithms, and real-world engineering knowledge to create meaningful digital experiences.
          </p>
          <ul className="text-sm text-gray-800 dark:text-gray-300 space-y-1 list-disc list-inside">
            <li>Efficient linked list & BST operations</li>
            <li>2D grid algorithms & optimization</li>
            <li>Clean UI/UX integration</li>
            <li>Systemic thinking + code elegance</li>
          </ul>
        </motion.div>

        {/* Card 2 - Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition"
        >
          <div className="flex items-center gap-3 mb-6 text-teal-600 dark:text-purple-400">
            <FaGraduationCap className="text-lg" />
            <h3 className="text-2xl font-semibold tracking-tight">Education</h3>
          </div>
          <ul className="text-sm md:text-base text-gray-800 dark:text-gray-300 space-y-2 mb-4">
            <li>🎓 Senior Secondary – RLB School (2021) </li>
            <li>📘<strong>96.8% PCM</strong></li>
            <li>🎓 B.Tech – Mechanical Engineering, IIT (2021–2025)</li>
            <li>📘 CPI: <strong>8.89</strong></li>
          </ul>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 font-medium">Core Focus Areas:</p>
          <ul className="list-disc list-inside text-sm text-gray-800 dark:text-gray-300 mt-2 space-y-1">
            <li>Computational Fluid Dynamics (CFD)</li>
            <li>Finite Element Analysis (FEA)</li>
            <li>Product Design & Manufacturing</li>
            <li>Automation & Controls</li>
          </ul>
        </motion.div>

        {/* Card 3 - Skills & Interests */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition"
        >
          <div className="flex items-center gap-3 mb-6 text-teal-600 dark:text-purple-400">
            <FaTools className="text-lg" />
            <h3 className="text-2xl font-semibold tracking-tight">Skills & Interests</h3>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "React", "Node.js", "MongoDB", "Firebase", "Express",
              "DSA", "OOP", "UI/UX", "Automation",
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-gradient-to-r from-teal-500 to-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm hover:scale-105 transition transform"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
            I enjoy using engineering logic to solve real-world problems — whether it's full-stack development or dynamic mechanical modeling, I strive to combine creativity with technical precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
