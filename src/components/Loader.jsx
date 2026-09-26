import { useEffect, useState } from "react";

function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="site-loader">
      <div className="loader-inner">

        <div className="loader-brand">
          ABHINAV<span>.DEV</span>
        </div>

        <div className="loader-terminal">
          <span>$</span>
          <span className="loader-text">
            initializing developer environment
          </span>
          <span className="loader-cursor" />
        </div>

        <div className="loader-progress">
          <span />
        </div>

        <div className="loader-status">
          SYSTEM READY
        </div>

      </div>
    </div>
  );
}

export default Loader;