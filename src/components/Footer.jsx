function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          <div>
            <div className="footer-brand">
              &lt;/&gt; ABHINAV<span>.DEV</span>
            </div>

            <p>
              Full Stack Developer.
              <br />
              Problem solver. Builder.
            </p>
          </div>

          <div className="footer-links">

            <div>
              <span>SOCIAL</span>

              <a
                href="https://github.com/Abhinav1574k"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/abhinav-upadhyay-019b7029a"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://leetcode.com/u/Abhinav1574k/"
                target="_blank"
                rel="noreferrer"
              >
                LeetCode ↗
              </a>

              <a
                href="https://www.hackerrank.com/profile/kanha1574k"
                target="_blank"
                rel="noreferrer"
              >
                HackerRank ↗
              </a>
            </div>

            <div>
              <span>NAVIGATE</span>

              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Abhinav Upadhyay
          </span>

          <span>
            Built with React · JavaScript · curiosity
          </span>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            BACK TO TOP ↑
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;