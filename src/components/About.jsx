import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

function About() {
  return (
    <section className="about section" id="about">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-number">02</span>

        <div>
          <p className="section-label">GET TO KNOW ME</p>
          <h2>
            About <span>Me.</span>
          </h2>
        </div>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>
            Building skills.
            <br />
            Solving problems.
            <br />
            <span>Creating impact.</span>
          </h3>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            I'm <strong>Saujanya Shedbal</strong>, a final-year B.Tech
            Information Technology student and an aspiring Software Engineer.
          </p>

          <p>
            I have a strong interest in software development and problem
            solving. My technical knowledge includes Java, Python, C/C++, SQL,
            Data Structures, Database Management Systems, and Operating Systems.
          </p>

          <p>
            I enjoy learning new technologies and applying programming concepts
            to practical projects. My goal is to grow as a software engineer
            while building reliable and meaningful software solutions.
          </p>

          <a href="#projects" className="about-link">
            Explore my projects
            <FiArrowUpRight />
          </a>
        </motion.div>
      </div>

      <div className="about-stats">
        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h4>Final</h4>
          <p>Year B.Tech IT Student</p>
        </motion.div>

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4>10+</h4>
          <p>Technical Skills</p>
        </motion.div>

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4>03+</h4>
          <p>Academic Projects</p>
        </motion.div>

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4>∞</h4>
          <p>Passion for Learning</p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;