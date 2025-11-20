import React, { useEffect, useRef, useState } from "react";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";

const projects = [
  {
    title: "Memory Card Game",
    img: project1,
    description:
      "A game where players flip cards to find matching pairs, boosting memory and focus.",
    technologies: "HTML, CSS, JavaScript",
    github: "https://github.com/saipreethambathula/memory-game",
    demo: "https://pb-memory-game.vercel.app/",
  },
  {
    title: "Project Two",
    img: project2,
    description: "Small description about project two",
    technologies: "React, Material UI, Express",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    title: "Project Three",
    img: project3,
    description: "Small description about project three",
    technologies: "React, CSS, Node.js",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    title: "Project Two",
    img: project2,
    description: "Small description about project two",
    technologies: "React, Material UI, Express",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    title: "Project Three",
    img: project3,
    description: "Small description about project three",
    technologies: "React, CSS, Node.js",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
];

export default function Projects() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame;

    const scrollStep = () => {
      if (!isHovered) {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scrollStep);
    };

    animationFrame = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="projects" className="project-to-section">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>

      <div
        className="project-to-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          className="project-to-scroll-btn project-to-left"
          onClick={scrollLeft}
          aria-label="Scroll Left"
        >
          &#8249;
        </button>

        <div className="project-to-container" ref={scrollRef}>
          {projects.map((proj, idx) => (
            <div className="project-to-card" key={idx}>
              <img src={proj.img} alt={proj.title} className="project-to-img" />
              <h2 className="project-to-card-title">{proj.title}</h2>
              <p className="project-to-desc">{proj.description}</p>
              <p className="project-to-tech">{proj.technologies}</p>
              <div className="project-to-btn-container">
                <button
                  className="project-to-btn"
                  onClick={() =>
                    window.open(proj.github, "_blank", "noopener,noreferrer")
                  }
                >
                  Github
                </button>
                <button
                  className="project-to-btn"
                  onClick={() =>
                    window.open(proj.demo, "_blank", "noopener,noreferrer")
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          className="project-to-scroll-btn project-to-right"
          onClick={scrollRight}
          aria-label="Scroll Right"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}
