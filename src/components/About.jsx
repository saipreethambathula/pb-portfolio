import AboutPic from "../assets/about-pic.avif";
import ExperienceImg from "../assets/experience.png";
import EducationImg from "../assets/education.png";

export default function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={AboutPic} alt="about" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={ExperienceImg} className="icon" />
              <h3>Experience</h3>
              <p>
                6 months
                <br />
                Frontend Development Intern
              </p>
            </div>
            <div className="details-container">
              <img src={EducationImg} className="icon" />
              <h3>Education</h3>
              <p>Bachelor of Technology in Computer Science Engineering</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I’m Sai Preetham, a Frontend Developer who builds clean,
              responsive, and user-friendly web interfaces. I work with React,
              Next.js, JavaScript, HTML, and CSS to create fast, modern
              applications. I previously interned at Aagama, contributing to a
              Next.js-based real estate property management platform. I enjoy
              solving UI/UX challenges and constantly improving my skills. My
              long-term goal is to become a full-stack developer and build
              impactful digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
