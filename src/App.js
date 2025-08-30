import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll to top on page refresh/load
    window.scrollTo(0, 0);
    // Set hash to empty to remove any anchor from URL
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white/30 backdrop-blur-md shadow fixed top-0 left-0 w-full z-10">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.replaceState(null, '', window.location.pathname);
      }} 
      className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition"
    >
      My Portfolio
    </h1>

    {/* Desktop Menu */}
    <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
      <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
      <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
      <li><a href="#skills" className="hover:text-blue-600 transition">Skills</a></li>
      <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
    </ul>

    {/* Mobile Hamburger */}
    <button
      className="md:hidden text-gray-700 focus:outline-none"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
        fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <motion.ul
      className="md:hidden bg-white/90 backdrop-blur-md shadow-lg flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
      <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
      <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
      <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
    </motion.ul>
  )}
</nav>


      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 text-center overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-200"></div>

        {/* Blurred circle decorations */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        {/* Content with animation */}
        <div className="relative px-6">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I’m Bikash
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 max-w-xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Web Developer passionate about building clean, modern, and scalable apps.
          </motion.p>

          <motion.a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </div>
      </section>



      {/* About Section */}
      <section id="about" className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <motion.h2
      className="text-3xl font-bold mb-6 text-gray-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      About Me
    </motion.h2>

    <motion.p
      className="text-gray-600 leading-relaxed"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      viewport={{ once: true }}
    >
      I’m Bikash, a developer who loves creating elegant full-stack applications.
    </motion.p>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <motion.h2
      className="text-3xl font-bold text-center mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Projects
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-8">
      {["Resume Maker App", "Portfolio Website"].map((title, i) => (
        <motion.div
          key={i}
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">
            {title === "Resume Maker App"
              ? "A MERN stack app that allows users to create and download resumes as PDF."
              : "A personal website built with React and Tailwind CSS to showcase my work."}
          </p>
          <a href="#" className="text-blue-600 hover:underline">View Project</a>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <motion.h2
      className="text-3xl font-bold mb-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Skills
    </motion.h2>

    <div className="flex flex-wrap justify-center gap-3">
      {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "GitHub"].map((skill, i) => (
        <motion.span
          key={skill}
          className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full shadow-sm cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ 
            scale: 1.1, 
            rotate: 3,
            backgroundColor: "#EEF2FF",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ 
            duration: 0.2,
            initial: { delay: i * 0.1, duration: 0.5 }
          }}
          viewport={{ once: true }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
  <div className="max-w-4xl mx-auto px-6 text-center bg-white p-10 rounded-lg shadow">
    <motion.h2
      className="text-3xl font-bold mb-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Contact
    </motion.h2>

    <motion.p
      className="text-gray-600 mb-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      viewport={{ once: true }}
    >
      Let’s connect! You can reach me via email or check my socials.
    </motion.p>

    <motion.a
      href="mailto:youremail@example.com"
      className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Email Me
    </motion.a>
  </div>
</section>


      <footer className="bg-white py-6 text-center text-gray-500">
        © {new Date().getFullYear()} Bikash Pradhan. All rights reserved.
      </footer>



    </div>
  );
}

export default App;
