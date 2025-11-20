import Profile from "../assets/profile-pic.avif";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import resumePdf from "../assets/SaiPreetham_SoftwareEngineer_Resume.pdf";
export default function Hero() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={Profile} alt="profile pic" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Sai Preetham</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open(resumePdf)}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <a
            href="https://www.linkedin.com/in/saipreethambathula/"
            target="_blank"
          >
            <img src={Linkedin} alt="LinkedIn" className="icon" />
          </a>
          <a href="https://github.com/saipreethambathula/" target="_blank">
            <img src={Github} alt="GitHub" className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
