import { journey } from "../data/journey";

function Journey() {
  return (
    <section className="section journey-section">
      <div className="section-container">

        <div className="section-heading">
          <div>
            <span className="section-index">05 /</span>
            <span className="section-label">
              DEVELOPMENT JOURNEY
            </span>
          </div>

          <h2>
            The build
            <br />
            <span>log.</span>
          </h2>
        </div>

        <div className="journey-intro">
          <p>
            A timeline of the technologies, projects and
            experiences that are shaping my journey as a
            developer.
          </p>

          <span className="mono-accent">
            $ git log --oneline --all
          </span>
        </div>

        <div className="journey-timeline">

          <div className="journey-line" />

          {journey.map((item, index) => (
            <article
              className={`journey-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
              key={`${item.date}-${item.title}`}
            >

              <div className="journey-dot">
                <span />
              </div>

              <div className="journey-card">

                <div className="journey-top">
                  <span>{item.date}</span>
                  <small>{item.tag}</small>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Journey;