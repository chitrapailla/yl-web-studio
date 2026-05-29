import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}

export default Navbar;