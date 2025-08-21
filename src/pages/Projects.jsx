import { useState } from "react";
import { motion } from "framer-motion";


export default function Projects() {
  const [projects] = useState([
    { title: "Candy Shop Website", desc: "A sleek family business website with one simple goal: to make life a little sweeter." },
    { title: "Patient Symptoms Diagnostics System", desc: "Assist Patients to get information about what is ailing them through an online sign and symptoms diagnostic check, utilizing both the Doctors knowledge and the software to make a better analysis of the Patient’s data and giving out up to date information of their illness. " },
    { title: "Project Task Tracker", desc: " Helps you stay organized by allowing you to create, prioritize, and manage tasks effortlessly." },
  ]);

  return (
    <motion.div
      className="min-h-screen px-6 py-12 bg-gray-900 text-white"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="projects-header">Projects</h1>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
