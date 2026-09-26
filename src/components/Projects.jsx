import { useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] =
    useState(null);

  return (
    <section
      className="section projects-section"
      id="projects"
    >
      <div className="section-container">

        <div className="section-heading">
          <div>
            <span className="section-index">03 /</span>

            <span className="section-label">
              SELECTED WORK
            </span>
          </div>

          <h2>
            Things I've
            <br />
            <span>been building.</span>
          </h2>
        </div>

        <div className="projects-list">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.id}
              onClick={() =>
                setSelectedProject(project)
              }
              tabIndex="0"
              role="button"
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  event.preventDefault();

                  setSelectedProject(project);
                }
              }}
            >

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-visual">

                <div className="project-grid" />

                {project.id === "digifir" ? (
                  <div className="project-terminal-preview">
                    <span>
                      digital_signature
                    </span>

                    <strong>
                      VERIFIED
                    </strong>

                    <div className="fake-bars">
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                ) : project.id === "learnix" ? (
                  <div className="project-ui-preview">
                    <div className="fake-ui-header" />

                    <div className="fake-ui-grid">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                ) : (
                  <div className="project-ai-preview">
                    <span>AI</span>

                    <strong>
                      DEVFLOW
                    </strong>

                    <small>
                      WORKFLOW ENGINE
                    </small>
                  </div>
                )}

                <div className="project-open">
                  VIEW CASE STUDY ↗
                </div>

              </div>

              <div className="project-info">

                <div className="project-topline">

                  <span>
                    {project.category}
                  </span>

                  <span className="project-status">
                    <i />
                    {project.status}
                  </span>

                </div>

                <h3>
                  {project.title}
                </h3>

                <h4>
                  {project.subtitle}
                </h4>

                <p>
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.technologies.map(
                    (tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <div className="project-actions">

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                    >
                      GitHub ↗
                    </a>
                  ) : (
                    <span className="disabled-link">
                      GitHub — coming soon
                    </span>
                  )}

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                    >
                      Live Demo ↗
                    </a>
                  ) : (
                    <span className="disabled-link">
                      Live Demo — coming soon
                    </span>
                  )}

                </div>

              </div>

            </article>
          ))}

        </div>

        <div className="future-project">

          <span>+</span>

          <div>
            <strong>
              MORE PROJECTS COMING
            </strong>

            <p>
              This portfolio is designed to grow
              with every project I build.
            </p>
          </div>

        </div>

      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}

export default Projects;