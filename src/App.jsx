import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import DeveloperDNA from "./components/DeveloperDNA";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Journey from "./components/Journey";
import DSA from "./components/DSA";
import GitHub from "./components/GitHub";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import InteractiveTerminal from "./components/InteractiveTerminal";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import SectionProgress from "./components/SectionProgress";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme =
      darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className="app">
  <Loader />

      <CustomCursor />

      <SectionProgress />
      <Navbar
        darkMode={darkMode}
        setDarkMode={() =>
          setDarkMode((previous) => !previous)
        }
      />

      <main>

        <Hero />

        <About />

        <DeveloperDNA />

        <section className="terminal-section">
          <div className="section-container">

            <div className="section-heading compact">
              <div>
                <span className="section-index">
                  02.5 /
                </span>

                <span className="section-label">
                  DEVELOPER CONSOLE
                </span>
              </div>

              <h2>
                Don't just
                <br />
                <span>look around.</span>
              </h2>
            </div>

            <InteractiveTerminal />

          </div>
        </section>

        <Projects />

        <Experience />

        <Journey />

        <DSA />

        <GitHub />

        <Certifications />

        <Resume />

        <Contact />

      </main>

      <Footer />

      <CommandPalette />

    </div>
  );
}

export default App;