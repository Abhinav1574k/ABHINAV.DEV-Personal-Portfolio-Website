function Certifications() {
  return (
    <section className="section certifications-section">
      <div className="section-container">

        <div className="section-heading">
          <div>
            <span className="section-index">08 /</span>
            <span className="section-label">
              CERTIFICATIONS
            </span>
          </div>

          <h2>
            Proof of
            <br />
            <span>progress.</span>
          </h2>
        </div>

        <div className="cert-grid">

          <article className="cert-card">
            <div className="cert-number">
              01
            </div>

            <div>
              <span className="cert-provider">
                CODING NINJAS
              </span>

              <h3>
                Roadmap to Become an AI Engineer at Amazon
              </h3>

              <p>
                Certificate of Participation
              </p>
            </div>

            <span className="cert-status">
              PARTICIPATION
            </span>
          </article>

          <article className="cert-card placeholder-cert">
            <div className="cert-number">
              02
            </div>

            <div>
              <span className="cert-provider">
                FUTURE ENTRY
              </span>

              <h3>
                New certification
              </h3>

              <p>
                This slot is intentionally reserved for
                future certifications.
              </p>
            </div>

            <span className="cert-status">
              RESERVED
            </span>
          </article>

          <article className="cert-card placeholder-cert">
            <div className="cert-number">
              03
            </div>

            <div>
              <span className="cert-provider">
                FUTURE ENTRY
              </span>

              <h3>
                New achievement
              </h3>

              <p>
                Add another certificate, competition or
                professional achievement here.
              </p>
            </div>

            <span className="cert-status">
              RESERVED
            </span>
          </article>

        </div>

      </div>
    </section>
  );
}

export default Certifications;