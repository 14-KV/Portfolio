import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 px-6 text-gray-900 dark:text-white bg-white dark:bg-gray-900 bg-gradient-to-r from-blue-200 to-purple-600 dark:from-gray-900 dark:to-black
        transition-all duration-700 ease-out transform overflow-hidden px-8"
    >
      <h2 className="text-3xl font-semibold text-center">About Me</h2>

      <div className="max-w-6xl mx-auto mt-10 flex flex-wrap gap-6">
        {/* 🟢 Card 1 - About Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-purple-300 dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full"
        >
          <h3 className="text-xl font-semibold mb-2">Who Am I?</h3>
          <p className="text-gray-700 dark:text-gray-300">
          I am a highly motivated engineer with a strong background in software development, mechanical design, and industrial process optimization. My expertise lies in developing innovative solutions by integrating engineering principles with cutting-edge technology. With experience in both frontend development and industrial engineering, I am adept at solving complex problems through analytical thinking, data-driven decision-making, and hands-on technical implementation.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-3">
          Analytical & Problem-Solving Skills
          With a strong grasp of algorithms, data structures, and computational problem-solving, I have worked on various challenges, including:
          </p>
          <ul>
          <li className="mt-1 font-semibold">Linked list algorithms for efficient data manipulation.</li>
          <li className="mt-1 font-semibold">Binary search tree (BST) optimization for faster node operations.</li>
          <li className="mt-1 font-semibold">Grid-based algorithms to solve problems related to sub-island detection</li>
          My ability to apply engineering principles to software and industrial problems gives me a unique perspective on system optimization and process improvement.
          </ul>
          
        </motion.div>

        {/* 🔵 Card 2 - Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-purple-300 dark:bg-gray-800  p-6 rounded-lg shadow-lg w-full"
        >
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <p className="text-gray-700 dark:text-gray-300">
            🎓 Senior Secondary Education RLB School, 2020-2021 <br />
            🎓 Secured 96.8% in PCM Stream 
          </p>
          <br />

            <ul className="text-gray-700 dark:text-gray-300 mt-3">
            <li/>🎓 Bachelor of Technology (B.Tech) in Mechanical Engineering
            <li/>🎓[Indian Institute Of Technology] | [2021-2025]
            <li/>🎓CPI: 8.77
            <li/>🎓During my undergraduate studies in Mechanical Engineering, I developed a strong understanding of thermodynamics, fluid mechanics, heat transfer, and manufacturing processes. My coursework included subjects such as:

            <li/>🎓Computational Fluid Dynamics (CFD) – Applied CFD principles to analyze airflow and optimize aerodynamic shapes.
            <li/>🎓Finite Element Analysis (FEA) – Gained hands-on experience in structural analysis and material behavior under various loading conditions.
            <li/>🎓Machine Design & Manufacturing – Studied design principles for mechanical components and explored modern manufacturing techniques.
            <li/>🎓Industrial Automation & Control – Developed an understanding of automation technologies and process control mechanisms.
            </ul>
          
        </motion.div>

        {/* 🟣 Card 3 - Skills & Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-purple-300 dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full"
        >
          <h3 className="text-xl font-semibold mb-2">Skills & Interests</h3>
          <ul className="flex flex-wrap gap-2 mt-2">
            {["Problem Solving", "Web Development", "DSA", "OOP", "React", "Cloud"].map(
              (skill, index) => (
                <motion.li
                  key={index}
                  className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.li>
              )
            )}
          </ul>
          <p className="text-gray-700 dark:text-gray-300 mt-3">
          My diverse skill set across software development, industrial process optimization, and mechanical engineering enables me to tackle complex problems with a structured and analytical approach. I am always eager to explore new technologies, contribute to impactful projects, and refine my expertise in engineering-driven innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
