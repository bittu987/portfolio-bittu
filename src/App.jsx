import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiFirebase } from "react-icons/si";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [experience, setExperience] = useState({ years: 0, months: 0 });

  useEffect(() => {
    const startDate = new Date("2022-02-01");
    const now = new Date();

    let totalMonths =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    setExperience({ years, months });
  }, []);

  // useEffect(() => {
  //   if (
  //     window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ) {
  //     setDarkMode(true);
  //   }
  // }, []);

  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", darkMode);
  // }, [darkMode]);

  const downloadResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1byyYXZLN-E3Wh7b-49mnnmI9Gt53tkE0/view?usp=sharing";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div
    className={`min-h-screen font-[Poppins] transition-colors duration-700 ease-in-out ${
      darkMode
        ? "bg-[linear-gradient(90deg,_rgba(2,0,36,1)_0%,_rgba(50,50,51,1)_35%,_rgba(35,97,111,1)_54%,_rgba(28,120,139,1)_63%,_rgba(63,66,66,1)_73%,_rgba(0,212,255,1)_100%)]"
        : "bg-gradient-to-br from-[#ffffff] via-[#f0f4ff] to-[#d0e0ff]"
    }`}
    >
      {/* Navigation */}
      <nav className="flex justify-end items-center p-2">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-1 text-2xl transition-all duration-300 hover:scale-110 hidden`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>
      <section className="py-4">
  <Marquee
    gradient={false}
    speed={50}
    className={`text-lg font-semibold ${
      darkMode ? "text-gray-200" : "text-[#36454F]"
    }`}
  >
    <div className="flex gap-10 items-center">
      <span className="flex items-center gap-2">
        <FaHtml5 className="text-orange-600" /> HTML5
      </span>
      <span className="flex items-center gap-2">
        <FaCss3Alt className="text-blue-600" /> CSS3
      </span>
      <span className="flex items-center gap-2">
        <FaJs className="text-yellow-400" /> JavaScript
      </span>
      <span className="flex items-center gap-2">
        <FaReact className="text-cyan-400" /> React.js
      </span>
      <span className="flex items-center gap-2">
        <SiRedux className="text-purple-600" /> Redux Toolkit
      </span>
      <span className="flex items-center gap-2">
        <SiTailwindcss className="text-cyan-500" /> Tailwind CSS
      </span>
      <span className="flex items-center gap-2">
        <SiFirebase className="text-yellow-500" /> Firebase
      </span>
      <span className="flex items-center gap-2">
        <FaGitAlt className="text-red-600" /> Git
      </span>
      <span className="flex items-center gap-2">
        <FaGithub className="text-yellow-500" /> GitHub
      </span>
      <span className="flex items-center gap-2">
        <FaNodeJs className="text-green-600" /> Node.js
      </span>
      <span className="flex items-center gap-2">
        📊 Excel
      </span>
      <span className="flex items-center gap-2">
      </span>
    </div>
  </Marquee>
</section>
   
      

      {/* Hero Section */}
      <section
        className={`text-center py-20 px-4 md:px-0 ${
          darkMode ? "bg-gradient-to-r from-[#00C9FF] to-[#0c0c0c]" : "bg-white"
        } shadow-md rounded-b-3xl`}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className={`text-4xl md:text-6xl font-extrabold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Hi, I'm{" "}
            <span
  className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#00C9FF] via-[#92FE9D] to-[#00C9FF] bg-[length:200%_200%] animate-textShine transition-all duration-300  hover:drop-shadow-[0_0_10px_#92FE9D] hover:brightness-125"
>
  Bittu Pathania
</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`mt-6 text-xl md:text-3xl ${
              darkMode ? "text-white" : "text-gray-600"
            }`}
          >
            Software Developer | React Enthusiast
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Download Resume
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2
            className={`text-4xl font-bold mb-6 text-center ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Me
            </span>
          </h2>
          <div
            className={`p-8 rounded-xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <p
              className={`text-xl font-medium leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold">
                Frontend Developer
              </span>{" "}
              with{" "}
              <strong>
                {experience.years} year{experience.years !== 1 ? "s" : ""}
                {experience.months > 0
                  ? ` and ${experience.months} month${
                      experience.months !== 1 ? "s" : ""
                    }`
                  : ""}
              </strong>{" "}
              of experience at <strong>Keryx Retail Solution</strong>. I work
              with modern tech like
              <span className="text-blue-400 font-semibold"> React</span>,{" "}
              <span className="text-purple-400 font-semibold">
                Redux Toolkit
              </span>
              , and{" "}
              <span className="text-pink-400 font-semibold">Bootstrap CSS</span>
              . I specialize in building responsive and scalable web
              applications, optimizing performance, and implementing intuitive
              UI/UX designs. I have experience integrating RESTful APIs,
              maintaining clean and modular code, and collaborating with
              cross-functional teams to deliver high-quality products
              efficiently.
            </p>
            <p
            className={`mt-4 text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
               }`}
            >
                    📍 <strong>Location:</strong> Currently based in <strong>New Delhi</strong>, originally from <strong>Uttarakhand</strong>.
            </p>
            <p
              className={`mt-4 text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Outside of coding, I explore new tech, contribute to open-source,
              and enjoy sharing knowledge with developers.
            </p>

            <div className="mt-8">
              <h3
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                🎓 Education
              </h3>
              <ul
                className={`space-y-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <li>
                  <strong>MCA</strong> – Master of Computer Applications
                </li>
                <li>
                  <strong>BCA</strong> – Bachelor of Computer Applications
                </li>
                <li>
                  <strong>12th (Science Stream)</strong>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                📜 Certifications
              </h3>
              <ul
                className={`space-y-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <li>
                  ✅ Full Stack Developer –{" "}
                  <a href="https://www.geekster.in/" target="_blank">
                  <span className="text-blue-400">Geekster (Tech School)</span>
                  </a>
                  
                </li>
                <li>
                  ✅ Frontend Specialization –{" "}                 
                  <span  className="text-purple-400">
                    ReactJS
                  </span>                 
                </li>
              </ul>
            </div>
            <p>
          
        </p>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2
          className={`text-4xl font-bold mb-10 text-center ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Tech Stack
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {[
    { url: "https://react.dev/", name: "React", icon: "⚛️" },
    { url: "https://redux-toolkit.js.org/", name: "Redux Toolkit", icon: <SiRedux className="text-purple-600" /> },
    {url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    {url: "https://tailwindcss.com/", name: "Tailwind CSS", icon: "🎨" },
    {url: "https://firebase.google.com/docs", name: "Firebase", icon: "🔥" },
    {url: "https://git-scm.com/doc", name: "Git", icon: <FaGitAlt className="text-red-600" /> },
    {url: "https://docs.github.com/en", name: "GitHub", icon: <FaGithub className="text-yellow-500" />},
    {url: "https://developer.mozilla.org/en-US/docs/Web/HTML", name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    {url: "https://developer.mozilla.org/en-US/docs/Web/CSS", name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />},
    {url: "https://nodejs.org/docs/latest/api/", name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    {url: "https://www.mongodb.com/docs/", name: "MongoDB", icon: "🍃" },
    {url: "https://www.customguide.com/cheat-sheet/excel-cheat-sheet.pdf", name: "Excel", icon: "📊" },
  ].map((skill, index) => {
    const content = (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`p-6 rounded-xl shadow-lg flex flex-col items-center transition-all duration-300 ease-in-out ${
          darkMode
            ? "bg-gray-800 hover:shadow-[0_0_20px_#60a5fa] hover:bg-gradient-to-r hover:from-gray-800 hover:via-gray-700 hover:to-gray-800"
            : "bg-white hover:shadow-[0_0_20px_#6366f1] hover:bg-gradient-to-r hover:from-white hover:via-purple-100 hover:to-white"
        }`}
      >
        <span className="text-3xl mb-2">{skill.icon}</span>
        <h3
          className={`font-bold text-lg transition-colors ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {skill.name}
        </h3>
      </motion.div>
    );

    return skill.url ? (
      <a
        key={index}
        href={skill.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    ) : (
      content
    );
  })}
</div>

      </section>

      {/* Contact Section */}
      <section
        className={`py-4 px-6 text-center ${
          darkMode ? "bg-gray-900" : "bg-gray-800"
        } rounded-t-3xl`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Connect
            </span>
          </h2>
          <div className="max-w-md mx-auto space-y-4 text-gray-300">
            <p className="flex items-center justify-center gap-2">
              📧{" "}
              <a
                href="mailto:bittupathania234@gmail.com"
                className="hover:text-white"
              >
                bittupathania234@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              💻{" "}
              <a
                href="https://github.com/bittu987"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                github.com/bittu987
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              🔗{" "}
              <a
                href="https://linkedin.com/in/bittu2816"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                linkedin.com/in/bittu2816
              </a>
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Download Resume
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        className={`py-4 text-center ${
          darkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-600"
        }`}
      >
        <p>© {new Date().getFullYear()} Bittu Pathania. Crafted with ❤️</p>
      </footer>
    </div>
  );
}

export default App;
