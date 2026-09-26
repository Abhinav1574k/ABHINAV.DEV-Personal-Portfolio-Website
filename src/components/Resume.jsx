function Resume() {
  return (
    <section className="section resume-section" id="resume">
      <div className="section-container">

        <div className="resume-card">

          <div className="resume-bg-text">
            RESUME
          </div>

          <div className="resume-content">

            <div>
              <span className="section-index">
                09 /
              </span>

              <h2>
                Want the
                <br />
                <span>full story?</span>
              </h2>

              <p>
                Download my latest resume for a concise
                overview of my education, skills, projects,
                experience and achievements.
              </p>
            </div>

            <div className="resume-actions">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                View Resume
                <span>↗</span>
              </a>

              <a
                href="/resume.pdf"
                download
                className="secondary-button"
              >
                Download PDF
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;