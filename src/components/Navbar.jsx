import { useEffect, useState } from "react";

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
}

function Navbar({ darkMode, setDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navigate = (id) => {
    setMobileOpen(false);

    setTimeout(() => {
      scrollToSection(id);
    }, 100);
  };

  const openCommandPalette = () => {
    setMobileOpen(false);

    window.dispatchEvent(
      new Event("open-command-palette")
    );
  };

  return (
    <>
      <header className="navbar">

        <div className="navbar-inner">

          <button
            className="navbar-logo"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <span>&lt;/&gt;</span>
            ABHINAV
            <strong>.DEV</strong>
          </button>

          <nav className="nav-links">

            <button
              onClick={() => scrollToSection("about")}
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>

            <button
              onClick={() =>
                scrollToSection("experience")
              }
            >
              Experience
            </button>

            <button
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>

          </nav>

          <div className="navbar-actions">

            <button
              className="command-trigger"
              onClick={openCommandPalette}
            >
              <span>⌘</span>
              <span>Search</span>
              <kbd>Ctrl K</kbd>
            </button>
            
            <button
              className="theme-toggle"
              onClick={setDarkMode}
              aria-label="Toggle theme"
            >
              {darkMode ? "☼" : "☾"}
            </button>

            <button
              className={`mobile-menu-button ${
                mobileOpen ? "open" : ""
              }`}
              onClick={() =>
                setMobileOpen((previous) => !previous)
              }
              aria-label="Toggle menu"
            >
              <span />
              <span />
            </button>

          </div>

        </div>

      </header>

      <div
        className={`mobile-menu ${
          mobileOpen ? "open" : ""
        }`}
      >

        <div className="mobile-menu-inner">

          <div className="mobile-menu-label">
            NAVIGATION
          </div>

          <button onClick={() => navigate("about")}>
            <span>01</span>
            About
          </button>

          <button onClick={() => navigate("skills")}>
            <span>02</span>
            Skills
          </button>

          <button
            onClick={() => navigate("projects")}
          >
            <span>03</span>
            Projects
          </button>

          <button
            onClick={() => navigate("experience")}
          >
            <span>04</span>
            Experience
          </button>

          <button onClick={() => navigate("dsa")}>
            <span>05</span>
            Problem Solving
          </button>

          <button onClick={() => navigate("contact")}>
            <span>06</span>
            Contact
          </button>

          <div className="mobile-menu-divider" />

          <button
            onClick={() =>
              window.open(
                "/resume.pdf",
                "_blank"
              )
            }
          >
            <span>↗</span>
            Resume
          </button>

          <button
            onClick={() =>
              window.open(
                "https://github.com/Abhinav1574k",
                "_blank"
              )
            }
          >
            <span>↗</span>
            GitHub
          </button>

        </div>

      </div>
    </>
  );
}

export default Navbar;