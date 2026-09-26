import { experiences } from "../data/experience";

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-container">

        <div className="section-heading">
          <div>
            <span className="section-index">04 /</span>
            <span className="section-label">
              EXPERIENCE
            </span>
          </div>

          <h2>
            Learning by
            <br />
            <span>building.</span>
          </h2>
        </div>

        <div className="experience-list">

          {experiences.map((experience) => (
            <article
              className="experience-card"
              key={experience.id}
            >

              <div className="experience-period">
                <span>{experience.period}</span>
                <small>{experience.type}</small>
              </div>

              <div className="experience-main">

                <div className="experience-heading">
                  <div>
                    <h3>{experience.role}</h3>
                    <h4>{experience.company}</h4>
                  </div>

                  <span className="experience-location">
                    {experience.location}
                  </span>
                </div>

                <p>{experience.description}</p>

                <div className="experience-highlights">
                  {experience.highlights.map((item) => (
                    <div key={item}>
                      <span>↳</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;