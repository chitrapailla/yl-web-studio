import { Link } from "react-router-dom";
function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-left">
          <p className="hero-label">
            YL Web Studio <span></span>
          </p>

          <h1>Modern Websites That Add Value</h1>

          <p className="hero-description">
            Simple, attractive, and budget-friendly websites designed to
            strengthen your online presence and help your business stand out.
          </p>
          
        </div>
        

        <div className="hero-right">
          <div className="logo-card">
            <img
              src="/colored-logo.png"
              alt="YL Web Studio"
              className="hero-logo"
            />
          </div>
        </div>
      </section>

      <section className="why-website-section">
        <div className="section-header">
          <div className="accent-line"></div>

          <h2>Why Every Business Needs a Website</h2>

          <p>
            Today's customers search online before making decisions. A
            professional website helps your business make a strong first
            impression and keeps your information available 24/7.
          </p>
        </div>

        <div className="website-cards">
          <div className="website-card">
            <div className="icon blue">🤝</div>
            <h3>Build Trust</h3>
            <p>
              A professional website shows customers that your business is
              reliable and established.
            </p>
            <div className="mini-line blue-line"></div>
          </div>

          <div className="website-card">
            <div className="icon blue">🕘</div>
            <h3>24/7 Presence</h3>
            <p>
              Your services and business information remain accessible at all
              times.
            </p>
            <div className="mini-line blue-line"></div>
          </div>

          <div className="website-card">
            <div className="icon green">🖥️</div>
            <h3>Showcase Services</h3>
            <p>
              Present your services, products, and expertise professionally.
            </p>
            <div className="mini-line green-line"></div>
          </div>

          <div className="website-card">
            <div className="icon green">👥</div>
            <h3>Customer Connection</h3>
            <p>
              Make it easy for potential customers to reach and engage with you.
            </p>
            <div className="mini-line green-line"></div>
          </div>
        </div>
      </section>

      <section className="why-yl-section">
        <div className="why-yl-left">
          <div className="accent-line left"></div>

          <h2>Why YL Web Studio?</h2>

          <p>
            We focus on creating websites that are simple, attractive, easy to
            manage, and designed to add value to your business.
          </p>
        </div>

        <div className="benefits-grid">
          <div className="benefit-item">
            <span>📅</span>
            <div>
              <h3>Launch in as little as 2 weeks</h3>
              <p>Fast and efficient delivery so you can go live quickly.</p>
            </div>
          </div>

          <div className="benefit-item">
            <span>👤</span>
            <div>
              <h3>Your Website, Your Control</h3>
              <p>Easily update text and images whenever you need.</p>
            </div>
          </div>

          <div className="benefit-item">
            <span>📱</span>
            <div>
              <h3>Mobile-Friendly Design</h3>
              <p>Your website will look great on all devices.</p>
            </div>
          </div>

          <div className="benefit-item">
            <span>🏷️</span>
            <div>
              <h3>Budget-Friendly Solutions</h3>
              <p>High-quality websites without breaking the bank.</p>
            </div>
          </div>

          <div className="benefit-item">
            <span>🎧</span>
            <div>
              <h3>Need Updates Later? We Can Help.</h3>
              <p>Ongoing support available whenever you need us.</p>
            </div>
          </div>

          <div className="benefit-item">
            <span>⌨️</span>
            <div>
              <h3>No Technical Knowledge Required</h3>
              <p>We make the process easy and hassle-free for you.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="process-section">
  <div className="section-header">
    <div className="accent-line"></div>

    <h2>Our Process</h2>

    <p>
      A simple and collaborative process designed to get your website
      launched quickly and efficiently.
    </p>
  </div>

  <div className="process-timeline">

    <div className="process-step">
      <div className="step-number">01</div>
      <h3>Discovery</h3>
      <p>
        We learn about your business, goals, and what you want your
        website to achieve.
      </p>
    </div>

    <div className="process-step">
      <div className="step-number">02</div>
      <h3>Design</h3>
      <p>
        We create a clean and modern design tailored to your business.
      </p>
    </div>

    <div className="process-step">
      <div className="step-number">03</div>
      <h3>Review</h3>
      <p>
        You review the website and provide feedback before launch.
      </p>
    </div>

    <div className="process-step">
      <div className="step-number">04</div>
      <h3>Launch</h3>
      <p>
        Your website goes live and is ready for customers.
      </p>
    </div>

  </div>
</section>
<section className="cta-section">
  <div className="cta-card">

    <div className="accent-line"></div>

    <h2>Ready to Build Your Online Presence?</h2>

    <p>
      Let's create a website that represents your business professionally,
      helps customers find you online, and adds real value to your business.
    </p>

    <div className="cta-buttons">
      <Link to="/contact" className="btn btn-primary">
        Contact Us
      </Link>

      <Link to="/services" className="btn btn-secondary">
  View Services
</Link>
    </div>

  </div>
</section>
    </main>
  );
}

export default Home;