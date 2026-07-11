import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const education = [
  {
    level: "Bachelor of Technology",
    field: "Information Technology",
    institution: "Your College Name",
    description:
      "Final-year B.Tech Information Technology student focused on software development, programming, databases, data structures, and core computer science concepts.",
  },
  {
    level: "Higher Secondary Education",
    field: "HSC",
    institution: "Hanuman Vidyamandir, Marawade",
    description:
      "Completed higher secondary education and developed a foundation for engineering and technical studies.",
  },
  {
    level: "Secondary Education",
    field: "SSC",
    institution: "Your School Name",
    description:
      "Completed secondary education with a strong academic foundation.",
  },
];

const certifications = [
  {
    title: "Java Stack Technology",
    provider: "Infosys Springboard",
    type: "Technical Certification",
  },
  {
    title: "Programming & Software Development",
    provider: "Academic Learning",
    type: "Technical Skills",
  },
];

function Education() {
  return (
    <section className="education section" id="education">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-number">05</span>

        <div>
          <p className="section-label">MY JOURNEY</p>

          <h2>
            Education & <span>Learning.</span>
          </h2>
        </div>
      </motion.div>

      <div className="education-layout">
        <div className="education-column">
          <div className="education-column-title">
            <FaGraduationCap />

            <h3>Education</h3>
          </div>

          <div className="education-timeline">
            {education.map((item, index) => (
              <motion.div
                className="education-item"
                key={`${item.level}-${item.field}`}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="education-content">
                  <span className="education-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="education-field">{item.field}</p>

                  <h4>{item.level}</h4>

                  <h5>{item.institution}</h5>

                  <p className="education-description">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="certification-column">
          <div className="education-column-title">
            <FaCertificate />

            <h3>Certifications</h3>
          </div>

          <div className="certification-list">
            {certifications.map((certificate, index) => (
              <motion.div
                className="certificate-card"
                key={certificate.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
              >
                <span className="certificate-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{certificate.type}</p>

                <h4>{certificate.title}</h4>

                <h5>{certificate.provider}</h5>

                <a href="#contact">
                  View details
                  <FiArrowUpRight />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="learning-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span>CONTINUOUS LEARNING</span>

            <h3>
              Always learning.
              <br />
              Always <strong>growing.</strong>
            </h3>

            <p>
              Currently strengthening my programming, problem-solving, and
              software development skills for professional opportunities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Education;