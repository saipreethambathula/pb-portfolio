import Linkedin from "../assets/linkedin.png";
import Email from "../assets/email.png";

export default function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img src={Email} className="icon contact-icon" />
          <p>
            <a href="mailto:saipreethambathula@gmail.com" target="_blank">
              saipreethambathula@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img src={Linkedin} className="icon contact-icon" />
          <p>
            <a
              href="https://www.linkedin.com/in/saipreethambathula"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
