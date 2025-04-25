import { motion } from "framer-motion";

const projects = [
  {
    title: "Apni Dukaan – E-commerce Web Application",
    description: [
      "Developed a full-stack e-commerce platform using ReactJS and Firebase, enabling users to browse products, add them to the cart, and complete secure checkouts.",
      "Implemented Google authentication with Firebase, ensuring a seamless login and account management experience.",
      "Designed a highly responsive and intuitive UI using Material-UI and CSS, optimizing user engagement.",
    ],
    image: "/images/apni-dukan.jpg", // Update with your actual image path
    github: "https://github.com/14-KV/Ecommerce-app",
  },
  {
    title: "News Web Application",
    description: [
      "Built a real-time news web application that integrates Redux for efficient state management and API handling.",
      "Fetched and displayed news dynamically across different categories, ensuring users stay updated with the latest headlines.",
      "Designed a clean and minimalistic UI, focusing on readability and user experience.",
    ],
    image: "/images/news-app.jpg", // Update with your actual image path
    github: "https://github.com/yourusername/news-app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-10 px-6 text-gray-900 dark:text-white bg-white dark:bg-gray-900 bg-gradient-to-r from-blue-200 to-purple-600 dark:from-gray-900 dark:to-black 
      transition-all duration-700 ease-out transform overflow-hidden px-8"
    >
      <h2 className="text-3xl font-semibold text-center">Projects</h2>
      <h3 className="text-lg text-center max-w-3xl mx-auto mt-3">
        I have a deep understanding of frontend technologies and have developed scalable, efficient, and user-centric web applications that focus on seamless performance and intuitive design.
      </h3>
      
      <div className="mt-6 space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="flex flex-col md:flex-row items-center bg-purple-300 dark:bg-gray-800 shadow-md rounded-lg p-6 gap-6"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/3 rounded-lg shadow-lg"
            />

            {/* Project Details */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {project.description.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">•</span> {point}
                  </li>
                ))}
              </ul>

              {/* GitHub Button */}
              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center px-3 py-1.5 border border-blue-600 dark:border-blue-400 
                          text-blue-600 dark:text-blue-400 font-medium rounded-md hover:bg-blue-600 
                          hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.113.793-.26.793-.577v-2.234c-3.338.726-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.49.998.107-.774.42-1.305.763-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.304-.535-1.527.117-3.182 0 0 1.008-.323 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.047.137 3 .405 2.29-1.554 3.295-1.23 3.295-1.23.655 1.655.243 2.878.12 3.182.77.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.19.695.8.575C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
