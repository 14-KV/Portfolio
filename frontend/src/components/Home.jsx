import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [text, setText] = useState("Developer 🚀");
  const words = ["Developer 🚀", "Coder 💻", "Tech Enthusiast 🤖"];
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => {
        const nextIndex = (words.indexOf(prevText) + 1) % words.length;
        return words[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for fade-in effect
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
      className="relative h-screen flex justify-center items-center px-8 bg-[url(/images/background2.jpg)] dark:bg-[url('/images/background.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="flex items-center gap-x-12">
        

        {/* Main Content */}
        <div
          className={`transition-transform duration-700 ease-out text-black 
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <h1 className="text-4xl font-extrabold">Hi! I'm Khushi </h1>
          <h2 className="text-2xl font-semibold mt-2">{text}</h2>
          <h3 className="font-bold" style={{ textAlign: "justify" }}>I am an upcoming Solution Engineer at FICO, where I aim to leverage my expertise in software engineering, data analytics, and problem-solving to contribute to the development of innovative financial solutions. Additionally, I am keen on expanding my knowledge of game engines, particularly Unreal Engine, to explore its applications in simulation and interactive experiences.</h3>
        </div>
      </div>
    </section>
  );
}
