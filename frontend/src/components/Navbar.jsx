import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo copy.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavClick = (target) => {
    setMenuOpen(false); // close mobile menu

    // Define routes that have their own pages
    const pageRoutes = ["/about-us", "/blogs"];

    if (pageRoutes.includes(target)) {
      // If user clicks on a route like /about or /blogs, navigate there
      if (location.pathname !== target) {
        navigate(target);
      }
    } else {
      // Scroll to sections on home page
      if (location.pathname !== "/") {
        sessionStorage.setItem("scrollTo", target);
        navigate("/");
      } else {
        const section = document.getElementById(target);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="SoftGrid logo" />
          </a>
        </div>

        <div className="nav-links desktop">
          <a onClick={() => handleNavClick("home")}>Home</a>
          <a onClick={() => handleNavClick("services")}>Services</a>
          <a onClick={() => handleNavClick("projects")}>Projects</a>
          <a onClick={() => handleNavClick("/about-us")}>About</a>
          <a onClick={() => handleNavClick("/blogs")}>Blog</a>
          <a onClick={() => handleNavClick("contact")}>Contact</a>
        </div>

        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <a onClick={() => handleNavClick("home")}>Home</a>
          <a onClick={() => handleNavClick("services")}>Services</a>
          <a onClick={() => handleNavClick("projects")}>Projects</a>
          <a onClick={() => handleNavClick("/about-us")}>About</a>
          <a onClick={() => handleNavClick("/blogs")}>Blog</a>
          <a onClick={() => handleNavClick("contact")}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
