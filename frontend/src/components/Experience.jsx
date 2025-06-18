import { motion } from "framer-motion";
import { FaCloud, FaIndustry, FaUsers } from "react-icons/fa";

const experiences = [
  {
    icon: <FaCloud className="text-white text-3xl" />,
    title: "Upcoming Solutions Engineer",
    company: "FICO",
    duration: "July 2025 Onwards | Bangalore, Karnataka",
    description: [
      "Focused on developing and optimizing cloud-based applications for enterprise solutions.",
      "Collaborating with teams to improve scalability, integration, and performance of cloud applications.",
    ],
    bg: "bg-blue-600",
  },
  {
    icon: <FaIndustry className="text-white text-3xl" />,
    title: "Industrial Process Optimization",
    company: "Jindal Steel and Power Limited | Coke Oven Byproduct",
    duration: "May 2024 – July 2024",
    description: [
      "Conducted data-driven analysis of industrial processes and interpreted flow diagrams to enhance treatment efficiency.",
      "Applied electrocoagulation and granular filtration techniques to improve separation performance.",
      "Performed centrifugation studies to assess separation efficiency at varying operational parameters.",
      "Achieved an 85.7% reduction in oil and grease content, improving scrubber efficiency and reducing equipment fouling.",
    ],
    bg: "bg-teal-500",
  },
  {
    icon: <FaUsers className="text-white text-3xl" />,
    title: "Co-Convenor, COMET",
    company: "Mechanical Engineering Society, IIT BHU",
    duration: "July 2024 – Jan 2025",
    description: [
      "Co-led COMET, the flagship fest of the Mechanical Engineering Society, coordinating with 200+ members to enhance student, faculty, and alumni engagement.",
      "Organized impactful events, fostering collaboration and engagement among 100+ new students while strengthening department interactions.",
    ],
    bg: "bg-yellow-500",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-black transition duration-700">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="flex items-start gap-6"
            >
              {/* Icon with background */}
              <div className={`min-w-[60px] h-[60px] rounded-full flex items-center justify-center ${exp.bg} shadow-lg`}>
                {exp.icon}
              </div>

              {/* Right content */}
              <div className="flex-1 border-l-2 border-gray-300 dark:border-gray-700 pl-6">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</p>
                <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">{exp.duration}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
