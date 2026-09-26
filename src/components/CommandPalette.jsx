import { useEffect, useState } from "react";

const commands = [
  {
    id: "about",
    label: "Go to About",
    shortcut: "A",
    action: () => scrollToSection("about"),
  },
  {
    id: "skills",
    label: "Go to Skills",
    shortcut: "S",
    action: () => scrollToSection("skills"),
  },
  {
    id: "projects",
    label: "Go to Projects",
    shortcut: "P",
    action: () => scrollToSection("projects"),
  },
  {
    id: "experience",
    label: "Go to Experience",
    shortcut: "E",
    action: () => scrollToSection("experience"),
  },
  {
    id: "dsa",
    label: "Go to Problem Solving",
    shortcut: "D",
    action: () => scrollToSection("dsa"),
  },
  {
    id: "resume",
    label: "Open Resume",
    shortcut: "R",
    action: () => window.open("/resume.pdf", "_blank"),
  },
  {
    id: "github",
    label: "Open GitHub",
    shortcut: "G",
    action: () => window.open("https://github.com/Abhinav1574k", "_blank"),
  },
  {
    id: "linkedin",
    label: "Open LinkedIn",
    shortcut: "L",
    action: () =>
      window.open(
        "https://www.linkedin.com/in/abhinav-upadhyay-019b7029a",
        "_blank",
      ),
  },
  {
    id: "contact",
    label: "Contact Abhinav",
    shortcut: "C",
    action: () => scrollToSection("contact"),
  },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
}

function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  const filteredCommands = commands.filter((command) =>
    command.label.toLowerCase().includes(query.toLowerCase()),
  );
  
  useEffect(() => {
    const openPalette = () => {
      setOpen(true);
      setQuery("");
      setSelected(0);
    };

    window.addEventListener("open-command-palette", openPalette);

    const handleKeyDown = (event) => {
      const modifier = event.ctrlKey || event.metaKey;

      if (modifier && event.key.toLowerCase() === "k") {
        event.preventDefault();

        setOpen((previous) => !previous);
        setQuery("");
        setSelected(0);

        return;
      }

      if (!open) return;

      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();

        setSelected((previous) =>
          Math.min(previous + 1, filteredCommands.length - 1),
        );
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();

        setSelected((previous) => Math.max(previous - 1, 0));
      }

      if (event.key === "Enter") {
        event.preventDefault();

        const command = filteredCommands[selected];

        if (command) {
          command.action();
          setOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-command-palette", openPalette);

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, query, selected, filteredCommands]);

  if (!open) return null;

  return (
    <div
      className="command-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setOpen(false);
        }
      }}
    >
      <div className="command-palette">
        <div className="command-search">
          <span>⌕</span>

          <input
            autoFocus
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelected(0);
            }}
            placeholder="Search commands..."
          />

          <kbd>ESC</kbd>
        </div>

        <div className="command-section-label">NAVIGATION</div>

        <div className="command-list">
          {filteredCommands.length === 0 ? (
            <div className="command-empty">No commands found.</div>
          ) : (
            filteredCommands.map((command, index) => (
              <button
                key={command.id}
                className={`command-item ${
                  selected === index ? "selected" : ""
                }`}
                onMouseEnter={() => setSelected(index)}
                onClick={() => {
                  command.action();
                  setOpen(false);
                }}
              >
                <span className="command-icon">
                  {command.id === "github"
                    ? "◉"
                    : command.id === "resume"
                      ? "▣"
                      : command.id === "contact"
                        ? "@"
                        : "→"}
                </span>

                <span>{command.label}</span>

                <kbd>{command.shortcut}</kbd>
              </button>
            ))
          )}
        </div>

        <div className="command-footer">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;
