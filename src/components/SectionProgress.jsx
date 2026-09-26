import { useEffect, useState } from "react";

const sections = [
  {
    id: "about",
    label: "ABOUT",
  },
  {
    id: "skills",
    label: "SKILLS",
  },
  {
    id: "projects",
    label: "PROJECTS",
  },
  {
    id: "experience",
    label: "EXPERIENCE",
  },
  {
    id: "dsa",
    label: "DSA",
  },
  {
    id: "contact",
    label: "CONTACT",
  },
];

function SectionProgress() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.3, 0.6],
      }
    );

    sections.forEach(({ id }) => {
      const element =
        document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="section-progress">

      {sections.map((section) => (
        <button
          key={section.id}
          className={
            active === section.id
              ? "active"
              : ""
          }
          onClick={() =>
            document
              .getElementById(section.id)
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
          title={section.label}
        >
          <span />
          <small>
            {section.label}
          </small>
        </button>
      ))}

    </aside>
  );
}

export default SectionProgress;