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
              I’m Sai Preetham, a Frontend Developer focused on creating clean,
              responsive, and intuitive web applications. I specialize in React,
              Next.js, JavaScript, HTML, and CSS to build fast and user-friendly
              interfaces. I previously worked as a Frontend Developer Intern at
              Aagama, contributing to a real estate property management
              application built with Next.js. I enjoy problem-solving, improving
              UI/UX, and continuously learning new technologies. My goal is to
              grow into a full-stack developer and build impactful digital
              products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
