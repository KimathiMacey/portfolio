import { motion } from "framer-motion";
import profilePic from "../assets/me.jpg";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        <img
          src={profilePic}
          alt="My Profile"
          className="profile-pic"
        />

        {/* Text Section */}
        <div className="hero-content">
          <h2>Hi, I'm Macey Kimathi</h2>
          <p>
            I'm a passionate developer who loves building interactive, animated,
            and modern web experiences.
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="skills-section"
      >
        <h2 className="skills-title">Skills & Expertise</h2>
        <ul className="skills-list">
          <li className="skill-item">JavaScript</li>
          <li className="skill-item">React & Next.js</li>
          <li className="skill-item">Node.js & Express</li>
          <li className="skill-item">MySQL</li>
          <li className="skill-item">API Integration</li>
          <li className="skill-item">Git & GitHub</li>
        </ul>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="experience-section"
      >
        <h2 className="experience-title">Experience</h2>
        <div className="experience-list">
          <div className="experience-item">
            <h3 className="experience-role">Full-Stack Developer</h3>
            <p className="experience-desc">
              Worked on dynamic web applications, focusing on backend APIs and
              modern frontend experiences.
            </p>
          </div>
          <div className="experience-item">
            <h3 className="experience-role">Open Source Contributor</h3>
            <p className="experience-desc">
              Contributed to community-driven projects, improving documentation
              and fixing UI bugs.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Hobbies Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="hobbies-section"
      >
        <h2 className="hobbies-title">Beyond Coding</h2>
        <p className="hobbies-text">
          When I'm not coding, I enjoy exploring new tech trends, photography,
          and traveling to experience different cultures. I believe creativity
          outside of tech fuels innovation inside of it.
        </p>
      </motion.section>
    </div>
  );
}
