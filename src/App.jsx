import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [experience, setExperience] = useState({ years: 0, months: 0 });

  useEffect(() => {
    const startDate = new Date("2023-02-01");
    const now = new Date();

    let totalMonths =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    setExperience({ years, months });
  }, []);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const downloadResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1byyYXZLN-E3Wh7b-49mnnmI9Gt53tkE0/view?usp=drive_link";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div
      className={`min-h-screen font-[Poppins] transition-colors duration-300 ${
        darkMode
          ? "dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-white via-blue-50 to-purple-100"
      }`}
    >
      {/* Navigation */}
      <nav className="flex justify-end items-center p-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-1 text-2xl transition-all duration-300 hover:scale-110`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Hero Section */}
      <section
        className={`text-center py-20 px-4 md:px-0 ${
          darkMode ? "bg-gray-800" : "bg-white"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Bittu Pathania
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`mt-6 text-xl md:text-2xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Frontend Developer | React Enthusiast
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
      <section className="max-w-4xl mx-auto py-20 px-6">
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
              <span className="text-pink-400 font-semibold">Bootstrap CSS</span>.
              I specialize in building responsive and scalable web applications,
              optimizing performance, and implementing intuitive UI/UX designs.
              I have experience integrating RESTful APIs, maintaining clean and
              modular code, and collaborating with cross-functional teams to
              deliver high-quality products efficiently.
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
                  <span className="text-blue-400">Geekster</span>
                </li>
                <li>
                  ✅ Frontend Specialization –{" "}
                  <span className="text-purple-400">React & Redux & JWT Token</span>
                </li>
              </ul>
            </div>
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
            { name: "React", icon: "⚛️" },
            { name: "Redux Toolkit", icon: "🔄" },
            { name: "JavaScript", icon: "📜" },
            { name: "Tailwind CSS", icon: "🎨" },
            { name: "Firebase", icon: "🔥" },
            { name: "Git", icon: "🐙" },
            { name: "GitHub", icon: "💻" },
            { name: "HTML5", icon: "🖊️" },
            { name: "CSS3", icon: "🎀" },
            { name: "Node.js", icon: "🟢" },
            { name: "MongoDB", icon: "🍃" },
            { name: "Excel", icon: "📊" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl shadow-lg flex flex-col items-center ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <span className="text-3xl mb-2">{skill.icon}</span>
              <h3
                className={`font-bold text-lg ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        className={`py-20 px-6 text-center ${
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
        className={`py-6 text-center ${
          darkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-600"
        }`}
      >
        <p>© {new Date().getFullYear()} Bittu Pathania. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
