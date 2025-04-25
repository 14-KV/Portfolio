import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-gray-200 dark:bg-gray-800 py-4 px-6 flex justify-between items-center bg-gradient-to-r from-blue-2z00 to-purple-600 dark:from-gray-900 dark:to-black 
        transition-all duration-700 ease-out transform overflow-hidden px-8">
      {/* Social Links - Centered */}
      <div className="flex-1 flex space-x-8">
        <a href="https://www.linkedin.com/in/khushi-verma-iitbhu/" target="_blank" rel="noopener noreferrer" 
           className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
          <FaLinkedin size={24} />
          <span className="font-bold">Follow on LinkedIn</span>
        </a>

        <a href="https://github.com/14-KV" target="_blank" rel="noopener noreferrer" 
           className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
          <FaGithub size={24} />
          <span className="font-bold">Follow on GitHub</span>
        </a>

        <a href="mailto:khushi.verma.14.05.2004@gmail.com" 
           className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400">
          <MdEmail size={24} />
          <span className="font-bold">Khushi@iitbhu.ac.in</span>
        </a>
      </div>

      {/* Copyright - Right aligned */}
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        © 2025 Spencer Sharp. All rights reserved.
      </p>
    </footer>
  );
}
