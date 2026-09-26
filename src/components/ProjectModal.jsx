import { useEffect } from "react";

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="project-modal">

        <div className="project-modal-header">

          <div>
            <span className="project-modal-index">
              CASE STUDY / {project.number}
            </span>

            <h2>{project.title}</h2>
          </div>

          <button
            className="project-modal-close"
            onClick={onClose}
            aria-label="Close project"
          >
            ×
          </button>

        </div>

        <div className="project-modal-content">

          <div className="project-modal-visual">

            <div className="modal-grid" />

            <div className="modal-project-mark">
              <span>
                {project.id === "digifir"
                  ? "e-FIR"
                  : project.id === "learnix"
                  ? "EDU"
                  : "AI"}
              </span>

              <strong>
                {project.title}
              </strong>
            </div>

          </div>

          <div className="project-modal-details">

            <div className="modal-detail-block">
              <span>OVERVIEW</span>

              <p>
                {project.description}
              </p>
            </div>
<div className="modal-detail-block">
  <span>THE PROBLEM</span>

  <p>
    {project.problem}
  </p>
</div>

<div className="modal-detail-block">
  <span>THE APPROACH</span>

  <p>
    {project.solution}
  </p>
</div>
            <div className="modal-detail-block">
              <span>TECHNOLOGIES</span>

              <div className="modal-tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-detail-block">
              <span>STATUS</span>

              <p className="modal-status">
                ● {project.status}
              </p>
            </div>

            <div className="modal-detail-block">
              <span>ROLE</span>

              <p>
                Full-stack development, interface
                architecture and problem solving.
              </p>
            </div>

          </div>

        </div>

        <div className="project-modal-footer">

          <span>
            MORE CASE STUDIES WILL BE ADDED AS THE
            PROJECT EVOLVES.
          </span>

          <button onClick={onClose}>
            CLOSE CASE STUDY ×
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProjectModal;