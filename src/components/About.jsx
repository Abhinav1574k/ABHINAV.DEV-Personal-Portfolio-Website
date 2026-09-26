import ScrollReveal from "./ScrollReveal";

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-container">

        <div className="section-heading">
          <div>
            <span className="section-index">01 /</span>
            <span className="section-label">IDENTITY</span>
          </div>

          <h2>
            More than
            <br />
            <span>just code.</span>
          </h2>
        </div>

        <div className="about-grid">
            <ScrollReveal delay={100}>
                <div className="about-profile">
                    <div className="profile-frame">
                    <img
                        src="/images/profile.png"
                        alt="Abhinav Upadhyay"
                    />

                    <div className="profile-corner profile-corner-tl" />
                    <div className="profile-corner profile-corner-br" />
                    </div>

                    <div className="profile-caption">
                    <span>ABHINAV UPADHYAY</span>
                    <span>FULL STACK DEVELOPER</span>
                    </div>
                </div>
            </ScrollReveal>
            <ScrollReveal>
                <div className="about-content">

                    <div className="about-intro">
                    <span className="mono-accent">
                        $ cat about.txt
                    </span>

                    <p className="large-text">
                        I enjoy solving problems more than simply
                        writing code.
                    </p>

                    <p>
                        I'm a Computer Science undergraduate focused
                        on Data Structures & Algorithms, problem
                        solving and full-stack web development.
                    </p>

                    <p>
                        I enjoy understanding difficult problems,
                        breaking them down into smaller pieces and
                        turning those ideas into working software.
                    </p>

                    <p>
                        I'm also interested in teamwork and leadership,
                        with a long-term goal of growing into roles where
                        I can take ownership of products and engineering
                        teams.
                    </p>
                    </div>

                    <div className="about-facts">

                    <div className="fact">
                        <span>EDUCATION</span>
                        <strong>
                        B.Tech CSE
                        </strong>
                        <small>
                        Acropolis Institute of Technology & Research
                        </small>
                    </div>

                    <div className="fact">
                        <span>GRADUATION</span>
                        <strong>2027</strong>
                        <small>
                        Computer Science & Engineering
                        </small>
                    </div>

                    <div className="fact">
                        <span>BASED IN</span>
                        <strong>INDIA</strong>
                        <small>
                        Indore, Madhya Pradesh
                        </small>
                    </div>

                    <div className="fact">
                        <span>LOOKING FOR</span>
                        <strong>OPPORTUNITIES</strong>
                        <small>
                        Internship · Full-time · Collaboration
                        </small>
                    </div>

                    </div>

                </div>

            </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default About;