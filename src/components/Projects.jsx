import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    number: "01",
    title: "Pharmacy Management System",
    category: "Java Application",
    description:
      "A software application designed to manage medicines, stock records, customer information, and pharmacy operations efficiently.",
    technologies: ["Java", "MySQL", "JDBC"],
    github: "https://github.com/saujanya-12/saujanya-12",
  },
  {
    number: "02",
    title: "Healthcare Predictive Analytics",
    category: "Data Analytics",
    description:
      "A healthcare-focused analytics system concept designed to analyze patient-related data and support predictive insights for better decision-making.",
    technologies: ["Python", "Data Analytics", "Machine Learning"],
    github: "https://github.com/saujanya-12/saujanya-12",
  },
  {
    number: "03",
    title: "Student Management System",
    category: "Software Development",
    description:
      "A student information management application for maintaining student records and performing basic academic data operations.",
    technologies: ["Java", "SQL", "DBMS"],
    github: "https://github.com/saujanya-12/saujanya-12",
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-number">04</span>

        <div>
          <p className="section-label">SELECTED WORK</p>

          <h2>
            My <span>Projects.</span>
          </h2>
        </div>
      </motion.div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.number}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
          >
            <div className="project-number">
              <span>{project.number}</span>
            </div>

            <div className="project-main">
              <p className="project-category">{project.category}</p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="project-action">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaGithub />
                <FiArrowUpRight className="project-arrow" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="projects-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>Want to explore more of my work?</p>

        <a
          href="https://github.com/saujanya-12/saujanya-12"
          target="_blank"
          rel="noreferrer"
        >
          Visit my GitHub
          <FiArrowUpRight />
        </a>
      </motion.div>
    </section>
  );
}

export default Projects;