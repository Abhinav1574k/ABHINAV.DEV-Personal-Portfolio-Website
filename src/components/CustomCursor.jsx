import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);
    };

    const handleEnter = () => setVisible(true);
    const handleLeave = () => setVisible(false);

    const handleMouseOver = (event) => {
      const target = event.target;

      if (
        target.closest(
          "a, button, input, textarea, .project-card, .repository-card"
        )
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener(
        "mouseover",
        handleMouseOver
      );
      document.removeEventListener(
        "mouseenter",
        handleEnter
      );
      document.removeEventListener(
        "mouseleave",
        handleLeave
      );
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${
        hovering ? "cursor-hover" : ""
      } ${visible ? "cursor-visible" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <span />
    </div>
  );
}

export default CustomCursor;