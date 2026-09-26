function DSA() {
  return (
    <section className="section dsa-section" id="dsa">
      <div className="section-container">

        <div className="dsa-header">

          <div>
            <span className="section-index">06 /</span>
            <span className="section-label">
              PROBLEM SOLVING
            </span>

            <h2>
              I don't just
              <br />
              <span>write code.</span>
            </h2>
          </div>

          <p>
            Problem solving is one of the parts of programming
            I enjoy most. DSA gives me a way to turn difficult
            problems into structured, logical solutions.
          </p>

        </div>

        <div className="dsa-grid">

          <div className="dsa-main-card">

            <div className="dsa-card-header">
              <span>LEETCODE</span>
              <span>2026</span>
            </div>

            <div className="dsa-number">
              90<span>+</span>
            </div>

            <h3>Problems Solved</h3>

            <p>
              Solved using C++, with a focus on strengthening
              algorithmic problem-solving skills.
            </p>

            <a
              href="https://leetcode.com/u/Abhinav1574k/"
              target="_blank"
              rel="noreferrer"
            >
              View LeetCode Profile ↗
            </a>

          </div>

          <div className="badge-card">
            <img
              src="/images/50-days.png"
              alt="LeetCode 50 Days Badge"
            />

            <div>
              <span>STREAK</span>
              <strong>50 DAYS</strong>
            </div>
          </div>

          <div className="badge-card">
            <img
              src="/images/100-days.png"
              alt="LeetCode 100 Days Badge"
            />

            <div>
              <span>STREAK</span>
              <strong>100 DAYS</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default DSA;