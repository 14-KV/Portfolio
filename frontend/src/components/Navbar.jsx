import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "./logo.png"; // Correct import of the logo

const navigation = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" // Load theme from localStorage
  );

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md bg-opacity-90 bg-gradient-to-r from-blue-200 to-purple-600 dark:from-gray-900 dark:to-black 
        transition-all duration-700 ease-out transform overflow-hidden px-8">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          
          {/* Logo as a Link to Home */}
          <Link to="/" className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-10 w-auto border-2 border-pink-500 rounded-md shadow-[0_0_10px] shadow-pink-500" />

          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="text-gray-700 dark:text-gray-200 font-bold hover:text-gray-900 dark:hover:text-gray-400"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          </button>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-700 dark:text-gray-200">
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="block px-4 py-2 text-gray-700 dark:text-gray-200 font-bold hover:text-gray-900 dark:hover:text-gray-400"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
