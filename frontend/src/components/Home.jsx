import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import profileImage from "/images/profile.png"; // Ensure correct path
import { Link } from "react-router-dom";

export default function Home() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 px-6 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-black transition duration-700"
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Profile Image */}
        <div className="mb-10 md:mb-0 md:mr-16">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-teal-500 shadow-xl hover:scale-105 transition duration-300">
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text Content */}
        <div
          className={`transition-all duration-700 ease-out max-w-2xl ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-400 dark:to-purple-400 bg-clip-text text-transparent">
            Hi! I'm Khushi
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mt-4 text-gray-800 dark:text-gray-300">
            <TypeAnimation
              sequence={[
                'Developer 🚀',
                2000,
                'Software Engineer 💻',
                2000,
                'Tech Enthusiast 🤖',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            I’m an upcoming <span className="font-semibold text-teal-600 dark:text-teal-400">Solutions Engineer at FICO</span>, where I combine software engineering and data analytics to craft innovative financial systems. I'm also passionate about game engines like Unreal Engine, exploring next-gen simulations and interactive experiences.
          </p>

          {/* Call to Action */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-purple-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Download Resume
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-teal-500 dark:border-teal-400 text-teal-700 dark:text-teal-300 rounded-xl font-medium hover:bg-teal-50 dark:hover:bg-teal-800 transition-all"
            >
              Let’s Connect
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 animate-bounce">
        <span className="text-xl">↓</span>
      </div>
    </section>
  );
}
