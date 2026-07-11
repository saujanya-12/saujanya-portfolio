import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiCplusplus, SiMysql } from "react-icons/si";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { MdDeveloperBoard } from "react-icons/md";

const skills = [
  {
    name: "Java",
    category: "Programming",
    icon: <FaJava />,
  },
  {
    name: "Python",
    category: "Programming",
    icon: <FaPython />,
  },
  {
    name: "C / C++",
    category: "Programming",
    icon: <SiCplusplus />,
  },
  {
    name: "SQL",
    category: "Database",
    icon: <SiMysql />,
  },
  {
    name: "HTML",
    category: "Web Technology",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    category: "Web Technology",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    category: "Web Technology",
    icon: <FaJs />,
  },
  {
    name: "DBMS",
    category: "Core Subject",
    icon: <HiOutlineCircleStack />,
  },
  {
    name: "Data Structures",
    category: "Core Subject",
    icon: <MdDeveloperBoard />,
  },
  {
    name: "Git",
    category: "Development Tool",
    icon: <FaGitAlt />,
  },
  {
    name: "GitHub",
    category: "Development Tool",
    icon: <FaGithub />,
  },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-number">03</span>

        <div>
          <p className="section-label">WHAT I WORK WITH</p>

          <h2>
            My <span>Skills.</span>
          </h2>
        </div>
      </motion.div>

      <div className="skills-intro">
        <p>
          Technologies and core computer science concepts I'm learning and
          using to build practical software projects.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            whileHover={{ y: -10 }}
          >
            <div className="skill-icon">{skill.icon}</div>

            <div>
              <h3>{skill.name}</h3>
              <p>{skill.category}</p>
            </div>

            <span className="skill-index">
              {String(index + 1).padStart(2, "0")}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;