function NotFound() {
  return (
    <main className="not-found">

      <div className="not-found-inner">

        <span className="not-found-code">
          404
        </span>

        <h1>
          Page not
          <br />
          <span>found.</span>
        </h1>

        <p>
          Looks like you've navigated somewhere that
          doesn't exist in this build.
        </p>

        <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Return to ABHINAV.DEV ↗
        </button>

      </div>

    </main>
  );
}

export default NotFound;