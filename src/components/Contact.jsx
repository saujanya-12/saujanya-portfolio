import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiArrowUpRight,
  FiDownload,
  FiMail,
  FiCheckCircle,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await emailjs.send(
        "service_mh3d83q",   // Replace with your actual Service ID
        "template_qdslsi4",  // Replace with your actual Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        {
          publicKey: "n9xmffP7Lu1BzaMDU", // Replace with your actual Public Key
        }
      );

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Message could not be sent. Please try again.");
    }
  };

  return (
    <section className="contact section" id="contact">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-number">06</span>

        <div>
          <p className="section-label">GET IN TOUCH</p>

          <h2>
            Let's <span>Connect.</span>
          </h2>
        </div>
      </motion.div>

      <div className="contact-layout">
        <motion.div
          className="contact-information"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>
            Have an opportunity
            <br />
            or idea?
            <br />
            <span>Let's talk.</span>
          </h3>

          <p className="contact-description">
            I'm interested in software engineering opportunities, internships,
            and projects where I can apply my technical knowledge, learn, and
            contribute to meaningful software solutions.
          </p>

          <div className="contact-links">
            <a
              href="mailto:saujanyashedbal@gmail.com"
              className="contact-link-item"
            >
              <div className="contact-link-icon">
                <FiMail />
              </div>

              <div>
                <span>Email</span>
                <p>saujanyashedbal@gmail.com</p>
              </div>

              <FiArrowUpRight className="contact-link-arrow" />
            </a>

            <a
              href="https://github.com/saujanya-12/saujanya-12"
              target="_blank"
              rel="noreferrer"
              className="contact-link-item"
            >
              <div className="contact-link-icon">
                <FaGithub />
              </div>

              <div>
                <span>GitHub</span>
                <p>saujanya-12</p>
              </div>

              <FiArrowUpRight className="contact-link-arrow" />
            </a>

            <a
              href="https://www.linkedin.com/in/saujanya-shedbal-354508298/"
              target="_blank"
              rel="noreferrer"
              className="contact-link-item"
            >
              <div className="contact-link-icon">
                <FaLinkedinIn />
              </div>

              <div>
                <span>LinkedIn</span>
                <p>Saujanya Shedbal</p>
              </div>

              <FiArrowUpRight className="contact-link-arrow" />
            </a>
          </div>

          <a
            href="/Saujanya_Shedbal_Resume.pdf"
            download="Saujanya_Shedbal_Resume.pdf"
            className="resume-button"
          >
            Download Resume
            <FiDownload />
          </a>
        </motion.div>

        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-form-number">06 / CONTACT</div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">YOUR NAME</label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">YOUR EMAIL</label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">YOUR MESSAGE</label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your opportunity or project..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
              <FiArrowUpRight />
            </button>

            {submitted && (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FiCheckCircle />
                Message form submitted successfully.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;