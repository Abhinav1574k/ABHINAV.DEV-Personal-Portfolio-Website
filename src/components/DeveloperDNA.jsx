import { skillGroups } from "../data/skills";

function DeveloperDNA() {
  return (
    <section className="section dna-section" id="skills">
      <div className="section-container">

        <div className="section-heading compact">
          <div>
            <span className="section-index">02 /</span>
            <span className="section-label">
              DEVELOPER DNA
            </span>
          </div>

          <h2>
            Tools I use
            <br />
            <span>to build things.</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>

              <div className="skill-card-top">
                <span className="skill-icon">
                  {group.icon}
                </span>

                <span className="skill-number">
                  {String(
                    skillGroups.indexOf(group) + 1
                  ).padStart(2, "0")}
                </span>
              </div>

              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default DeveloperDNA;