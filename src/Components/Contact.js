function Contact() {
  return (
    <section id="contact">
      <footer
        className="bg-dark text-white text-center py-2 mt-5"
        style={{ marginTop: "auto" }}
      >
        <div className="mb-3">

          <a
            href="https://www.linkedin.com/in/prarthi-kothari28/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="bi bi-linkedin fs-4"></i>
          </a>

          <a
            href="https://github.com/PrarthiKothari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="bi bi-github fs-4"></i>
          </a>

          <a
            href="mailto:kothariprarthi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="bi bi-envelope-at-fill fs-4"></i>
          </a>

          <a
            href="https://bsky.app/profile/prarthikothari.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <i className="bi bi-bluesky fs-4"></i>
          </a>

        </div>

        <p className="mb-0">&copy; 2026 Prarthi Kothari. All Rights Reserved.</p>
        <p className="mb-0">Designed & Developed by Prarthi Kothari.</p>
      </footer>
    </section>
  );
}

export default Contact;