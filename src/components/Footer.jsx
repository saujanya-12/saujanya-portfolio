import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#home" className="logo">
            SAUJANYA<span>.</span>
          </a>

          <p>
            Aspiring Software Engineer focused on learning, building, and
            creating meaningful software solutions.
          </p>
        </div>

        <div className="footer-navigation">
          <span>NAVIGATION</span>

          <div>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-social">
          <span>SOCIAL</span>

          <div>
            <a
              href="https://github.com/saujanya-12/saujanya-12"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/saujanya-shedbal-354508298/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FiArrowUp />
        </button>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Saujanya Shedbal. All rights reserved.</p>

        <p>Designed & developed by Saujanya Shedbal.</p>
      </div>
    </footer>
  );
}

export default Footer;