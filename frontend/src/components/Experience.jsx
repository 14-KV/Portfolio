import { motion } from "framer-motion";

const experiences = [
  {
    title: "Industrial Process Optimization",
    company: "Jindal Steel and Power Limited| Coke Oven Byproduct",
    duration: "May 2024-July 2024",
    description: [
      "Conducted data-driven analysis of industrial processes and interpreted flow diagrams to enhance treatment efficiency.",
      "Applied electrocoagulation and granular filtration techniques to improve separation performance.",
      "Performed centrifugation studies to assess separation efficiency at varying operational parameters.",
      "Achieved an 85.7% reduction in oil and grease content, improving scrubber efficiency and reducing equipment fouling."
    ],
  },
  {
    title: "Co-Convenor, COMET",
    company: "Mechanical Engineering Society, IIT BHU",
    duration: "July 2024-Jan 2025",
    description: [
      "Co-led COMET, the flagship fest of the Mechanical Engineering Society, coordinating with 200+ members to enhance student, faculty, and alumni engagement.",
      "Organized impactful events, fostering collaboration and engagement among 100+ new students while strengthening department interactions."
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-10 px-6 bg-gradient-to-r from-blue-200 to-purple-600 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white">
      <h2 className="text-3xl font-semibold text-center mb-8">Work Experience</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-purple-300 dark:bg-gray-800 shadow-lg rounded-lg p-6 border-l-4 border-blue-600 dark:border-blue-400"
          >
            <div className="absolute left-[-10px] top-4 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{exp.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{exp.company} | {exp.duration}</p>
            <ul className="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
              {exp.description.map((point, idx) => (
                <li key={idx} className="mt-1">{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
