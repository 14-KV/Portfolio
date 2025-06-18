import { motion } from "framer-motion";

const projects = [
  {
    title: "Apni Dukaan – E-commerce Web Application",
    description: [
      "Built using ReactJS and Firebase for product browsing, cart, and secure checkout.",
      "Integrated Google Authentication for streamlined login experience.",
      "Crafted an elegant and responsive UI using Material-UI and CSS.",
    ],
    image: "/images/apni-dukan.jpg",
    github: "https://github.com/14-KV/Ecommerce-app",
  },
  {
    title: "News Web Application",
    description: [
      "Live news app with Redux for state management and categorized APIs.",
      "User-centric design with minimal layout for focused reading.",
      "Seamless integration of latest news across dynamic categories.",
    ],
    image: "/images/news-app.jpg",
    github: "https://github.com/yourusername/news-app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-black transition duration-700"
    >
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
        My Projects
      </h2>
      <p className="text-center max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-12">
        Here are some of the impactful and scalable web applications I’ve developed using modern tech stacks and best UI/UX practices.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 backdrop-blur-md bg-opacity-70 dark:bg-opacity-50 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover rounded-xl shadow-md"
            />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-4">
              {project.title}
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-3 space-y-2 text-sm">
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37...z" />
              </svg>
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
