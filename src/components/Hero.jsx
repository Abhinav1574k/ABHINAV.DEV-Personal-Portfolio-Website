import { useEffect, useState } from "react";

const terminalLines = [
  {
    command: "$ whoami",
    output: "Abhinav Upadhyay",
  },
  {
    command: "$ role",
    output: "Full Stack Developer",
  },
  {
    command: "$ location",
    output: "Indore, India",
  },
  {
    command: "$ focus",
    output: "DSA • Problem Solving • Full Stack",
  },
];

function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [mouse, setMouse] = useState({
  x: 0,
  y: 0,
});

useEffect(() => {
  const handleMouseMove = (event) => {
    setMouse({
      x:
        (event.clientX / window.innerWidth - 0.5) *
        2,
      y:
        (event.clientY / window.innerHeight - 0.5) *
        2,
    });
  };

  window.addEventListener(
    "mousemove",
    handleMouseMove
  );

  return () =>
    window.removeEventListener(
      "mousemove",
      handleMouseMove
    );
}, []);

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return;

    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, 700);

    return () => clearTimeout(timer);
  }, [visibleLines]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" style={{
  transform: `translate(
    ${mouse.x * 8}px,
    ${mouse.y * 8}px
  )`,
}}>
      <div className="hero-grid" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-content">
        <div className="availability">
          <span className="status-dot" />
          <span>OPEN TO INTERNSHIPS & FULL-TIME OPPORTUNITIES</span>
        </div>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">
              FULL STACK DEVELOPER
            </p>

            <h1>
              I BUILD.
              <br />
              <span>I SOLVE.</span>
              <br />
              <span className="outline-text">I KEEP LEARNING.</span>
            </h1>

            <p className="hero-description">
                <b>I build web experiences that turn ideas into products.</b><br />
                I'm Abhinav Upadhyay — a web developer focused on building responsive, practical and user-centered applications.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={scrollToProjects}
              >
                Explore My Work
                <span>↗</span>
              </button>

              <a
                className="secondary-button"
                href="mailto:kanha1574k@gmail.com"
              >
                Get In Touch
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <span className="meta-label">BASED IN</span>
                <strong>INDORE, INDIA</strong>
              </div>

              <div>
                <span className="meta-label">FOCUS</span>
                <strong>DSA × FULL STACK</strong>
              </div>

              <div>
                <span className="meta-label">STATUS</span>
                <strong className="green-text">BUILDING</strong>
              </div>
            </div>
          </div>

          <div className="terminal-wrapper">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="terminal-title">
                  abhinav@developer:~
                </div>

                <div className="terminal-status">
                  ● online
                </div>
              </div>

              <div className="terminal-body">
                <div className="terminal-comment">
                  # welcome to abhinav.dev
                </div>

                <div className="terminal-comment">
                  # initializing developer profile...
                </div>

                <div className="terminal-divider" />

                {terminalLines
                  .slice(0, visibleLines)
                  .map((line, index) => (
                    <div className="terminal-line" key={index}>
                      <div className="terminal-command">
                        {line.command}
                      </div>

                      <div className="terminal-output">
                        → {line.output}
                      </div>
                    </div>
                  ))}

                {visibleLines >= terminalLines.length && (
                  <>
                    <div className="terminal-divider" />

                    <div className="terminal-command">
                      $ ./start-building.sh
                    </div>

                    <div className="terminal-success">
                      ✓ System ready.
                    </div>

                    <div className="terminal-cursor">
                      _
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="terminal-caption">
              <span>interactive terminal</span>
              <span>try: <b>help</b></span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

export default Hero;