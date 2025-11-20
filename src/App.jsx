import Navbar from "./components/Navbar";
import "./styles/styles.css";
import "./styles/mediaqueries.css";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const skills = {
  frontend: [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "Tailwind", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "Material UI", level: "Intermediate" },
  ],
  backend: [
    { name: "SQL", level: "Advanced" },
    { name: "Node JS", level: "Intermediate" },
    { name: "Express JS", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
  ],
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience skills={skills} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
