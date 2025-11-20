import checkmarkIcon from "../assets/checkmark.png";
import arrowIcon from "../assets/arrow.png";

export default function Experience({ skills }) {
  const { frontend } = skills;
  const { backend } = skills;

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>

      <div className="experience-details-container">
        <div className="about-containers">
          {/* Frontend Development */}
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {frontend.map((each, ind) => (
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>{each.name}</h3>
                    <p>{each.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Backend Development */}
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              {backend.map((each, ind) => (
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>{each.name}</h3>
                    <p>{each.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "#projects")}
      />
    </section>
  );
}
