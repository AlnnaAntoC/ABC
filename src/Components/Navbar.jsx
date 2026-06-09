import "./Navbar.css";
import logo from "../log.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const scrollToSection = (id) => {
    navigate("/services");
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 300);
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="logo-wrapper">
        <img src={logo} alt="Company Logo" className="logo-img" />
      </div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <button onClick={() => handleNavigate("/")}>Home</button>
        <button onClick={() => handleNavigate("/about")}>About Us</button>

        <div className="dropdown" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <button className="dropdown-btn">Services ▾</button>
          <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
            <button onClick={() => scrollToSection("medical-section")}>
              Medical Division
            </button>
            <button onClick={() => scrollToSection("trading-section")}>
              Trading Division
            </button>
          </div>
        </div>

        <button onClick={() => handleNavigate("/contact")}>Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
