import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full z-10 bg-gray-200 dark:bg-gray-800 py-4 px-6 transition-all duration-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
        
        {/* Social Links */}
        <div className="flex space-x-6 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/khushi-verma-iitbhu/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin size={20} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>

          <a
            href="https://github.com/14-KV"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
          >
            <FaGithub size={20} />
            <span className="text-sm font-medium">GitHub</span>
          </a>

          <a
            href="mailto:khushi.verma.14.05.2004@gmail.com"
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition"
          >
            <MdEmail size={20} />
            <span className="text-sm font-medium">Khushi@iitbhu.ac.in</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-right">
          © 2025 Khushi Verma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
