import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    const subject = encodeURIComponent(
      `Portfolio Contact — ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:kanha1574k@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="section-container">

        <div className="contact-grid">

          <div className="contact-copy">

            <span className="section-index">
              10 /
            </span>

            <span className="section-label">
              GET IN TOUCH
            </span>

            <h2>
              Let's build
              <br />
              <span>something.</span>
            </h2>

            <p>
              Have an opportunity, project idea or simply
              want to talk about technology and problem
              solving?
            </p>

            <a
              className="email-link"
              href="mailto:kanha1574k@gmail.com"
            >
              kanha1574k@gmail.com ↗
            </a>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <label>
              <span>YOUR NAME</span>

              <input
                name="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </label>

            <label>
              <span>EMAIL</span>

              <input
                name="email"
                type="email"
                placeholder="john@example.com"
                required
              />
            </label>

            <label>
              <span>MESSAGE</span>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell me what you're building..."
                required
              />
            </label>

            <button
              type="submit"
              className="primary-button"
            >
              {submitted
                ? "Opening Mail Client..."
                : "Send Message"}

              <span>↗</span>
            </button>

            <small>
              This form opens your default email client.
              No message is stored on this website.
            </small>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;