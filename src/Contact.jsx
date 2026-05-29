import { Link } from "react-router-dom";

function Contact() {
  return (
    <main className="contact-page">

      <section className="page-hero">
        <p className="hero-label">
          Contact Us <span></span>
        </p>

        <h1>Let's Build Something Great Together</h1>

        <p>
          Tell us a little about your business and website needs.
          We'll get back to you as soon as possible.
        </p>
      </section>

      <section className="contact-section">

        <div className="contact-form-card">

          <h2>Get In Touch</h2>

          <form
            action="https://formspree.io/f/xkoeeqvw"
            method="POST"
          >
  <input
    type="text"
    name="name"
    placeholder="Your Name"
  />

  <input
    type="text"
    name="business"
    placeholder="Business Name"
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
  />

  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
  />

  <textarea
    name="message"
    rows="6"
    placeholder="Tell us about your project..."
  ></textarea>

  <button
    type="submit"
    className="btn btn-primary"
  >
    Send Inquiry
  </button>
</form>

        </div>

        <div className="contact-info">

          <h2>What Happens Next?</h2>

          <div className="contact-step">
            <h3>1. We Review Your Request</h3>
            <p>
              We'll learn about your business and website goals.
            </p>
          </div>

          <div className="contact-step">
            <h3>2. We Reach Out</h3>
            <p>
              We'll discuss requirements and answer any questions.
            </p>
          </div>

          <div className="contact-step">
            <h3>3. We Get Started</h3>
            <p>
              Once everything is approved, we begin building your website.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;