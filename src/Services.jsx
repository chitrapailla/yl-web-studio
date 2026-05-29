import { Link } from "react-router-dom";

function Services() {
  return (
    <main className="services-page">
      <section className="page-hero">
        <p className="hero-label">Our Services <span></span></p>
        <h1>Simple Website Solutions for Your Business</h1>
        <p>
          We design, build, and support modern websites that are attractive,
          informative, mobile-friendly, and easy to maintain.
        </p>
      </section>

      <section className="services-section">
        <div className="service-card">
          <h3>Website Design</h3>
          <p>
            Clean, modern, and professional website designs created to represent
            your brand clearly.
          </p>
        </div>

        <div className="service-card">
          <h3>Mobile-Friendly Websites</h3>
          <p>
            Your website will look great on phones, tablets, and desktop screens.
          </p>
        </div>

        <div className="service-card">
          <h3>Website Maintenance</h3>
          <p>
            Need changes later? We can help update content, images, services,
            and business information.
          </p>
        </div>

        <div className="service-card">
          <h3>Domain & Hosting Guidance</h3>
          <p>
            We guide you through domain, hosting, and setup so your website can
            go live smoothly.
          </p>
        </div>

        <div className="service-card">
          <h3>Content Updates</h3>
          <p>
            We can help organize your text, images, and business details in a
            clear and professional way.
          </p>
        </div>

        <div className="service-card">
          <h3>Basic SEO Setup</h3>
          <p>
            We structure your website with basic search-friendly setup to help
            customers find you online.
          </p>
        </div>
      </section>
           <section className="pricing-section">
  <div className="section-header">
    <div className="accent-line"></div>

    <h2>Starter Website Package</h2>

    <p>
      A simple and professional website to help establish your online presence.
    </p>
  </div>

  <div className="pricing-card">
    <div className="price">
      Starting at <span>$299</span>
    </div>

    <ul>
      <li>Up to 3 Pages</li>
      <li>Mobile Friendly</li>
      <li>Contact Form</li>
    </ul>
  </div>
</section>

      <section className="cta-section">
        <div className="cta-card">
          <div className="accent-line"></div>
          <h2>Need a Website That Works for Your Business?</h2>
          <p>
            Tell us what you need, and we’ll help you create a simple,
            professional website that adds value.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;