import { useEffect, useRef, useState } from "react";

const initialMessages = [
  {
    type: "system",
    text: "ABHINAV.DEV INTERACTIVE TERMINAL",
  },
  {
    type: "system",
    text: 'Type "help" to see available commands.',
  },
];

function InteractiveTerminal() {
  const [history, setHistory] = useState(initialMessages);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const executeCommand = (rawCommand) => {
    const command = rawCommand.trim().toLowerCase();

    if (!command) return;

    let responses = [
      {
        type: "command",
        text: `$ ${rawCommand}`,
      },
    ];

    switch (command) {
        case "sudo hire-abhinav":
  responses.push({
    type: "success",
    text:
      "ACCESS GRANTED. You found the hidden command.",
  });

  responses.push({
    type: "output",
    text:
      "Hiring Abhinav... ████████████████████ 100%",
  });

  responses.push({
    type: "success",
    text:
      "STATUS: Ready to build.",
  });

  break;

  case "matrix":
  responses.push({
    type: "success",
    text:
      "Wake up, developer. The matrix is compiling...",
  });

  break;

case "coffee":
  responses.push({
    type: "output",
    text:
      "☕ Coffee level: CRITICAL. Productivity level: LOADING...",
  });

  break;

case "secret":
  responses.push({
    type: "success",
    text:
      "You found a secret. There are more.",
  });

  break;
      case "help":
        responses.push({
          type: "output",
          text:
            "Available: about, skills, projects, github, leetcode, resume, contact, clear, whoami",
        });
        break;

      case "whoami":
        responses.push({
          type: "output",
          text:
            "Abhinav Upadhyay — Full Stack Developer & problem solver.",
        });
        break;

      case "about":
        responses.push({
          type: "output",
          text:
            "Computer Science student focused on DSA, problem solving and full-stack development.",
        });
        break;

      case "skills":
        responses.push({
          type: "output",
          text:
            "C++ • JavaScript • React • Node.js • Express • MongoDB • SQL • Git • DSA",
        });
        break;

      case "projects":
        responses.push({
          type: "output",
          text:
            "DigiFIR • Learnix • DevFlow AI • and more coming.",
        });
        break;

      case "github":
        window.open(
          "https://github.com/Abhinav1574k",
          "_blank"
        );

        responses.push({
          type: "success",
          text: "Opening GitHub...",
        });
        break;

      case "leetcode":
        window.open(
          "https://leetcode.com/u/Abhinav1574k/",
          "_blank"
        );

        responses.push({
          type: "success",
          text: "Opening LeetCode...",
        });
        break;

      case "resume":
        window.open("/resume.pdf", "_blank");

        responses.push({
          type: "success",
          text: "Opening resume...",
        });
        break;

      case "contact":
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });

        responses.push({
          type: "success",
          text: "Navigating to contact...",
        });
        break;

      case "clear":
        setHistory([]);
        return;

      default:
        responses.push({
          type: "error",
          text: `Command not found: ${command}. Type "help".`,
        });
    }

    setHistory((previous) => [
      ...previous,
      ...responses,
    ]);
  };

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  return (
    <div className="interactive-terminal">

      <div className="interactive-terminal-header">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>

        <span>abhinav@dev-os:~</span>

        <span className="terminal-live">
          ● LIVE
        </span>
      </div>

      <div
        className="interactive-terminal-body"
        ref={terminalRef}
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((message, index) => (
          <div
            className={`interactive-message ${message.type}`}
            key={index}
          >
            {message.text}
          </div>
        ))}

        <form
          className="terminal-input-row"
          onSubmit={(event) => {
            event.preventDefault();

            executeCommand(input);
            setInput("");
          }}
        >
          <span>$</span>

          <input
            ref={inputRef}
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
            autoComplete="off"
            spellCheck="false"
            aria-label="Terminal command"
          />

          <span className="input-cursor" />
        </form>
      </div>

    </div>
  );
}

export default InteractiveTerminal;