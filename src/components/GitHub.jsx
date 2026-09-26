import { useEffect, useState } from "react";

function GitHub() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/Abhinav1574k/repos?sort=updated&per_page=6"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("GitHub API unavailable");
        }

        return response.json();
      })
      .then((data) => {
        setRepositories(data);
      })
      .catch(() => {
        setRepositories([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="section github-section">
      <div className="section-container">

        <div className="section-heading">
          <div>
            <span className="section-index">07 /</span>
            <span className="section-label">
              OPEN SOURCE
            </span>
          </div>

          <h2>
            Code in
            <br />
            <span>the wild.</span>
          </h2>
        </div>

        <div className="github-layout">

          <div className="github-profile-card">

            <div className="github-profile-top">
              <div className="github-avatar">
                AU
              </div>

              <span className="github-online">
                ● AVAILABLE
              </span>
            </div>

            <h3>Abhinav1574k</h3>

            <p>
              Building software, solving problems and
              experimenting with technology.
            </p>

            <div className="github-stats">
              <div>
                <strong>
                  {loading ? "--" : repositories.length}
                </strong>
                <span>REPOSITORIES</span>
              </div>

              <div>
                <strong>90+</strong>
                <span>DSA PROBLEMS</span>
              </div>

              <div>
                <strong>2026</strong>
                <span>BUILDING</span>
              </div>
            </div>

            <a
              className="github-button"
              href="https://github.com/Abhinav1574k"
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub ↗
            </a>

          </div>

          <div className="repository-area">

            <div className="repository-heading">
              <span>RECENT REPOSITORIES</span>

              <span>
                github.com/Abhinav1574k
              </span>
            </div>

            {loading ? (
              <div className="github-loading">
                Fetching repositories...
              </div>
            ) : repositories.length === 0 ? (
              <div className="github-loading">
                GitHub data unavailable right now.
              </div>
            ) : (
              <div className="repository-grid">

                {repositories.map((repo) => (
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="repository-card"
                    key={repo.id}
                  >
                    <div className="repository-top">
                      <span>◇</span>

                      <small>
                        {repo.language || "CODE"}
                      </small>
                    </div>

                    <h3>{repo.name}</h3>

                    <p>
                      {repo.description ||
                        "Developer project repository."}
                    </p>

                    <div className="repository-bottom">
                      <span>
                        ★ {repo.stargazers_count}
                      </span>

                      <span>
                        {repo.forks_count} forks
                      </span>
                    </div>
                  </a>
                ))}

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default GitHub;