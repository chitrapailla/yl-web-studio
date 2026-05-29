import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h3>YL Web Studio</h3>
          <p>Modern Websites That Add Value</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <p>webstudioyl@gmail.com</p>
          <p>8168325057</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 YL Web Studio. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;