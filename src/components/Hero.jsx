import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowDownRight } from "react-icons/fi";
import saujanyaPhoto from "../assets/saujanya-photo.jpeg";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="hero-label">HELLO, I'M</p>

        <h1>
          Saujanya
          <br />
          <span>Shedbal.</span>
        </h1>

        <div className="hero-role">
          <TypeAnimation
            sequence={[
              "Aspiring Software Engineer",
              2000,
              "Java Developer",
              2000,
              "IT Engineering Student",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="hero-description">
          Final-year Information Technology engineering student focused on
          building practical software solutions and strengthening skills in
          Java, data structures, databases, and software development.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-btn">
            View My Work
            <FiArrowDownRight />
          </a>

          <a href="#contact" className="text-btn">
            Let's Talk
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/saujanya-12/saujanya-12"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="#contact"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="glow"></div>

        <motion.div
          className="hero-card hero-photo-card"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={saujanyaPhoto}
            alt="Saujanya Shedbal"
            className="hero-photo"
          />

          <div className="hero-photo-overlay"></div>

          <div className="hero-photo-info">
            <span>SOFTWARE ENGINEER</span>
            <p>SAUJANYA SHEDBAL</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="scroll-text">
        <span>SCROLL TO EXPLORE</span>
        <FiArrowDownRight />
      </div>
    </section>
  );
}

export default Hero;